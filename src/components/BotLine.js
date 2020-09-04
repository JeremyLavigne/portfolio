import React, { useState } from 'react'


// --------------------------------------------------------------------------------------
// One Line of chat bot - Three renders regarding who 'talks'
// --------------------------------------------------------------------------------------
const BotLine = ({ line, lines, setLines }) => {

    // Disabled all choices proposed when one is picked
    const [buttonsAreDisable, setButtonsAreDisabled] = useState(false)

    const handleClickQuestion = () => {

        // Fake answer waiting for data
        const newLines = [{
            id: Math.floor(Math.random()*10000),
            whotalks: 'me',
            isUserInput: false,
            sayWhat: ['Sorry, I am not ready to answer, but soon I swear!']
        }]

        setLines(lines.concat(newLines))
        setButtonsAreDisabled(true) // prevent several clicks
    }

// --------------------------------------------------------------------------------------
    // Bot is speaking : left, green, paragraph
    if (line.whotalks === 'me') {
        return (
            <div className="columns">
                <div className="column is-8 has-background-success my-2" style={{borderRadius: '15px'}}>
                    {
                        line.sayWhat.map(say => 
                            <p key={say} className="content is-size-7-mobile">
                                {say}
                            </p>
                            )
                    }
                </div>
            </div>
        )
    } else {
        // User is sending somethig : right, no style
        if (line.isUserInput) {
            return (
                <div className="columns">
                    <div className="column is-8 is-offset-4 has-text-right my-2">
                        <p className="is-size-7-mobile">{line.sayWhat}</p>
                    </div>
                </div>
            )
        } else {    
            // User pre-coded choices : button, right, blue
            return (
                <div className="columns">
                    <div className="column is-8 is-offset-4 has-text-right my-2">
                        {
                            line.sayWhat.map(say => 
                                <button 
                                    key={say} 
                                    className="button is-small is-outlined is-link is-rounded mx-1"
                                    onClick={handleClickQuestion}
                                    disabled={buttonsAreDisable ? "disabled" : null}
                                >
                                    {say}
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