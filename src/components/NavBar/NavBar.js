import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import EventCard from "./Events";
import "./NavBar.css";
import MenuDropDown from "./MenuDropDown";
import { HorseRacingData, MotorsportData, StayEatData } from "../EventData";
import OpenBookButton from "./BookNow/BookNow";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  
  return (
    <>
      <div className="navbar">
        <div>
          {/* BURGER DIV */}
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} className="m-4 text-3xl text-white" />
          </Link>
        </div>
        <div className="my-2">
          <a href="#" className="text-white text-5xl title my-2 uppercase">
            Goodwood
          </a>
        </div>
        <div>
          <button className="bg-black border-2 w-20 m-3 text-base border-custom-green text-white">
            Shop
          </button>
          <button className="bg-custom-green w-20 m-3 text-lg text-black">
            Book
          </button>
          <OpenBookButton />
          <i className="fa-solid fa-magnifying-glass text-2xl text-white m-3"></i>
          <button className="text-white m-3">Sign In</button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="side-menu">
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars ml-8 text-3xl"></Link>
            </li>
            <li className="mt-8">
              <MenuDropDown />
            </li>

            {MenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.url}>
                    <span className="text-white ">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="mt-8">
              <MenuDropDown />
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-wrap justify-center space-y-14 w-4/5 ml-9 mt-10">
            <div className="flex justify-between">
              <div className="">
                <h5 className="text-white text-3xl">Browse By Event</h5>
              </div>
              <div className="justify-end">
                <button className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Browse all
                </button>
              </div>
            </div>
          <div className="text-3xl text-white w-full overflow-x-auto">

            <EventCard data={MotorsportData} />
          </div>
            <div className="flex justify-between">
              <div className="">
                <h5 className="text-white text-3xl">Browse By Event</h5>
              </div>
              <div className="justify-end">
                <button className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Browse all
                </button>
              </div>
            </div>
          <div className="text-white text-3xl w-full overflow-x-auto">

            <EventCard data={HorseRacingData} />
          </div>
        </div>
      </nav>

    </>
  );
}
export default NavBar;
