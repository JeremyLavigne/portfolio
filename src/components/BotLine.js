import React from 'react'


// --------------------------------------------------------------------------------------
// One Line of chat bot - Three renders regarding who 'talks'
// --------------------------------------------------------------------------------------
const BotLine = ({ line, lines, setLines, activeGroup, setActiveGroup, chatContent, setChatContent }) => {

    const disabledButtons = (groupNumber) => {
        const newChatContent = [...chatContent]
        const buttons = newChatContent[groupNumber].buttons
        for (let i=0; i< buttons.length; i++){
            buttons[i].disabled = "disabled"
        }
        setChatContent(newChatContent)
    }
    const disabledOneButton = (groupNumber, index) => {
        const newChatContent = [...chatContent]
        
        newChatContent[groupNumber].buttons[index].disabled = "disabled"

        setChatContent(newChatContent)
    }

    // --------------------------------------------------------------------------------------
    const handleClickQuestion = (text, index) => {

        // Start cases - Casual = Classic 
        if (text === "Start Casually") {

            disabledButtons(0)
            setActiveGroup(1) // Not take immediatly

            const newLines = [{
                id: Math.floor(Math.random()*10000),
                align: 'left',
                content: "Great, let's go!"
            },
            {
                id: Math.floor(Math.random()*10000),
                align: 'right',
                content: chatContent[1].buttons 
            }]
    
            setLines(lines.concat(newLines))
            return
        }
        // Serious = directly to next step
        if (text === "Start Seriously") {

            disabledButtons(0)
            setActiveGroup(2)

            const newLines = [{
                id: Math.floor(Math.random()*10000),
                align: 'left',
                content: "Sure, let's begin."
            },
            {
                id: Math.floor(Math.random()*10000),
                align: 'right',
                content: chatContent[2].buttons 
            }]

            setLines(lines.concat(newLines))
            return
        }

        // Next case
        if (text === "Next") {

            // No next question/Answers
            if (activeGroup === 4) {
                disabledButtons(activeGroup)
                const newLines = [{
                    id: Math.floor(Math.random()*10000),
                    align: 'left',
                    content: "I'm done, nothing more to say! But you can still refresh the page and restart ;)"
                },
                {
                    id: Math.floor(Math.random()*10000),
                    align: 'left',
                    content: "Thank you very much" 
                }]
    
                setLines(lines.concat(newLines))
                return
            }

            disabledButtons(activeGroup)
            setActiveGroup(activeGroup+1)

            const newLines = [{
                id: Math.floor(Math.random()*10000),
                align: 'left',
                content: "Moving on!"
            },
            {
                id: Math.floor(Math.random()*10000),
                align: 'right',
                content: chatContent[activeGroup+1].buttons 
            }]

            setLines(lines.concat(newLines))
            return
        }


        // Usual way - disabled only pressed button
        disabledOneButton(activeGroup, index)
        const newLines = [{
            id: Math.floor(Math.random()*10000),
            align: 'left',
            content: chatContent[activeGroup].answers[index]
        },
        {
            id: Math.floor(Math.random()*10000),
            align: 'right',
            content: chatContent[activeGroup].buttons 
        }]

        setLines(lines.concat(newLines))
    }
 



// --------------------------------------------------------------------------------------
    // Bot is speaking : left, green, paragraph
    if (line.align === 'left') {
        return (
            <div className="columns">
                <div className="column is-8 has-background-success my-2" style={{borderRadius: '15px'}}>
                    <p className="content is-size-7-mobile is-size-6-tablet">{line.content}</p>
                </div>
            </div>
        )
    } else {
        // User is sending somethig : right, no style
        if (line.isUserInput) {
            return (
                <div className="columns">
                    <div className="column is-8 is-offset-4 has-text-right my-2">
                        <p className="is-size-7-mobile">{line.content}</p>
                    </div>
                </div>
            )
        } else {    
            // User pre-coded choices : button, right, blue
            return (
                <div className="columns">
                    <div className="column is-10 is-offset-2 has-text-right my-2">
                        {
                            line.content.map(button => 
                                <button 
                                    key={button.index} 
                                    className="button is-small is-outlined is-link is-rounded mx-1 my-1"
                                    onClick={(text, index) => handleClickQuestion(button.text, button.index)}
                                    disabled={button.disabled}
                                >
                                    {button.text}
                                </button>
                                )
                        }
                    </div>
                </div>
            )
        }
    }
}

export default BotLine