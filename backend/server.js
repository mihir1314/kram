import express, { response } from "express";
import mysql from "mysql";
import cors from "cors";
import jwt, { decode } from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import multer from "multer";
import { Stripe } from 'stripe';

const saltRounds = 10; // You can adjust the number of salt rounds
const salt = bcrypt.genSaltSync(saltRounds);

const app = express();
const port = 8081;

const stripe = new Stripe('sk_test_51OxsflSBiPCP2O0QYrEhfDuuXEriOw6HFlBPuDXJ4RV3V8IinPHqgB992czHP5LbUw9mNOwwblWZMNWfC19w2rki00U1Vs5CzB', {
  apiVersion: '2020-08-27', // Specify the API version
});

app.use("/uploads", express.static("Uploads"));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kram",
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/product", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/payproduct", (req, res) => {
  const sql = "SELECT * FROM product WHERE id = ?";
  id = req.body.id;
  db.query(sql,id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/customers", (req, res) => {
  const sql = "SELECT * FROM customers";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to handle form submissions with file uploads
app.post("/product/addProduct", upload.single("image"), (req, res) => {
  const { name, price, description, likes, discount } = req.body;

  // Assuming the 'image' field in the form is used to upload the image file
  const image = req.file ? req.file.filename : "DefaultImageURL";

  const sql =
    "INSERT INTO `product`(`name`, `price`, `description`, `likes`, `image`, `discount`) VALUES (?, ?, ?, ?, ?,?)";

  db.query(
    sql,
    [name, price, description, likes, image, discount],
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "you are not auth" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "the token is not correct" });
      } else { 
        req.id = decoded.id;
        req.name = decoded.name;
        next();
      }
    }); 
  }
};

app.get("/home", verifyUser, (req, res) => {
  return res.json({ Status: "Success!",name: req.name,id:req.id });
});

app.get("/", (req, res) => {
  return res.json({ message: "from Backend Side" });
});

app.post("/register", (req, response) => {
  const sql =
    "INSERT INTO `customers` (`name`, `email`, `mobile_number`, `password`, `address`, `gender`) VALUES (?, ?, ?, ?, ?, ?)";
  const { name, email, mobile, password, address, gender } = req.body;

  bcrypt.hash(password.toString(), salt, (err, hash) => {
    if (err) {
      console.error("Error for hashing password:", err);
      return response.json({ Error: "Error for hashing password" });
    }

    db.query(sql, [name, email, mobile, hash, address, gender], (err, res) => {
      if (err) {
        console.error("Inserting Data Error in server:", err);
        return response.json({ Error: "Inserting Data Error in server" });
      }

      return response.json({ Status: "Success!" });
    });
  });
});

app.post("/login", async (req, res) => {
  const sql = "SELECT * FROM customers WHERE email = ?";

  db.query(sql, [req.body.email], (err, data) => {
    if (err) return console.error("Login error in server:", err);
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password,
        data[0].password.toString(),
        (err, response) => {
          if (err)
            return res.json({ Error: "password compare error on server" });
          if (response) {
            const name = data[0].name;
            const id = data[0].id;
            const token = jwt.sign({id,name }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "Success!" });
          } else {
            console.log(data[0].password.toString());
            return res.json({ Error: "password not matched on server" });
          }
        }
      );
    } else {
      return res.json({ Error: "email not existed on server" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success!" });
});
app.post("/Admin/register", (req, response) => {
  const sql = "INSERT INTO admin (`name`,`email`,`password`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return response.json({ Error: "error for hashing password" });

    const values = [req.body.name, req.body.email, hash];

    db.query(sql, [values], (err, res) => {
      if (err)
        return response.json({ Error: "Inserting Data Error in server" });
      return response.json({ Status: "Success!" });
    });
  });
});

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "you are not auth" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "the token is not correct" });
      } else { 
        req.id = decoded.id;
        req.name = decoded.name;
        next();
      }
    }); 
  }
};

app.get("/admin", verifyAdmin, (req, res) => {
  return res.json({ Status: "Success!",name: req.name,id:req.id });
});

