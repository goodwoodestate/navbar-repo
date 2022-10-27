import React from "react";
import { Link } from 'react-router-dom';
import { MotorsportData } from "../EventData";

function EventCard() {
  return (
    <div>
      {MotorsportData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.url}>
              <span className="text-custom-green">{item.title}</span>
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default EventCard;
