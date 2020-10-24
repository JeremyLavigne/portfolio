import React from 'react'
import Figure from './Figure'


// --------------------------------------------------------------------------------------
// Previous Portfolios Tile
// --------------------------------------------------------------------------------------
const PreviousPortfolios = () => {

    return (
        <div>
            <div className="is-flex mb-4">
                <Figure 
                    image = {require('../../images/version-1.png')}
                    link = "https://www.jeremylavigneapply.com/version-1/indexv1.html"
                    gitLink = "https://github.com/JeremyLavigne/Apply"
                />

                <p className="ml-2" style={{minWidth: '30%'}}>March 2020, Carefree..</p>
            </div>

            <div className="is-flex has-text-right">
                <p className="mr-2" style={{minWidth: '30%'}}>May 2020, Full of hope !</p>

                <Figure 
                    image = {require('../../images/version-2.png')}
                    link = "https://www.jeremylavigneapply.com"
                    gitLink = "https://github.com/JeremyLavigne/application2.0"
                />
            </div>
        </div>
    )
}


export default PreviousPortfolios