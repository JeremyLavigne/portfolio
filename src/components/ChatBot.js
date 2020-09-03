import React, { useState } from 'react'

import AnswerLine from './AnswerLine'
import { findByLabelText } from '@testing-library/react'

const ChatBot = () => {

    const chatButton = require('../images/message.png')

    const [chatIsOpen, setChatIsOpen] = useState(false)
    const [answerLines, setAnswerLines] = useState(["qg"])

    const openChat = () => {
        setChatIsOpen(true)
    }
    const closeChat = () => {
        setChatIsOpen(false)
    }


    const boxStyle = {
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

    return (
        <div style={blocStyle}>
            {chatIsOpen ?
                <div className="box has-background-link" style={boxStyle}>
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
    )
}

export default ChatBot