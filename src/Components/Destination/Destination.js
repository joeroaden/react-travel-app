import React, { useState } from "react";
import ListMenu from "./DestinationAPI";
import "./destination.css";

export const Destination = () => {
  const [popularMenu] = useState(ListMenu);
  return (
    <div>
      <div className="container mt-2 mb-2">
        <div className="w-80">
          <div className="heading text-center mt-4 mb-2">
            <h1>Popular Destinations</h1>
            <p>
              Tour gives you the opportunity to see a lot, within a time frame
            </p>
          </div>

          {popularMenu.map((curValue) => {
            const { title, desc, image1, image2 } = curValue;
            return (
              <div>
                <div className="col-12 d-flex flex-wrap justify-content-around align-center">
                  <div className="col-6">
                    <h2 className="title mb-1">{title}</h2>
                    <p>{desc}</p>
                  </div>
                  <div className="col-6 d-flex">
                    <div className="col-3">
                      <img src={image1} alt={image1} />
                    </div>
                    <div className="col-3">
                      <img src={image2} alt={image2} />
                    </div>
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