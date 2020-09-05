import React, { useState } from 'react'

import ProjectTile from './ProjectTile'
import NavTile from './NavTile'


// --------------------------------------------------------------------------------------
// Portfolio slide - Need to work on it
// --------------------------------------------------------------------------------------
const Portfolio = () => {

    const [ openedProjects, setOpenedProjects ] = useState([
        {name: "hangman", open: false},
        {name: "javaApp", open: false},
        {name: "versions", open: false},
        {name: "other", open: false}
    ])

    return (
        <div className="box" style={boxStyle}>
            <div className="tile is-ancestor px-5 py-5">

                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Hangman, The game" 
                                skills={["React / Redux", "Basic JSON Server"]} 
                                color="link" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={0}
                            />

                        </div>

                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Java App" 
                                skills={["Java", "OOP"]} 
                                color="success" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={1}
                            />

                        </div>
                    </div>

                    <div className="tile is-parent">

                        <ProjectTile 
                            title="Version 1" 
                            skills={["March 2020", "Carefree..."]} 
                            color="link" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={2}
                        />

                        <ProjectTile 
                            title="Version 2" 
                            skills={["May 2020", "Full of Hope!"]} 
                            color="info" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={2}
                        />

                        <ProjectTile 
                            title="Version 3" 
                            skills={["October 2020", "Confident :)"]} 
                            color="success" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={2}
                        />

                    </div>
                </div>

                <div className="tile is-vertical is-4">

                    <div className="tile is-parent" style={{maxHeight: '200px'}}>

                        <NavTile openedProjects={openedProjects} setOpenedProjects={setOpenedProjects}/>

                    </div>

                    <div className="tile is-parent">

                        <ProjectTile 
                            title="Some project" 
                            skills={["Some skill", "Some other skill"]} 
                            color="danger" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={3}
                        />

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