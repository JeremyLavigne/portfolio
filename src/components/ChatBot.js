import React, { useState, useEffect } from 'react'

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
    const [ activeGroup, setActiveGroup] = useState(0)
    const [ chatContent, setChatContent] = useState(require('../utils/chatContent').default)

    // All chatBot lines
    const [lines, setLines] = useState([
        { id: 1, align: 'left', content: "Hi! I code this bot to answer some questions you might ask yourself. Feel free to try :)"},
        { id: 2, align: 'right', content: chatContent[activeGroup] ? chatContent[activeGroup].buttons : [""]}
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

        const newLines = [
            { id: generateID(), align: 'right', content: userInput, isUserInput: true },
            { id: generateID(), align: 'left', content: "Sorry, I am not that smart, bot can only answer pre-coded questions :(" },
            { id: generateID(), align: 'right', content: chatContent[activeGroup].buttons }
        ]

        setLines(lines.concat(newLines))
        setUserInput("")
    }

 
    // --------------------------------------------------------------------------------------
    return (
        <div className="box" style={boxStyle}>
            <div className="columns" style={blocStyle}>

                {chatIsOpen ?

                    <div className="column is-half-tablet is-full-mobile">
                        <div className="card" style={{ borderRadius: '15px' }}>

                            <header className="card-header has-background-link-light pt-2" style={{ borderRadius: '15px 15px 0 0' }}>

                                <span className="icon is-large mr-2">
                                    <i className="fas fa-robot fa-lg"></i>
                                </span>

                                <p className="card-header-title"> Chatbot </p>

                                <div className="delete is-small mt-2 mr-2" onClick={() => setChatIsOpen(false)}></div>

                            </header>

                            <div id="chat-content" className="card-content" style={messagesStyle}>
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

                                <div className="is-flex" style={footerStyle}>
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
                                        style={{cursor: 'pointer'}}
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
                                style={{cursor: 'pointer'}}
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


// Content is not supposed to get out of the slide
// Body height : 90vh - slide height : 85vh
// BoxStyle : style for the whole slide
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

// blocStyle : style for the Chatbot container - put the chat in center
const blocStyle = {
    minHeight: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px'
}

// messageStyle : style for messages flow
// messages should be scroll, not the rest of the chat/ page
const messagesStyle = {
    maxHeight: '50vh', // Only 50vh to avoid issues in tiny screens
    overflow: 'scroll'
}

const footerStyle = { 
    width: '100%', 
    justifyContent: 'space-between', 
    borderRadius: "0 0 15px 15px" 
}

// Could use more (all) bulma classes to replace style
// box in a box in a box ? Change style names

export default ChatBot