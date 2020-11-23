import React from 'react';

// Components
import Portfolio from './portfolio/Portfolio'
import Home from './home/Home'
import ChatBot from './chat/ChatBot';


// --------------------------------------------------------------------------------------
// Slide container - define position and global style
// --------------------------------------------------------------------------------------
const Slide = ({ number, activeSlide, profileIsOpen, setProfileIsOpen }) => {

    // profileIsOpen come for the Home slide

    // Set the slide position regarding others slide
    let slidePosition
    switch (activeSlide - number) {
        case 2:  slidePosition = '-192.5%'; break
        case 1:  slidePosition = '-92.5%'; break
        case 0:  slidePosition = '7.5%'; break
        case -1: slidePosition = '100%'; break
        case -2: slidePosition = '192.5%'; break
        default: break
    }

    // Slide style : all (the 3) slides are "in the screen" but only one is visible
    // Why ? because of the "transition left", want to create a "slide effect"
    // Whitout, pages are poping instead of sliding
    const slideStyle = {
        width: '85%',
        position: 'absolute',
        transition: 'left 0.7s',
        zIndex: 2,
        left: slidePosition
    }

    
    // Return the good content : Slide 1 - Home, Slide 2 - Interview, Slide 3 - Portfolio
    return (
        <div className="container" style={slideStyle}>
                {number === 1 ?
                    <Home profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen}/> :
                    number === 2 ?
                        <ChatBot /> :
                        <Portfolio />
                }
        </div>
    )
}

export default Slide