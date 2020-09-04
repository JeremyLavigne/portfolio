import React, { useState } from 'react';

import Slide from './components/Slide'
import LeftRightButton from './components/LeftRightButton'
import BottomButton from './components/BottomButton'


const App = () => {

  const [ activeSlide, setActiveSlide ] = useState(1)
  const [ profileIsOpen, setProfileIsOpen ] = useState(false)

  return (
    <div>
      <div style={bodyStyle}>

        <Slide number={1} activeSlide={activeSlide} profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen}/>

        <LeftRightButton position="left" activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

        <Slide number={2} activeSlide={activeSlide} profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen} />

        <LeftRightButton position="right" activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

        <Slide number={3} activeSlide={activeSlide} profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen} />

      </div>

      <div className="has-background-black is-centered is-flex" style={bottomStyle}>

        <div className="buttons has-addons" >
          <BottomButton number={1} activeSlide={activeSlide} setActiveSlide={setActiveSlide} setProfileIsOpen={setProfileIsOpen}/>

          <BottomButton number={2} activeSlide={activeSlide} setActiveSlide={setActiveSlide} setProfileIsOpen={setProfileIsOpen} />

          <BottomButton number={3} activeSlide={activeSlide} setActiveSlide={setActiveSlide} setProfileIsOpen={setProfileIsOpen} />
        </div>
      </div>

    </div>
  )
}


const bodyStyle = {
  height: '90vh',
  minHeight: '90vh',
  backgroundImage: "url(" + require('./images/water.jpg') + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const bottomStyle = {
  height: '10vh', 
  minHeight: '50px',
  position: 'fixed', 
  bottom: 0, 
  justifyContent: 'center', 
  alignItems: 'center', 
  zIndex: 3, 
  width: '100%' 
} 

export default App