import React, { useState } from 'react'

import AnswerLine from './AnswerLine'


const ChatBot = () => {

    const chatButton = require('../images/message.png')

    const [chatIsOpen, setChatIsOpen] = useState(true)
    const [answerLines, setAnswerLines] = useState(["qg"])

    const openChat = () => {
        setChatIsOpen(true)
    }
    const closeChat = () => {
        setChatIsOpen(false)
    }


    return (
        <div className="box" style={boxStyle}>
        <div style={blocStyle}>
            {chatIsOpen ?
                <div className="box has-background-link" style={box2Style}>
                    <div className="navbar">
                        <div className="navbar-brand">
                            <p>Welcome</p>
                        </div>
                        <div className="navbar-menu">
                            <div className="delete has-text-right" onClick={closeChat}></div>
                        </div>
                    </div>
                    {
                        answerLines.map(line => <AnswerLine key={line} />)
                    }
                </div>
                :
                <div className="has-text-centered">
                    <div>
                        <button
                            className="button is-success"
                            style={{ width: '120px', height: '120px' }}
                            onClick={openChat}
                        >
                            <img className="image is-64x64" src={chatButton} alt="chat_button" />
                        </button>
                    </div>
                </div>
            }
        </div>
        </div>
    )
}

const boxStyle = {
    minHeight: '85vh', 
    marginTop: '2.5vh',
    maxHeight: '85vh',
    overflow: 'auto',
    backgroundImage: "url(" + require('../images/sunset.jpg') + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}
const box2Style = {
    width: '60%',  // Use column and responsivness - dont use box 
    maxHeight: '70vh',
    marginTop: '2.5vh',
    marginBottom: '2.5vh',
    overflow: 'auto'
}
const blocStyle = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default ChatBot