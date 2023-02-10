import React, { useEffect } from  "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Women from '../assets/women.jpeg';

const TopContainer = () => {

  useEffect(() => {
    const menuTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");

    menuTarget.addEventListener('mouseenter', () => {
      menuTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener('mouseleave', () => {
      menuTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(500px)";
    });
  }, [])

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search item, and collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>

        <div className="profileImage">
          <img src={Women} alt='/' />
        </div>

        <p className="profileName">Jhon Binag</p>

        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>Web Design</li>
            <li>UI/UX Design</li>
            <li>Form Design</li>
            <li>UI Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;