import React, { useState } from 'react';

import Slide from './components/Slide'
import LeftRightButton from './components/LeftRightButton'
import BottomButton from './components/BottomButton'


const App = () => {

  const [activeSlide, setActiveSlide] = useState(1)
  console.log(activeSlide)

  const bodyStyle = {
    height: '90vh',
    backgroundColor: 'orange'
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

  return (
    <div>
      <div style={bodyStyle}>

        <Slide number={1} activeSlide={activeSlide} />

        <LeftRightButton position="left" activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

        <Slide number={2} activeSlide={activeSlide} />

        <LeftRightButton position="right" activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

        <Slide number={3} activeSlide={activeSlide} />

      </div>

      <div className="has-background-black is-centered is-flex" style={bottomStyle}>

        <div className="buttons has-addons" >
          <BottomButton number={1} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

          <BottomButton number={2} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

          <BottomButton number={3} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
        </div>
      </div>

    </div>
  )
}

export default App