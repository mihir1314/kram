import React, { useEffect, useRef } from 'react';
import carp from '../Art/carP.jpeg';
import '../CSS/module.Services.css';
import transmitionServices from '../Art/transmissionServices.jpeg';
import tyrePunctureServices from '../Art/punctureServices.jpeg';
import petrolServices from '../Art/petrolServices.jpeg';
import { MdAccessTime } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GiTyre } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";

const AnimatedHeading = ({ children }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headingRef.current.classList.add('in-view');
          } else {
            headingRef.current.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <h3 ref={headingRef} className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold MjAnimated-heading">
      {children}
    </h3>
  );
};

function Services() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom" style={{color:'white'}}>Automation Services</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg MjCard" style={{ backgroundImage: `url(${transmitionServices})` }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <AnimatedHeading>Revitalize Your Drive With Us!</AnimatedHeading>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <IoSettingsOutline/>
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small>Repair</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                  <small><MdAccessTime />4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg MjCard" style={{ backgroundImage: `url(${tyrePunctureServices})` }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <AnimatedHeading>Puncture Services At Your Door!</AnimatedHeading>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <GiTyre />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small>Puncture</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                  <small><MdAccessTime />4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg MjCard" style={{ backgroundImage: `url(${petrolServices})` }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <AnimatedHeading>Anywhere Petro Services!</AnimatedHeading>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <LuFuel />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small>Petrol</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                  <small><MdAccessTime />4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
