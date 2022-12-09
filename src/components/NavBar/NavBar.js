import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import EventCard from "./Events";
import BlackButton from "./Buttons/Button";
import GWGreenButton from "./Buttons/GWGreenButton";
import "./NavBar.css";
import MenuDropDown from "./MenuDropDown";
import signInIcon from "../NavBar/assets/images/sign-in--icon.png"
import searchIcon from "../NavBar/assets/images/search--icon.png"
import HotelBooking from "./HotelBooking";
import {
  HorseRacingData,
  MotorsportData,
  EventShopData,
  ExpierencesData,
  StayEatData,
} from "../EventData";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ShopLowerContainer from "./ShopTiles";
import CategoryButton from "./OverlayCategoryButton";



function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  let dataSet = EventShopData;

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  function handleChildCategoryButtonClick(e) {
    if (e.target.innerText === "Tickets") {
      console.log("Tickets clicked");
      dataSet = EventShopData;
    } else if (e.target.innerText === "Experiences") {
      console.log("Expierences clicked");
      dataSet = ExpierencesData;
    } else if (e.target.innerText === "Restaurant") {
      console.log("Restaurant clicked");
      dataSet = StayEatData;
    } else if (e.target.innerText === "Hotel") {
      console.log("Clicked the Hotel Button");
    }
  }

  const [open, setOpen] = useState(false);

  const buyButton = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="navbar">
        {/* BURGER DIV */}
        <div className="spacing">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} className="m-4 text-3xl text-white" />
          </Link>
        </div>
        <div className="my-2">
          <a href="#" className="text-white text-5xl title my-2 uppercase">
            Goodwood
          </a>
        </div>
        <div className="right-hand__collection">
          <BlackButton>
            Shop
          </BlackButton>
          <GWGreenButton
            onClick={buyButton}
          >
            Book
          </GWGreenButton>
          <img src={searchIcon}/>
          <button className="text-white ml-1 m-3">Search</button>
          <img src={signInIcon}/>
          <button className="text-white m-3">Sign In</button>
        </div>
      </div>
      <nav className={sidebar ? "transition-all nav-menu active" : "nav-menu"}>
        <div className="side-menu">
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars ml-8 text-3xl"></Link>
            </li>
            <li className="mt-8">
              <MenuDropDown linkText="Duke Of Richmond">
                Goodwoods Estate
                <p className="hidden">inner</p>
              </MenuDropDown>
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
              <MenuDropDown linkText="Contact the Team!">
              Contact Us
              </MenuDropDown>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-wrap justify-center space-y-14 w-3/5 ml-9 mt-10">
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
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              <div className="fixed inset-0" />
              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl overshop-slider">
                          <div className="px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg font-medium text-white">
                                Shop
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6 text-white bg-bg-custom"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div className="absolute inset-0 px-4 sm:px-6">
                              {/* BELOW IS OUR CODE */}
                              <div className="text-white flex justify-between text-lg border-t">
                                <CategoryButton
                                  category={"Tickets"}
                                  onClick={handleChildCategoryButtonClick}
                                />
                                <CategoryButton
                                  category={"Experiences"}
                                  onClick={handleChildCategoryButtonClick}
                                />
                                <CategoryButton
                                  category={"Restaurant"}
                                  onClick={handleChildCategoryButtonClick}
                                />
                                <CategoryButton
                                  category={"Hotel"}
                                  onClick={handleChildCategoryButtonClick}
                                />
                              </div>
                              {/* ABOVE IS OUR CODE*/}
                              <div
                                className="h-full mt-8 border-gray-200"
                                aria-hidden="true"
                              >
                                {/* <RestaurantBooking /> */}
                                {/* <HotelBooking /> */}
                                <ShopLowerContainer QuerySelectorData={dataSet} />
                                {/* info={EventShopData (ticket stuff data)} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
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
    </div>
  );
}
export default NavBar;
