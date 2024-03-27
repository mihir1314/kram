import { Link, useNavigate } from "react-router-dom";
import "../CSS/module.Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "Success!") {
          navigate("/");
        } else {
          alert("Error: " + res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-8 col-lg-4">
        <div className="card card-lg">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">LOGIN</h1>
              <div className="mb-4">
                <label className="form-label" htmlFor="registerEmail">
                  Your email
                </label>
                <input
                  type="email"
                  onChange={e => setValues({...values,email: e.target.value})}
                  className="form-control form-control-lg"
                  name="email"
                  id="registerEmail"
                  placeholder="example@site.com"
                  aria-label="example@site.com"
                  required=""
                  data-msg="Please enter a valid email address."
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="registerEmail">
                  Your Password
                </label>
                <input
                  type="password"
                  onChange={e => setValues({...values,password: e.target.value})}
                  className="form-control form-control-lg"
                  name="password"
                  id="password"
                  placeholder="Type your Password"
                  aria-label="Type your password"
                  required=""
                  data-msg="Please enter your Password."
                />
              </div>

              <div className="d-grid text-center">
                <button type="submit" className="btn btn-lg">
                  Login
                </button>
                <span className="form-text">
                  Do not Have an Account?
                  <Link
                    to={"/Register"}
                    className="link"
                    href="./page-help-center.html"
                  >
                    Register!
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
