import React, { useState } from "react";
import "./Header.css";

export const Header = ({ ImageLists }) => {
  const [MenuCollapse, SetMenuCollapse] = useState(true);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const myBackgroundImageWithStyles = {
    backgroundImage: `url(${ImageLists[CurrentIndex].image})`,
  };
  const goToPrev = () => {
    CurrentIndex === 0
      ? setCurrentIndex(ImageLists.length - 1)
      : setCurrentIndex(CurrentIndex - 1);
  };
  const goToNext = () => {
    CurrentIndex + 1 === ImageLists.length
      ? setCurrentIndex(0)
      : setCurrentIndex(ImageLists + 1);
  };
  return (
    <div className="container">
      <div className="backgroundImage" style={myBackgroundImageWithStyles}>
        <div className="pre" onClick={goToPrev}>
          <div>❰</div>
        </div>
        <div className="next" onClick={goToNext}>
          <div>❱</div>
        </div>
      </div>

      <div className="grid">
        <div className="w-80 p-abs">
          <div className="col">
            <div className="d-flex align-center justify-content-between">
              <div className="logo">
                <h1>Travel App</h1>
              </div>
              <div
                className={
                  MenuCollapse ? "d-flex align-center collapse" : "collapse"
                }
              >
                <ul className="d-flex flex-wrap">
                  <li className="nav-list ml-1">
                    <button href="" className="nav-items">
                      Home
                    </button>
                  </li>
                  <li className="nav-list ml-1">
                    <button href="" className="nav-items">
                      About
                    </button>
                  </li>
                  <li className="nav-list ml-1">
                    <button href="" className="nav-items">
                      Service
                    </button>
                  </li>
                  <li className="nav-list ml-1">
                    <button href="" className="nav-items">
                      Contact
                    </button>
                  </li>
                </ul>
                <div className="ml-2">
                  <button type="submit" className="signupbtn btn-secondary">
                    Sign Up
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="hamburger signupbtn btn-secondary"
                onClick={() => {
                  SetMenuCollapse(!MenuCollapse);
                }}
              >
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
          <div className="col-1 mt-4">
            <div className="text-center mt-4">
              <h2>Your Journey Your Story</h2>
              <p>Choose Your Favourite Destinations</p>
              <button className="btn btn-transparent mt-1" type="submit">
                Travel Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
