import React, { useState } from 'react'

import ChatBox from './ChatBox'

const Interview = () => {

    const chatButton = require('../images/message.png')
    const [ chatIsOpen, setChatIsOpen ] = useState(false)

    const openChat = () => {
        setChatIsOpen(true)
    }

    return (

                <div className="columns is-vcentered" style={{width: '100%'}}>
                    <div className="column">
                        <div style={{width: '60%', margin: 'auto'}}>
                            <p className="title">Concept :</p>
                            <p className="content"> 
                                Both a "skills demonstration" and a way to answer some questions. 
                            </p>
                            <p className="content"> 
                                Build as a classic chat box in order to provide a quick and automatic answer.
                            </p>
                            <p className="content"> 
                                Feel free to ask, Bot will answer for me :)
                            </p>
                        </div>
                    </div>

                    <div className="column">
                        {chatIsOpen ?
                        <ChatBox setChatIsOpen={setChatIsOpen}/>
                        :
                        <div className="has-text-centered">
                            <div>
                                <button 
                                    className="button is-success" 
                                    style={{width:'120px', height:'120px'}}
                                    onClick={openChat}
                                >
                                    <img className="image is-64x64" src={chatButton} alt="chat_button"/>
                                </button>
                            </div>
                            <div>
                                <button 
                                    className="button is-link"
                                    onClick={openChat}
                                >
                                    Try Me
                                </button>
                            </div>
                        </div>
                        }
                    </div>
                </div>

    )
}

/*
Interview mode : casual / serious / ?
*/

export default Interview