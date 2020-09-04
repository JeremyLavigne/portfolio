import React from 'react';


// --------------------------------------------------------------------------------------
// Left and Right arrows buttons used to change slide
// --------------------------------------------------------------------------------------
const LeftRightButton = ({ position, activeSlide, setActiveSlide }) => {

    let buttonPosition
    let activeButton  // Left button inactive when no left slide. Same for right
    let targetSlide

    switch (position) {
        case "left":
            buttonPosition = '0%'
            activeButton = !(activeSlide === 1)
            targetSlide = activeSlide - 1
            break
        case "right":
            buttonPosition = '92.5%'
            activeButton = !(activeSlide === 3)
            targetSlide = activeSlide + 1
            break
        default:
            break
    }

    const buttonStyle = {
        width: '7.5%',
        position: 'absolute',
        zIndex: 1, // Go under slide when changing
        left : buttonPosition,
        top : '45%' // Put it in the 'middle' of screen height
    }

    return (

        <div className="container has-text-centered" style={activeButton ? buttonStyle : {display: 'none'}}>

            <span 
                className="icon"
                style={{cursor: 'pointer'}}
                onClick={() => setActiveSlide(targetSlide)}
            >
                {
                    position === 'left' ? 
                        <i className="fas fa-chevron-circle-left fa-lg"></i> :
                        <i className="fas fa-chevron-circle-right fa-lg"></i>
                }
                
            </span>
        </div>

    )
}

export default LeftRightButton