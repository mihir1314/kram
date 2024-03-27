import { IoIosHeartEmpty } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ data ,setSelectedTab}) => {
  const imageUrl = `http://localhost:8081/uploads/${data.image}`;
  const [customerid,setCustomerid] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8081/home")
      .then((res) => {
        if (res.data.Status === "Success!") {
          setCustomerid(res.data.id);
        } else {
          //setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handelonclickbuy = (event) => {
    event.preventDefault();
  
    const values = {
      name: data.name,
      price: data.price,
      description: data.description, // Assuming you have description in your data object
      discount: data.discount, // Assuming you have discount in your data object
      CustomerID:customerid,
      imageURL: imageUrl,
    };
  
    axios
      .post("http://localhost:8081/place_order", values)
      .then((res) => {
        if (res.data.Status === "Success!") {
          setSelectedTab("Cart");
        } else {
          alert("Insert data failed");
        }
      })
      .catch((err) => {
        console.error("Error during placing order:", err);
        alert("An error occurred during placing order");
        console.log(values)
      });
  };
  
  const handelonclickaddtocart = (event) => {
    event.preventDefault();
  
    const values = {
      name: data.name,
      price: data.price,
      description: data.description,
      discount: data.discount,
      CustomerID: customerid,
      imageURL: imageUrl,
    };
  
    axios
      .post("http://localhost:8081/place_order", values)
      .then((res) => {
        if (res.data.Status === "Success!") {
          // Item added successfully, show a message to the user
          alert("Item added to cart successfully!");
        } else {
          // If there's an issue with adding the item, show an error message
          alert("Insert data failed");
        }
      })
      .catch((err) => {
        console.error("Error during placing order:", err);
        alert("An error occurred during placing order");
      });
  };
  


  return (
    <div
      key={data.id}
      className="swiper-slide"
      role="group"
      aria-label={`${data.id + 1} / 6`}
      style={{ width: "250px", flex: "0 0 auto" }}
      data-swiper-slide-index={data.id}
    >
      <article className="card border-0 h-100 mx-1">
        <div className="position-relative">
          <a
            className="position-absolute top-0 start-0 w-100 h-100"
            aria-label="Read more"
          ></a>
          <a
            href="#"
            className="btn btn-sm position-absolute top-0 end-0 zindex-5 me-1 mt-1"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Read later"
            data-bs-original-title="Read later"
          >
            <IoIosHeartEmpty />
          </a>
          <img src={imageUrl} className="card-img-top" alt="Image" />
        </div>
        <div className="card-body pb-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <a
              href="#"
              className="badge fs-sm text-nav bg-danger text-decoration-none"
            >
              {data.discount}%&nbsp; OFF
            </a>
          </div>
          <h3 className="h5 mb-0">
            <a href="blog-single.html">{data.name}</a>
          </h3>
          <h3 className="h5 mb-0">
            <a href="blog-single.html"> ₹{data.price}</a>
          </h3>
        </div>
        <div className="card-footer py-4">
          <button
            className="btn MjsubscribeBtn"
            type="button"
            onClick={handelonclickbuy}
          >
            <CiShoppingCart style={{ margin: `0` }} />
            BUY
          </button>
          &nbsp;&nbsp;
          <button
            className="btn btn-outline-success position-absolute end-0 me-3 logoutBTN"
            type="submit"
            onClick={handelonclickaddtocart}
          >
            ADD TO CART
          </button>
        </div>
      </article>
    </div>
  );
};

export default Card;
