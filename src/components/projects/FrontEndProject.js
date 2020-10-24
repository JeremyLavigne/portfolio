import React from 'react'
import Figure from './Figure'


// --------------------------------------------------------------------------------------
// Front end Projects Tile -
// --------------------------------------------------------------------------------------
const FrontEndProject = () => {

    return (
        <div>
            <div className="is-flex mb-4">
                <Figure 
                    image = {require('../../images/hangman_overview.png')}
                    link = "https://arcane-escarpment-51046.herokuapp.com"
                    gitLink = "https://github.com/JeremyLavigne/hangman"
                />

                <p className="ml-2" style={{minWidth: '30%'}}>Hangman</p>
            </div>

            <div className="is-flex has-text-right">
                <p className="mr-2" style={{minWidth: '30%'}}>Tiny games</p>

                <Figure 
                    image = {require('../../images/tiny-games.png')}
                    link = "https://mysterious-lake-01745.herokuapp.com"
                    gitLink = "https://github.com/JeremyLavigne/play-with-your-child"
                />
            </div>
        </div>
    )
}


export default FrontEndProject