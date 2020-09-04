import React from 'react'

import ProjectTile from './ProjectTile'


// --------------------------------------------------------------------------------------
// Portfolio slide - Need to work on it
// --------------------------------------------------------------------------------------
const Portfolio = () => {

    return (
        <div className="box" style={boxStyle}>
            <div className="tile is-ancestor px-5 py-5">

                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent">

                            <ProjectTile title="Hangman, The game" skills={["React / Redux"]} />

                        </div>

                        <div className="tile is-parent">

                            <ProjectTile title="Java App" skills={["Java", "OOP"]} />
   
                        </div>
                    </div>

                    <div className="tile is-parent">

                        <ProjectTile title="Version 1" skills={["March 2020", "Carefree..."]} />

                        <ProjectTile title="Version 2" skills={["May 2020", "Full of Hope!"]} />

                        <ProjectTile title="Version 3" skills={["October 2020", "Confident :)"]} />

                    </div>
                </div>

                <div className="tile is-vertical is-3">

                    <div className="tile is-parent">

                        <article className="tile is-child notification is-warning">
                            <div className="content">
                                <p className="title">Portfolio</p>
                                <div className="content">
                                    List of projects
                                    </div>
                            </div>
                        </article>

                    </div>

                    <div className="tile is-parent">

                        <ProjectTile title="Some project" skills={["Some skill", "Some other skill"]} />

                    </div>

                </div>

            </div>
        </div>
    )
}

// Content is not supposed to get out of the slide
// Body height : 90vh - slide height : 85vh
const boxStyle = {
    minHeight: '85vh',
    marginTop: '2.5vh',
    maxHeight: '85vh',
    overflow: 'auto',
    backgroundImage: "url(" + require('../images/bibliotek.jpg') + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px'
}


export default Portfolio