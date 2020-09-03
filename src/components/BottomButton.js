import React from 'react';


// Bottom Button used to change the active slide

const BottomButton = ({ number, activeSlide, setActiveSlide }) => {

    let buttonClassName

    if (activeSlide === number) {
        buttonClassName = "button is-light is-outlined"
    } else {
        buttonClassName = "button is-light"
    }

// Could change button color when is-hovered

    return (

        <button 
            className={buttonClassName} 
            onClick={() => setActiveSlide(number)} 
        > 
        {number === 1 ?
            "Home" :
            number === 2 ?
                "Interview" :
                "Portfolio"
        }
        </button>

    )
}

export default BottomButton