import React, { useEffect } from "react";
import "../CSS/module.ProductList.css";
import Card from "./card.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const ProductList = ({setSelectedTab}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/product")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 2022,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          customWidth: calculateCustomWidth(1),
        },
      },
      {
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          customWidth: calculateCustomWidth(1),
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          customWidth: calculateCustomWidth(4),
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          customWidth: calculateCustomWidth(3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          customWidth: calculateCustomWidth(2),
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          customWidth: calculateCustomWidth(1),
        },
      },
      // Additional breakpoints
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          customWidth: calculateCustomWidth(1),
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          customWidth: calculateCustomWidth(1),
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          customWidth: calculateCustomWidth(1),
        },
      },
      // Add more breakpoints as needed
    ],
  };

  // Function to calculate custom width based on the number of slides to show
  function calculateCustomWidth(slidesToShow) {
    const containerWidth = 75; // Adjust as needed
    const gutter = 16; // Adjust as needed
    return `${(100 - gutter * (slidesToShow - 1)) / slidesToShow}%`;
  }

  const slideData = new Array(20).fill(null);

  return (
    <section className="pb-4 mb-lg-5">
      <div className="container px-4 py-5">
        <h2
          className="pb-2 mb-2 border-bottom mx-6 mx-lg-2"
          style={{ color: "white" }}
        >
          Products
        </h2>
      </div>
      <Slider {...settings}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((d, i) => <Card key={d.id} data={d} setSelectedTab={setSelectedTab} />)
        ) : (
          <p>Loading...</p>
        )}
      </Slider>
    </section>
  );
};
export default ProductList;