app.post("/admin/login", async (req, res) => {
  const sql = "SELECT * FROM admin WHERE email = ?";

  db.query(sql, [req.body.email], (err, data) => {
    if (err) return console.error("Login error in server:", err);
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password,
        data[0].password.toString(),
        (err, response) => {
          if (err)
            return res.json({ Error: "password compare error on server" });
          if (response) {
            return res.json({ Status: "Success!" });
          } else {
            return res.json({ Error: "password not matched on server" });
          }
        }
      );
    } else {
      return res.json({ Error: "email not existed on server" });
    }
  });
});

app.post("/admin/register", (req, res) => {
  const sql = "INSERT INTO `admin`( `name`, `email`, `password`) VALUES (?, ?, ?)";
  const { name, email, password } = req.body;

  bcrypt.hash(password.toString(), saltRounds, (err, hash) => {
    if (err) {
      console.error("Error for hashing password:", err);
      return res.status(500).json({ Error: "Error for hashing password" });
    }

    db.query(sql, [name, email, hash], (err, result) => {
      if (err) {
        console.error("Inserting Data Error in server:", err);
        return res.status(500).json({ Error: "Inserting Data Error in server" });
      }

      return res.json({ Status: "Success!" });
    });
  });
});

app.post("/place_order", (req, response) => {
  const sql =
    "INSERT INTO `pending_order`(`name`, `price`, `description`, `discount`, `CustomerID`, `imageURL`) VALUES (?,?,?,?,?,?)";
  const { name, price, description, discount, CustomerID, imageURL } = req.body;

  db.query(sql, [name, price, description, discount, CustomerID, imageURL], (err, res) => {
    if (err) {
      console.error("Inserting Data Error in server:", err);
      return response.json({ Error: "Inserting Data Error in server" });
    }

    return response.json({ Status: "Success!" });
  });
});

app.get("/orders", (req, res) => {
  const customerId = req.query.customerId; // Assuming you're passing customerId as a query parameter

  // Ensure customerId is provided
  if (!customerId) {
    return res.status(400).json({ error: "CustomerID is required" });
  }

  const sql = "SELECT * FROM pending_order WHERE CustomerID = ?";
  
  db.query(sql, [customerId], (err, data) => {
    if (err) {
      console.error("Error fetching orders:", err);
      return res.status(500).json({ error: "Error fetching orders" });
    }
    return res.json(data);
  });
});

app.delete("/orders/:orderId", (req, res) => {
  const orderId = req.params.orderId; // Extract orderId from URL params

  // Ensure orderId is provided
  if (!orderId) {
    return res.status(400).json({ error: "OrderID is required" });
  }

  const sql = "DELETE FROM pending_order WHERE id = ?";
  
  db.query(sql, [orderId], (err, result) => {
    if (err) {
      console.error("Error deleting order:", err);
      return res.status(500).json({ error: "Error deleting order" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.json({ message: "Order deleted successfully" });
  });
});

app.post("/pay", async (req, res) => {
  const productName = "Sample Product";
  const productPrice = 100; // $100 in cents
  const productQuantity = 1; // Assuming quantity is always 1

  const lineItems = [{
    price_data: {
      currency: "usd",
      product_data: {
        name: productName,
      },
      unit_amount: productPrice * 100, // Convert price to cents
    },
    quantity: productQuantity,
  }];

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success", // Redirect URL after successful payment
      cancel_url: "http://localhost:5173/cancel", // Redirect URL after payment cancellation
    });
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session in server:", error);
    res.status(500).send("Error creating checkout session");
  }
});

// Fetch customers
app.get('/customers', (req, res) => {
  const sql = 'SELECT * FROM customers';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching customers:', err);
      res.status(500).json({ error: 'Error fetching customers' });
    } else {
      res.json(result);
    }
  });
});

app.get("/ordes", (req, res) => {
  const sql = "SELECT * FROM `order`";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/delivery_man", (req, res) => {
  const sql = "SELECT * FROM `delivery_man`";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
