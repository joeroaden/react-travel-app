import React, { useState } from "react";
import "./Footer.css";
import List from "./FooterAPI";





export const Footer = () => {
  const [ListItem] = useState(List);
  return (
    <div>
      <div className="container">
        <div className="bg-black pt-3 pb-3">
          <div className="w-80">
            <div className="col-12">
              <div className="d-flex justify-content-between mb-2">
                <div className="tripy-text">
                  <h4>Travel App</h4>
                  <p>Choose Your favorite destinations</p>
                </div>
                <div className="social-icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-between">
                {ListItem.map((curVal) => {
                  const { heading, title1, title2, title3, title4 } = curVal;
                  return (
                    <>
                      <div className="col-1">
                        <h4>{heading}</h4>
                        <p>{title1}</p>
                        <p>{title2}</p>
                        <p>{title3}</p>
                        <p>{title4}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};