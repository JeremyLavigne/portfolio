import React, { useState } from 'react';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Interview from './components/Interview'
//import NavBar from './components/NavBar'


const App = () => {

  const [ activeSlide, setActiveSlide ] = useState(1)
  const [ positionSlide1, setPositionSlide1 ] = useState('7.5%')
  const [ positionButton1, setPositionButton1 ] = useState('92.5%')
  const [ positionSlide2, setPositionSlide2 ] = useState('100%')
  const [ positionButton2, setPositionButton2 ] = useState('185%')
  const [ positionSlide3, setPositionSlide3 ] = useState('192.5%')

  const gonext = (slideNumber) => {
    setActiveSlide(slideNumber)
    switch (slideNumber) {
      case 1 : 
        setPositionSlide1('7.5%')
        setPositionButton1('92.5%')
        setPositionSlide2('100%')
        setPositionButton2('185%')
        setPositionSlide3('192.5%')
        break
      case 2 : 
        setPositionSlide1('-92.5%')
        setPositionButton1('0%')
        setPositionSlide2('7.5%')
        setPositionButton2('92.5%')
        setPositionSlide3('100%')
        break
      case 3 : 
        setPositionSlide1('-192.5%')
        setPositionButton1('-185%')
        setPositionSlide2('-92.5%')
        setPositionButton2('0%')
        setPositionSlide3('7.5%')
        break
      default :
      break
    }

  }

console.log(activeSlide)

  return (
    <div className="hero is-fullheight">
      <div className="hero-body has-background-black">
        <div className="container" style={{width: '85%', position: 'absolute', left: positionSlide1, transition : 'left 1s', zIndex: 2}}>
          <div className="box has-background-warning">
            <Home />
          </div>
        </div>

        <div className="container has-text-centered" style={{width: '7.5%', position: 'absolute', left: positionButton1, zIndex: 1}}>
        {activeSlide === 1 ? 
          <button className="button is-rounded is-small is-light" onClick={() => gonext(2)} > </button>
          :
          <button className="button is-rounded is-small is-light" onClick={() => gonext(1)} > </button>
        }
        </div>

        <div className="container" style={{width: '85%', position: 'absolute', left: positionSlide2, transition : 'left 1s', zIndex: 2}}>
          <div className="box has-background-success">
            <Interview />
          </div>
        </div>

        <div className="container has-text-centered" style={{width: '7.5%', position: 'absolute', left: positionButton2, zIndex: 1}}>
        {activeSlide === 2 ? 
          <button className="button is-rounded is-small is-light" onClick={() => gonext(3)} > </button>
          :
          <button className="button is-rounded is-small is-light" onClick={() => gonext(2)} > </button>
        }
        </div>

        <div className="container" style={{width: '85%', position: 'absolute', left: positionSlide3, transition : 'left 1s', zIndex: 2}}>
          <div className="box has-background-link">
            <Portfolio />
          </div>
        </div>
      </div>

      <div className="hero-foot has-background-white is-centered is-flex" style={{justifyContent: 'center', alignContent: 'center'}}>

          <button className="button is-light mx-2" style={activeSlide === 1 ? {borderWidth: 3, borderColor: 'red'} :  {borderWidth: 1} } onClick={() => gonext(1)} > Home </button>

          <button className="button is-light mx-2" style={activeSlide === 2 ? {borderWidth: 3, borderColor: 'red'} :  {borderWidth: 1} } onClick={() => gonext(2)} > Interactive Interview </button>

          <button className="button is-light mx-2" style={activeSlide === 3 ? {borderWidth: 3, borderColor: 'red'} :  {borderWidth: 1} } onClick={() => gonext(3)} > Portfolio </button>

      </div>

    </div>
  )
}

export default App

/*
    <Router>
      
      <Switch>

        <Route path="/interview">
          <NavBar />
          <Interview />
        </Route>

        <Route path="/portfolio">
          <NavBar />
          <Portfolio />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </Router>
    
      <div className="columns is-vcentered">

        <div className="column is-10" style={{position: 'absolute', left: '0%', top: '5%'}}>
          <div className="box">
            Slide 1
          </div>
        </div>

        <div className="column is-1 has-text-centered" style={{position: 'absolute', left: '90%', top: '5%'}}>
          <button
            onClick={() => gonext(2)}
          >
            fleche
          </button>
        </div>

        <div className="column is-10"  style={{position: 'absolute', left: '95%', top: '5%'}}>
          <div className="box">
            Slide 2
          </div>
        </div>

        <div className="column is-1 has-text-centered" style={{position: 'absolute', left: '175%', top: '5%'}}>
          <button>fleche</button>
        </div>

        <div className="column is-10" style={{position: 'absolute', left: '180%', top: '5%'}}>
          <div className="box">
            Slide 3
          </div>
        </div>

      </div>

      <div id="nav-bottom">

      </div>    
*/