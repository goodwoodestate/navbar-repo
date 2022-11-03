import React from "react";
import { MotorsportData } from "../EventData";
import './Event.css';
   
function EventCard(props) {
  
  return (
    <div className="flex m-8">
      {MotorsportData.map((item) => {
        
        var bg = item.image;
        console.log(bg)
        return (
          <div key={item.id} className="m-h-3">
          <a href="#" className="block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:border-gray-700 m-8 min-w-250 h-full" style={{ backgroundImage: `url(${item.image})` }}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">{item.title}</h5>
              <p className="font-normal text-white dark:text-gray-400">{item.description}</p>
          </a>
          </div>
        );
      })}
    </div>
  );
}



export default EventCard;
