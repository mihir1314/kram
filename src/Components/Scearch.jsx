import React, { useState } from 'react';
import '../CSS/module.Search.css';
import magnifyingGlassIcon from '../Art/magnifying-glass (1).png';
import { FaSearch } from "react-icons/fa";

function Search() {
  const [isInputVisible, setInputVisible] = useState(false);

  const handleIconClick = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <>
      <div className="searchBar">
        <div className={`search ${isInputVisible ? 'active' : ''}`}>
          <FaSearch alt="Magnifying Glass"
            className={`icon ${isInputVisible ? 'active' : ''}`}
            onClick={handleIconClick} />
          <input
            type="search"
            name="search"
            className={`searchInput ${isInputVisible ? 'active' : ''}`}
          />
        </div>
        <h5>Contact Us: <a href="tel:+919426240802">+91 9426240802</a></h5>
      </div>
    </>
  );
}

export default Search;
