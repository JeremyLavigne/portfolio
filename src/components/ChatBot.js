import React, { useState, useEffect } from 'react'

import BotLine from './BotLine'


const ChatBot = () => {

    useEffect(() => {
        scrollChatToBottom()
    })

    const chatButton = require('../images/message.png')
    const chatbot = require('../images/chatbot.png')
    const send = require('../images/send.png')

    const [chatIsOpen, setChatIsOpen] = useState(true)
    const [userInput, setUserInput] = useState("")
    const [lines, setLines] = useState([
        {id: 1, whotalks: 'me', isUserInput: false, sayWhat: ['Hi! I am a bot and this guy code me to answer some questions you might ask yourself.', 'Feel free to try :)']},
        {id: 2, whotalks: 'user', isUserInput: false, sayWhat: ['Start seriously', 'Start casually']}
    ])

    const openChat = () => {
        setChatIsOpen(true)
    }
    const closeChat = () => {
        setChatIsOpen(false)
    }

    const handleChangeUserInput = (event) => {
        console.log(event.key) // Check what is wrong here
        if (event.key === 'Enter') {
            handleClickSend()
        }
        setUserInput(event.currentTarget.value)
    }

    const handleClickSend = () => {
        if (userInput === "") {
            return
        }
        const newLines = [{
            id: Math.floor(Math.random()*10000),
            whotalks: 'user',
            isUserInput: true,
            sayWhat: userInput
        },
        {
            id: Math.floor(Math.random()*10000),
            whotalks: 'me',
            isUserInput: false,
            sayWhat: ['Sorry, I am not that smart, I can only answer pre-coded questions :(']
        },
        {
            id: Math.floor(Math.random()*10000), 
            whotalks: 'user', 
            isUserInput: false, 
            sayWhat: ['Start seriously', 'Start casually']
        }]

        setLines(lines.concat(newLines))
        setUserInput("")
    }

    const scrollChatToBottom = () => {
        const element = document.getElementById("chat-content")
        element.scrollTo(0, element.scrollHeight)
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

                            <div id="chat-content" className="card-content" style={{maxHeight: '50vh',overflow: 'scroll'}}>
                                    {
                                        lines.map(line => <BotLine key={line.id} line={line} lines={lines} setLines={setLines} />)
                                    }
                            </div>

                            <footer className="card-footer has-background-link-light py-3" style={{borderRadius: '0 0 15px 15px'}}>

                                <div className="is-flex" style={{width: '100%', justifyContent: 'space-between', borderRadius:"0 0 15px 15px"}}>
                                    <div className="control">
                                        <input 
                                            className="input is-rounded is-small mx-3" 
                                            type="text" 
                                            placeholder="..."
                                            value={userInput}
                                            onChange={handleChangeUserInput}
                                        />
                                    </div>

                                    <figure 
                                        className="image is-32x32 mx-3" 
                                        onClick={handleClickSend}
                                    >
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