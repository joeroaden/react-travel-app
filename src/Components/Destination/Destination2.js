import React, { useState } from "react";
import "./destination.css";
import ListMenuCpy from "./DestinationAPI2";

export const Destination2 = () => {
  const [popularMenu] = useState(ListMenuCpy);
  return (
    <div>
      <div className="container mt-2 mb-2">
        <div className="w-80">
          {popularMenu.map((curValue) => {
            const { title, desc, image1, image2 } = curValue;
            return (
              <div>
                <div className="col-12 d-flex flex-wrap justify-content-around align-center">
                  <div className="col-6 d-flex">
                    <div className="col-3">
                      <img src={image1} alt={image1} />
                    </div>
                    <div className="col-3">
                      <img src={image2} alt={image2} />
                    </div>
                  </div>

                  <div className="col-6 p-1">
                    <h2 className="title mb-1">{title}</h2>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};