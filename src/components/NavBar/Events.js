import React from "react";

import "./Event.css";

function EventCard(props) {
  return (
    <div className="flex mt-4 gap-5">
      {props.data.map((item) => {
        const bg = item.image;
        return (
          <div key={item.id} className="m-h-3">
            <a
              href="#"
              className="relative block max-w-sm rounded-md shadow-md min-w-250 h-full card-item bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-80 h-80"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url('${bg}')`,
                aspectRatio: "2/3",
              }}
            >
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold  tracking-tight  text-white">
                  {item.title}
                </h5>
                <p className="text-base font-normal text-white dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default EventCard;
