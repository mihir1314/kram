import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8081/admin/login", values)
      .then((res) => {
        if (res.data.Status === "Success!") {
          navigate("/admin/");
        } else {
          alert("Error: " + res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary vh-100"
      style={{ color: "black" }}
    >
      <div className="bg-white p-3 rounded w-60">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className="d-md-block">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <div className="col-sm-10">
              <input
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                type="email"
                name="email"
                className="form-control w-120"
                id="email"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <div className="col-sm-10">
              <input
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                type="password"
                name="password"
                className="form-control w-120"
                id="password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
            Login
          </button>
          <p>you are agreed to all terms and conditions</p>
          <Link
            to={"/admin/register"}
            className="btn btn-default border w-100 bg-dark rounded-0 text-decoration-none"
          >
            Register?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
