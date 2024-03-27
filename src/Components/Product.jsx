import React from "react";
import carp from "../Art/carP.jpeg";
import "../CSS/module.Product.css";
import tyretube from "../Art/tyretube.png";
import tyre from "../Art/tyre.png";
import oil from "../Art/oil.png";

function Product() {
  return (
    <section style={{ backgroundColor: `#1f1b2d` }}>
      <div className="text-center container py-5">
        <h2 className="pb-2 border-bottom mb-5" style={{ color: "white" }}>
          Bestsellers
        </h2>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div
                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="dark"
              >
                <img src={tyretube} className="w-100 MjCard" />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: `#282435` }}
                    ></div>
                  </div>
                </a>
              </div>
              <div className="card-body">
                <a href="" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                <img
                  src={tyre}
                  className="w-100 MjCard"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Eco</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: `#282435` }}
                    ></div>
                  </div>
                </a>
              </div>
              <div className="card-body">
                <a href="" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-zoom ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src={oil}
                  className="w-100 MjCard"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: `#282435` }}
                    ></div>
                  </div>
                </a>
              </div>
              <div className="card-body">
                <a href="" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div
                className="bg-image hover-zoom ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="Art/starter.jpg"
                  className="w-100 MjCard"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: `#282435` }}
                    ></div>
                  </div>
                </a>
              </div>
              <div className="card-body">
                <a href="" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                <img
                  src='Art/car-breaks.jpg'
                  className="w-100 MjCard"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2">Eco</span>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: `#282435` }}
                    ></div>
                  </div>
                </a>
              </div>
              <div className="card-body">
                <a href="" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">$61.99</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-zoom ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src='Art/jumper.jpg'
                  className="w-100 MjCard"
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: `#282435` }}
                    ></div>
                  </div>
                </a>
              </div>
              <div className="card-body">
                <a href="" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
