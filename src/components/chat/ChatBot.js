import React, { useState, useEffect } from 'react'
import './ChatBot.css';

import BotLine from './BotLine'


// --------------------------------------------------------------------------------------
// Chat Slide - Simulated interview with pre-coded questions/answers
// --------------------------------------------------------------------------------------
const ChatBot = () => {

    // Set the last message visible in the discussion
    useEffect(() => {
        scrollChatToBottom()
    })


    const [chatIsOpen, setChatIsOpen] = useState(false)
    const [userInput, setUserInput] = useState("")

    // Several step/ group inside 'interview', see utils/chatContent.js
    const [activeGroup, setActiveGroup] = useState(0)
    const [chatContent, setChatContent] = useState(require('../../utils/chatContent').default)

    // All chatBot lines
    const [lines, setLines] = useState([
        { id: 1, align: 'left', content: "Hi! I code this bot to answer some questions you might ask yourself. Feel free to try :)" },
        { id: 2, align: 'right', content: chatContent[activeGroup] ? chatContent[activeGroup].buttons : [""] }
    ])


    // --------------------------------------------------------------------------------------
    const generateID = () => {
        return Math.floor(Math.random() * 10000)
    }

    const scrollChatToBottom = () => {
        const element = document.getElementById("chat-content") || document.body
        element.scrollTo(0, element.scrollHeight)
    }


    // --------------------------------------------------------------------------------------

    // Check Enter pressed on Keyboard for sending message
    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            handleClickSend()
        }
    }

    const handleClickSend = () => {
        // Prevent sending an empty message
        if (userInput === "") { return }

        // Show '.....'
        let newLines = [
            { id: generateID(), align: 'right', content: userInput, isUserInput: true },
            { id: generateID(), align: 'left', content: "..."}
        ]
        setLines(lines.concat(newLines))

        // Then show fisrt answer
        setTimeout(() => {
            newLines = [
                { id: generateID(), align: 'right', content: userInput, isUserInput: true },
                { id: generateID(), align: 'left', content: "Sorry, I am not that smart, bot can only answer pre-coded questions :(" }
            ]
            setLines(lines.concat(newLines))
        }, 500)

        // Finally, complete answer
        setTimeout(() => {
            newLines = [
                { id: generateID(), align: 'right', content: userInput, isUserInput: true },
                { id: generateID(), align: 'left', content: "Sorry, I am not that smart, bot can only answer pre-coded questions :(" },
                { id: generateID(), align: 'right', content: chatContent[activeGroup].buttons }
            ]
            setLines(lines.concat(newLines))
        }, 1000)

        setUserInput("")
    }


    // --------------------------------------------------------------------------------------
    return (
        <div className="box boxStyle" style={{backgroundImage: "url(" + require('../../images/sunset.jpg') + ")"}}>
            <div className="columns blocStyle">

                {chatIsOpen ?

                    <div className="column is-half-tablet is-full-mobile">
                        <div className="card radius15">

                            <header className="card-header has-background-link-light pt-2 topRadius15" >

                                <span className="icon is-large mr-2">
                                    <i className="fas fa-robot fa-lg"></i>
                                </span>

                                <p className="card-header-title"> Chatbot </p>

                                <div className="delete is-small mt-2 mr-2" onClick={() => setChatIsOpen(false)}></div>

                            </header>

                            <div id="chat-content" className="card-content messagesStyle">
                                {
                                    lines.map(line =>
                                        <BotLine
                                            key={line.id}
                                            line={line}
                                            lines={lines}
                                            setLines={setLines}
                                            activeGroup={activeGroup}
                                            setActiveGroup={setActiveGroup}
                                            chatContent={chatContent}
                                            setChatContent={setChatContent}
                                        />)
                                }
                            </div>

                            <footer className="card-footer has-background-link-light py-3" style={{ borderRadius: '0 0 15px 15px' }}>

                                <div className="is-flex footerStyle">
                                    <div className="control">
                                        <input
                                            className="input is-rounded is-small mx-3"
                                            type="text"
                                            placeholder="..."
                                            maxLength={30}
                                            value={userInput}
                                            onKeyPress={handleEnterPress}
                                            onChange={(event) => setUserInput(event.currentTarget.value)}
                                        />
                                    </div>

                                    <span
                                        className="icon is-medium mr-2"
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleClickSend}
                                    >
                                        <i className="fas fa-paper-plane fa-lg"></i>
                                    </span>
                                </div>
                            </footer>
                        </div>

                    </div>

                    :

                    <div className="has-text-centered">
                        <div>
                            <span
                                className="icon is-large has-text-success"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setChatIsOpen(true)}
                            >
                                <i className="fas fa-comments fa-5x"></i>
                            </span>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default ChatBot