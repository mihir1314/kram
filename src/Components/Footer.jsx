import { useState } from "react";
import "../CSS/module.Footer.css";
import {
  FaWhatsapp,
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = ({ selectedTab, setSelectedTab }) => {
  const [wpIsHovered, setWpIsHovered] = useState(false);
  const [piIsHovered, setPiIsHovered] = useState(false);
  const [fbIsHovered, setFbIsHovered] = useState(false);
  const [inIsHovered, setInIsHovered] = useState(false);

  return (
    <div className="Mjcontainer">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h3>
              <span className="kram">KARM</span>{" "}
              <span className="autos">AUTOS</span>
            </h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${
                    selectedTab === "Home" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab("Home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${
                    selectedTab === "Map" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab("Map");
                  }}
                >
                  Map
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${
                    selectedTab === "Products" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab("Products");
                  }}
                >
                  Products
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  Srvices
                </a>
              </li>{" "}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h3>Services</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  Vahical Wash
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${
                    selectedTab === "Puncture" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab("Puncture");
                  }}
                >
                  Puncture
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-body-secondary Mjli ${
                    selectedTab === "Petrol" ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab("Petrol");
                  }}
                >
                  Petrol
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  Vahical Repair
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  Engine Oil
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h3>Support</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  Contect Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary Mjli">
                  About
                </a>
              </li>
              <div className="MjSocialmedia">
                <FaWhatsapp
                  onMouseEnter={() => setWpIsHovered(true)}
                  onMouseLeave={() => setWpIsHovered(false)}
                  style={{ fill: wpIsHovered ? "#d24539" : "#fff" }}
                />
                <FaPinterestP
                  onMouseEnter={() => setPiIsHovered(true)}
                  onMouseLeave={() => setPiIsHovered(false)}
                  style={{ fill: piIsHovered ? "#d24539" : "#fff" }}
                />
                <FaFacebookF
                  onMouseEnter={() => setFbIsHovered(true)}
                  onMouseLeave={() => setFbIsHovered(false)}
                  style={{ fill: fbIsHovered ? "#d24539" : "#fff" }}
                />
                <FaInstagram
                  onMouseEnter={() => setInIsHovered(true)}
                  onMouseLeave={() => setInIsHovered(false)}
                  style={{ fill: inIsHovered ? "#d24539" : "#fff" }}
                />
              </div>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary MjsubscribeBtn" type="button">
                  Subscribe
                </button>
              </div>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2 mt-4">
                <p>
                  <FaPhoneAlt />
                  9426240802
                </p>
                &nbsp;&nbsp;
                <p>
                  <MdOutlineEmail />
                  mihirjariwala3434@gmail.com
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
