import { FaRegTrashAlt, FaHeart, FaMinus } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { HiOutlinePlusSm } from "react-icons/hi";
import axios from "axios";

const Cart_item = ({data,handleDeleteItemClick,orderid}) => {

  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img
              src={data.imageURL}
              className="w-100 h-100"
              alt="Blue Jeans Jacket"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p>
            <strong>{data.name}</strong>
          </p>
          <p>Description: {data.description}</p>
          <p>Dsicount: {data.discount}%</p>
          <button
            type="button"
            className="btn btn-primary btn-sm me-1 mb-2"
            data-mdb-toggle="tooltip"
            onClick={() => handleDeleteItemClick(data.id)}
            title="Remove item"
          >
            <FaRegTrashAlt style={{ margin: "0" }} />
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mb-2"
            data-mdb-toggle="tooltip"
            title="Move to the wish list"
          >
            <FaHeart style={{ margin: "0" }} />
          </button>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <button
              className="btn btn-primary px-3 me-2"
            >
              <FaMinus style={{ margin: "0" }} />
            </button>

            <div className="form-outline">
              <input
                id="form1"
                min="0"
                name="quantity"
                defaultValue="1"
                type="number"
                className="form-control"
              />
            </div>

            <button
              className="btn btn-primary px-3 ms-2"
            >
              <HiOutlinePlusSm style={{ margin: "0" }} />
            </button>
          </div>

          <p className="text-start text-md-center">
            <strong>₹{data.price}</strong>
          </p>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Cart_item;
