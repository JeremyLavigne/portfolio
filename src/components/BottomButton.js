import React from 'react';


// Bottom Button used to change the active slide

const BottomButton = ({ number, activeSlide, setActiveSlide }) => {

    let buttonBorder

    if (activeSlide === number) {
        buttonBorder = [3, 'red']
    } else {
        buttonBorder = [1, 'black']
    }

    const buttonStyle = {
        borderWidth: buttonBorder[0],
        borderColor: buttonBorder[1],
    }

    return (

        <button 
            className="button is-light" 
            style={buttonStyle} 
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