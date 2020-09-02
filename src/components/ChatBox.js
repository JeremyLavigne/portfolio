import React, { useState } from 'react'

import AnswerLine from './AnswerLine'

const ChatBox = ({setChatIsOpen}) => {

    const [ answerLines, setAnswerLines ] = useState(["ff", "gg"])
    const closeBox = () => {
        setChatIsOpen(false)
    }

    return (
        <div className="box">
            <div className="level">
                <div className="level-left">
                    <p className="subtitle has-text-black">Welcome in the box</p>
                </div>
                <div className="level-left">
                    <div className="delete has-text-right" onClick={closeBox}></div>
                </div>               
            </div>
            {
                answerLines.map(line => <AnswerLine key={line} />)

            }
        </div>
    )
  }
  
  export default ChatBox