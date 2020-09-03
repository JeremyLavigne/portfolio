import React, { useState } from 'react'

import AnswerLine from './AnswerLine'


const ChatBot = () => {

    const chatButton = require('../images/message.png')
    const chatbot = require('../images/chatbot.png')
    const send = require('../images/send.png')

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
            <div className="columns" style={blocStyle}>
                {chatIsOpen ?
                    <div className="column is-half-tablet is-full-mobile " style={columnStyle}>
                        <div className="card" style={{borderRadius: '15px'}}>
                            <header className="card-header has-background-link-light pt-2" style={{borderRadius: '15px 15px 0 0'}}>

                                <figure className="image is-32x32 mx-3" >
                                    <img className="is-rounded" src={chatbot} alt="chatbot"/>
                                </figure>
                                
                                <p className="card-header-title">
                                    Chatbot
                                </p>

                                <div className="delete mt-2 mr-2" onClick={closeChat}></div>

                            </header>

                            <div className="card-content">
                                <div className="content">
                                    {
                                        answerLines.map(line => <AnswerLine key={line} />)
                                    }
                                </div>
                            </div>

                            <footer className="card-footer has-background-link-light py-3 mt-5" style={{borderRadius: '0 0 15px 15px'}}>

                                <div className="is-flex" style={{width: '100%', justifyContent: 'space-between', borderRadius:"0 0 15px 15px"}}>
                                    <div className="control">
                                        <input className="input is-rounded is-small mx-3" type="text" placeholder="..."/>
                                    </div>

                                    <figure className="image is-32x32 mx-3" >
                                        <img className="" src={send} alt="send"/>
                                    </figure>
                                </div>
                            </footer>
                        </div>

                    </div>
                    :
                    <div className="has-text-centered">
                        <div>
                            <button
                                className="button is-link"
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
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px'
}
const columnStyle = {
    maxHeight: '70vh',
    marginTop: '2.5vh',
    marginBottom: '2.5vh',
    overflow: 'auto',
    borderRadius: '15px'
}
const blocStyle = {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px'
}

export default ChatBot