import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import col1 from "../Art/col1.png";
import col2 from "../Art/col2.png";
import col3 from "../Art/col3.png";
import "../CSS/module.Carousel.css";
import cover from "../Art/CoverCol1.png";
import cover2 from "../Art/CoverCol2.png";
import "../CSS/module.cover.css";
import { FaWhatsapp ,FaPinterestP,FaFacebookF ,FaInstagram  } from "react-icons/fa";

function Carousel() {
  const [wpIsHovered, setWpIsHovered] = useState(false);
  const [piIsHovered, setPiIsHovered] = useState(false);
  const [fbIsHovered, setFbIsHovered] = useState(false);
  const [inIsHovered, setInIsHovered] = useState(false);

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div className="row align-items-center pb-5">
              <div className="col-md-7 col-lg-6 col-xl-5 offset-xl-1 text-center text-md-start mb-4 mb-md-0">
                <h1 className="font-weight-bold text-dark mb-0 MjFonth1">
                  CAR
                  <br /> REPAIR <br />
                  SHOP
                </h1>
                <h2 className="MjFonth2">FIRST SERVICE FREE</h2>
                <p className="fs-lg text-dark opacity-70 mb-md-5 MjPera">
                  Download Finder App and join the community of car enthusiasts.
                  Don't stop your car search when you leave your computer with
                  our Android and iOS app!
                </p>
                <button className="btn logoutBTN">ORDER NOW</button>
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
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                  <a className="btn-market me-sm-3 mb-3" href="#" role="button">
                    <svg width="132" height="34" fill="#fff"></svg>
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-6">
                <img
                  className="d-block mx-auto MjCoverCol"
                  src={cover2}
                  alt="Mobile App"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="row align-items-center pb-5">
              <div className="col-md-7 col-lg-6 col-xl-5 offset-xl-1 text-center text-md-start mb-4 mb-md-0">
                <h1 className="font-weight-bold text-dark mb-0 MjFonth1">
                  CAR
                  <br /> REPAIR <br />
                  SHOP
                </h1>
                <h2 className="MjFonth2">FIRST SERVICE FREE</h2>
                <p className="fs-lg text-dark opacity-70 mb-md-5 MjPera">
                  Download Finder App and join the community of car enthusiasts.
                  Don't stop your car search when you leave your computer with
                  our Android and iOS app!
                </p>
                <button className="btn logoutBTN">READ MORE</button>
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
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                  <a className="btn-market me-sm-3 mb-3" href="#" role="button">
                    <svg width="132" height="34" fill="#fff"></svg>
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-6">
                <img
                  className="d-block mx-auto MjCoverCol"
                  src={cover}
                  alt="Mobile App"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={col2} className="d-block w-100 carouselIMG" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content htmlFor the second slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
