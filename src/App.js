import React, { useState } from 'react';

import Slide from './components/Slide'


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
      <div style={bodyStyle}>

        <Slide number={1} activeSlide={activeSlide} profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen} />

        <div className="container has-text-centered" style={!(activeSlide === 1) ? leftbuttonStyle : { display: 'none' }}>
          <span
            className="icon"
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSlide(activeSlide - 1)}
          >
            <i className="fas fa-chevron-circle-left fa-lg"></i> :
            </span>
        </div>

        <Slide number={2} activeSlide={activeSlide} />

        <div className="container has-text-centered" style={!(activeSlide === 3) ? rightbuttonStyle : { display: 'none' }}>
          <span
            className="icon"
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSlide(activeSlide + 1)}
          >
            <i className="fas fa-chevron-circle-right fa-lg"></i> :
            </span>
        </div>

        <Slide number={3} activeSlide={activeSlide} />

      </div>


      <div className="has-background-black is-centered is-flex" style={bottomStyle}>

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

    </div>
  )
}

// BodyStyle is the user screen, behind slides. Take Always 90% of height
const bodyStyle = {
  height: '90vh',
  minHeight: '90vh',
  backgroundImage: "url(" + require('./images/water.jpg') + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

// Like a footer/Navbar, stay always in bottom and takes the remaining 10%
const bottomStyle = {
  width: '100%',
  height: '10vh',
  minHeight: '50px',
  position: 'fixed',
  bottom: 0,
  justifyContent: 'center', // For buttons position
  alignItems: 'center',
  zIndex: 3 // Prevent some overflow
}

// Left and right Arrow to change slide
const leftbuttonStyle = {
  width: '7.5%',
  position: 'absolute',
  left: '0%',
  zIndex: 1, // Go under slide when changing
  top: '45%' // Put it in the 'middle' of screen height
}
const rightbuttonStyle = {
  width: '7.5%',
  position: 'absolute',
  left: '92.5%',
  zIndex: 1, // Go under slide when changing
  top: '45%' // Put it in the 'middle' of screen height
}

export default App