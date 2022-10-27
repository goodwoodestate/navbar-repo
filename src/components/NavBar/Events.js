import React from "react";
import { MotorsportData } from "../EventData";
import './Event.css';
   
function EventCard() {
  return (
    <div className="flex m-8 overflow-x-auto">
      {MotorsportData.map((item, index) => {
        return (
          <div >
          <a style={{backgroundImage: item.image}} href="#" class="block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-8 w-72 test">
            <img src={item.image}></img>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{item.title}</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">HELLLL YEAHHHH</p>
          </a>
          </div>
        );
      })}
    </div>
  );
}

export default EventCard;
