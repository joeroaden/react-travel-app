import React, { useState } from "react";
import TripItem from "./TripAPI";
import "./trip.css";

export const Trip = () => {
  const [Tripy] = useState(TripItem);
  return (
    <div>
      <div className="container mb-2">
        <div className="w-80">
          <div className="heading text-center mt-4 mb-2">
            <h1>Recent Trip</h1>
            <p className="sub-heading">
              You can discover unique destination using Google Maps.
            </p>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-between">
              {Tripy.map((curVal) => {
                const { image, title, desc } = curVal;
                return (
                  <div className="col-2">
                    <div className="hero-area">
                      <div className="image-hero">
                        <img src={image} alt={image} />
                      </div>
                      <div className="text-area">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};