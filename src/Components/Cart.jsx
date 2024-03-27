import { FaGooglePay } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import { SiPaytm } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import "../CSS/module.Cart.css";
import Cart_item from "./Cart_item";
import { useEffect, useState } from "react";
import Summary from "./summary";
import axios from "axios";

const Cart = () => {
  const [data, setData] = useState([]);
  const [customerid, setCustomerid] = useState("");
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8081/home")
      .then((res) => {
        if (res.data.Status === "Success!") {
          setCustomerid(res.data.id);
        } else {
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (customerid) {
      axios
        .get(`http://localhost:8081/orders?customerId=${customerid}`)
        .then((res) => {
          let totalPrice = 0;
          res.data.forEach((order) => {
            totalPrice += order.price;
          });
          // Set total price state
          setTotalPrice(totalPrice);
          if (res.data.length > 0) {
            setData(res.data);
          } else {
            console.log("No orders found");
            ("No orders found for this customer");
          }
        })
        .catch((err) => {
          console.error("Error fetching orders:", err);
          setMessage("An error occurred while fetching orders");
        });
    }
  }, [customerid]);

  const handleDeleteItemClick = (itemId) => {
    // Make API request to delete the item with the specified itemId
    axios
      .delete(`http://localhost:8081/orders/${itemId}`)
      .then((res) => {
        console.log("Item deleted successfully");
        // Update the data state by removing the deleted item
        setData(data.filter((item) => item.id !== itemId));
        // Update the total price state immediately after item deletion
        setTotalPrice(
          totalPrice - data.find((item) => item.id === itemId).price
        );
      })
      .catch((err) => {
        console.error("Error deleting item:", err);
      });
  };

  const makePayment = async () => {
    console.log(totalPrice);
  };

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart items</h5>
              </div>
              <div className="card-body">
                {data.length === 0 ? (
                  <p>Buy an item first</p>
                ) : (
                  <ul>
                    {data.map((d, i) => (
                      <Cart_item
                        key={d.id}
                        data={d}
                        handleDeleteItemClick={handleDeleteItemClick}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p>
                  <strong>We accept</strong>
                </p>
                <RiVisaFill />
                <SiPaytm />
                <BsPaypal />
                <FaGooglePay />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div
                className="card-body"
                style={{ backgroundColor: "transparent" }}
              >
                <ul
                  className="list-group list-group-flush"
                  style={{ backgroundColor: "transparent" }}
                >
                  {data.length === 0 ? (
                    <p>No Items</p>
                  ) : (
                    <ul style={{ padding: "0" }}>
                      {data.map((d, i) => (
                        <Summary key={d.id} data={d} />
                      ))}
                    </ul>
                  )}
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>FREE</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>₹{totalPrice}</strong>
                    </span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="MjsubscribeBtn btn btn-primary btn-lg btn-block"
                  onClick={makePayment}
                >
                  PAY ₹{totalPrice}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
