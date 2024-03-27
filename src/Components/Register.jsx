import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState([]);

  const navigate = useNavigate();
  const hendalSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => {
        if (res.data.Status === "Success!") {
          navigate("/Login");
        } else {
          alert("Registration failed");
        }
      })
      .catch((err) => {
        console.error("Error during registration:", err);
        alert("An error occurred during registration");
        console.log(values);
      });
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-8 col-lg-4">
        <div className="card card-lg">
          <div className="card-body">
            <form onSubmit={hendalSubmit} className="py-4">
              <h1 className="text-center mb-4">Registration</h1>

              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg custom-height"
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  name="name"
                  id="name"
                  placeholder="Your User Name"
                  aria-label="Your User Name"
                  required=""
                  data-msg="Please enter your name."
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg custom-height"
                  name="email"
                  id="email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required=""
                  data-msg="Please enter a valid email address."
                />
              </div>

              <div className="mb-4">
                <input
                  type="number"
                  onChange={(e) =>
                    setValues({ ...values, mobile: e.target.value })
                  }
                  className="form-control form-control-lg custom-height"
                  name="mobile"
                  id="mobile"
                  placeholder="Your Mobile Number"
                  aria-label="Your Mobile Number"
                  required=""
                  data-msg="Please enter your mobile number."
                  pattern="[789][0-9]{9}"
                  title="Please enter a valid mobile number!"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg custom-height"
                  name="address"
                  id="address"
                  onChange={(e) =>
                    setValues({ ...values, address: e.target.value })
                  }
                  placeholder="Your Address"
                  aria-label="Your Address"
                  required=""
                  data-msg="Please enter your address."
                />
              </div>

              <div className="mb-4">
                <select
                  className="form-control form-control-lg custom-height"
                  name="gender"
                  id="gender"
                  onChange={(e) =>
                    setValues({ ...values, gender: e.target.value })
                  }
                  aria-label="Select gender"
                  required=""
                  data-msg="Please select your gender."
                >
                  <option defaultValue={""}>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg custom-height"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  placeholder="Create Password"
                  aria-label="Create Password"
                  required=""
                  data-msg="Please enter your Password."
                />
              </div>

              <div className="d-grid text-center">
                <button type="submit" className="btn btn-lg">
                  Register
                </button>
                <span className="form-text">
                  Do You Have an Account?
                  <Link to={"/Login"} className="link">
                    Login!
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

export default Register;
