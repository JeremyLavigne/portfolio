import React, { useState } from 'react';
import './App.css'

import Slide from './components/Slide'
// node server/server.js

// --------------------------------------------------------------------------------------
// Main component - Slides and buttons for changing active Slide
// --------------------------------------------------------------------------------------
const App = () => {

  const [activeSlide, setActiveSlide] = useState(1)

  // Profile is on the Home page
  const [profileIsOpen, setProfileIsOpen] = useState(false)

  const handleClickBottomButton = (slide) => {
    setActiveSlide(slide)
    setProfileIsOpen(false) // Avoid a profile still open when changing slide
  }


  return (
    <div>

      <div id="navbar" className="has-background-black is-centered is-flex">

        <div className="buttons has-addons" >
          <button
            className={`button is-light ${activeSlide === 1 ? " is-outlined" : ""}`}
            onClick={() => handleClickBottomButton(1)}
          > Home </button>

          <button
            className={`button is-light ${activeSlide === 2 ? " is-outlined" : ""}`}
            onClick={() => handleClickBottomButton(2)}
          > Interview </button>

          <button
            className={`button is-light ${activeSlide === 3 ? " is-outlined" : ""}`}
            onClick={() => handleClickBottomButton(3)}
          > Portfolio </button>
        </div>
      </div>

      <div className="bodyStyle">

        <Slide number={1} activeSlide={activeSlide} profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen} />

        <div className={`container has-text-centered ${activeSlide !== 1 ? " leftbuttonStyle" : " displayNone"}`} >
          <span
            className="icon pointer"
            onClick={() => setActiveSlide(activeSlide - 1)}
          >
            <i className="fas fa-chevron-circle-left fa-2x"></i> :
            </span>
        </div>

        <Slide number={2} activeSlide={activeSlide} />

        <div className={`container has-text-centered ${activeSlide !== 3 ? " rightbuttonStyle" : " displayNone"}`} >
          <span
            className="icon pointer"
            onClick={() => setActiveSlide(activeSlide + 1)}
          >
            <i className="fas fa-chevron-circle-right fa-2x"></i> :
            </span>
        </div>

        <Slide number={3} activeSlide={activeSlide} />

      </div>

    </div>
  )
}

export default App