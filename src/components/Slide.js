import React from 'react';

// Components
import Portfolio from './Portfolio'
import Home from './Home'
import ChatBot from './ChatBot';


// Slide container - define position and global style
const Slide = ({ number, activeSlide, profileIsOpen, setProfileIsOpen }) => {

    let slidePosition

    switch (activeSlide - number) {
        case 2:
            slidePosition = '-192.5%'
            break
        case 1:
            slidePosition = '-92.5%'
            break
        case 0:
            slidePosition = '7.5%'
            break
        case -1:
            slidePosition = '100%'
            break
        case -2:
            slidePosition = '192.5%'
            break
        default:
            break
    }

    const slideStyle = {
        width: '85%',
        position: 'absolute',
        transition: 'left 0.7s',
        zIndex: 2,
        left: slidePosition
    }

    
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