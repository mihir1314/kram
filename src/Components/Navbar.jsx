import "../CSS/module.Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import menu from "../Art/menu.png";
import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "react-bootstrap";

function Navbar({ selectedTab, setSelectedTab }) {
  const [isSticky, setSticky] = useState(false);
  const [hrIsHovered, setHrIsHovered] = useState(false);
  const [crIsHovered, setCrIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081/home")
      .then((res) => {
        if (res.data.Status === "Success!") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDelete = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        if (res.data.Status === "Success!") {
          // Reload the page after successful logout
          window.location.reload(true);
        } else {
          console.log("Logout failed");
        }
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isSticky ? "sticky" : ""} MjNav`}
      >
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <span className="kram">KARM</span>{" "}
            <span className="autos">AUTOS</span>
          </a>
          <button
            className="navbar-toggler customtoggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <img className="menu" src={menu} alt="Custom Icon" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link page ${selectedTab === "Home" &&
                    `active`}`}
                  onClick={() => {
                    setSelectedTab("Home");
                    console.log(selectedTab);
                  }}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link page ${
                    selectedTab === "Map" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab("Map");
                  }}
                  href="#"
                >
                  Map
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link page ${
                    selectedTab === "Products" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab("Products");
                  }}
                  href="#"
                >
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle page  ${
                    selectedTab === "Petrol" || selectedTab === "Puncture"
                      ? "active"
                      : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>

                <ul className={`dropdown-menu`}>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedTab("Puncture");
                      }}
                    >
                      Puncture
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedTab("Petrol");
                      }}
                    >
                      Petrol
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Explore All Services
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link page" href="#">
                  AboutUs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page" href="#">
                  ContactUs
                </a>
              </li>
            </ul>
            <IoIosHeartEmpty
              onMouseEnter={() => setHrIsHovered(true)}
              onMouseLeave={() => setHrIsHovered(false)}
              style={{ fill: hrIsHovered ? "#d24539" : "#fff" }}
            />
            <IoBagHandle
              onMouseEnter={() => setCrIsHovered(true)}
              onMouseLeave={() => setCrIsHovered(false)}
              style={{
                fill: crIsHovered
                  ? "#d24539"
                  : selectedTab === "Cart"
                  ? "#d24539"
                  : "#fff",
              }}
              onClick={() => {
                setSelectedTab("Cart");
              }}
            />
            &nbsp;&nbsp;
            {auth ? (
              <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
                <Dropdown.Toggle className="transparent-background" variant="success" id="dropdown-basic">
                <CgProfile />
                  {name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Profile</Dropdown.Item>
                  <Dropdown.Item href="#">Analytics</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Settings & Privacy</Dropdown.Item>
                  <Dropdown.Item href="#">Help</Dropdown.Item>
                  <Dropdown.Item href="#" onClick={handleDelete}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link
                className="btn btn-outline-success logoutBTN"
                type="submit"
                to="/login"
              >
                <MdLogin />
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
