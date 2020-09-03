import React from 'react';

// Components
import Portfolio from './Portfolio'
import Home from './Home'
import ChatBot from './ChatBot';


// slide container - define position and global style
const Slide = ({ number, activeSlide }) => {

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

    const boxStyle = {
        minHeight: '85vh', 
        marginTop: '2.5vh',
        maxHeight: '85vh',
        overflow: 'auto'
    }

    return (

        <div className="container" style={slideStyle}>
            <div className="box has-background-warning" style={boxStyle}>
                {number === 1 ?
                    <Home /> :
                    number === 2 ?
                        <ChatBot /> :
                        <Portfolio />
                }
            </div>
        </div>

    )
}

export default Slide