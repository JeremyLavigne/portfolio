import React from 'react';


// Bottom Button used to change the active slide

const BottomButton = ({ number, activeSlide, setActiveSlide, setProfileIsOpen }) => {

    let buttonClassName

    if (activeSlide === number) {
        buttonClassName = "button is-light is-outlined"
    } else {
        buttonClassName = "button is-light"
    }

    const handleClickButton = () => {
        setActiveSlide(number)
        setProfileIsOpen(false)
    }
// Could change button color when is-hovered

    return (

        <button 
            className={buttonClassName} 
            onClick={handleClickButton} 
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