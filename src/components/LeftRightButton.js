import React from 'react';


// Left and Right Button used to change the active slide

const LeftRightButton = ({ position, activeSlide, setActiveSlide }) => {

    const next = require('../images/next.png')
    const back = require('../images/back.png')


    let buttonPosition
    let activeButton
    let targetSlide
    let goodArrow

    switch (position) {
        case "left":
            buttonPosition = '0%'
            activeButton = !(activeSlide === 1)
            targetSlide = activeSlide - 1
            goodArrow = back
            break
        case "right":
            buttonPosition = '92.5%'
            activeButton = !(activeSlide === 3)
            targetSlide = activeSlide + 1
            goodArrow = next
            break
        default:
            break
    }

    const buttonStyle = {
        width: '7.5%',
        position: 'absolute',
        zIndex: 1,
        left : buttonPosition,
        top : '45%'
    }

    return (

        <div className="container has-text-centered" style={activeButton ? buttonStyle : {display: 'none'}}>

                <img 
                    src={goodArrow} 
                    alt="arrow" 
                    onClick={() => setActiveSlide(targetSlide)}
                    style={{cursor: 'pointer'}}
                />
                
        </div>

    )
}

export default LeftRightButton