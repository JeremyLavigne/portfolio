import React from 'react'


// --------------------------------------------------------------------------------------
// One Line of chat bot - Three renders regarding who 'talks'
// --------------------------------------------------------------------------------------
const BotLine = ({ line, lines, setLines, activeGroup, setActiveGroup, chatContent, setChatContent }) => {


    // --------------------------------------------------------------------------------------

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

    // Could be more 'optimized', should think about a better solution
    // Doesn´t prevent double click or click on an other button in the same time
    const displayAnswer = (content1, content2) => {
        // Show '.....'
        let newLines = [{
            id: Math.floor(Math.random()*10000),
            align: 'left',
            content: "..."
            }]
        setLines(lines.concat(newLines))

        // Then show fisrt answer
        setTimeout(() => {
        newLines = [{
            id: Math.floor(Math.random()*10000),
            align: 'left',
            content: content1
            }]
            setLines(lines.concat(newLines))
        }, 500)

        // Finally, complete answer
        setTimeout(() => {
            newLines = [{
                id: Math.floor(Math.random()*10000),
                align: 'left',
                content: content1
                },{
                id: Math.floor(Math.random()*10000),
                align: 'right',
                content: content2 
            }]
            setLines(lines.concat(newLines))
        }, 1000)
    }
    
    // --------------------------------------------------------------------------------------
    const handleClickQuestion = (text, index) => {

        // Start cases - Casual = Classic 
        if (text === "Start Casually") {

            disabledButtons(0)
            setActiveGroup(1) // Not took immediatly

            displayAnswer("Great, let´s go!", chatContent[1].buttons)
            return
        }
        // Serious = directly to next step
        if (text === "Start Seriously") {

            disabledButtons(0)
            setActiveGroup(2)

            displayAnswer("Sure, let's begin.", chatContent[2].buttons)

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

            displayAnswer("Moving on!", chatContent[activeGroup+1].buttons)
            return
        }


        // Usual way - disabled only pressed button
        disabledOneButton(activeGroup, index)
        displayAnswer(chatContent[activeGroup].answers[index], chatContent[activeGroup].buttons )
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