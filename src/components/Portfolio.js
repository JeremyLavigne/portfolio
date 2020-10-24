import React, { useState } from 'react'

import ProjectTile from './ProjectTile'
import NavTile from './NavTile'


// --------------------------------------------------------------------------------------
// Portfolio slide 
// --------------------------------------------------------------------------------------
const Portfolio = () => {

    // Projects are closed by default, give user some space (except in mobile)
    const [ openedProjects, setOpenedProjects ] = useState([
        {name: "frontend", open: false},
        {name: "backend", open: false},
        {name: "previous", open: false},
        {name: "fullstack", open: false}
    ])

    return (
        <div className="box" style={boxStyle}>
            <div className="tile is-ancestor px-5 py-5">

                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Front-end" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={0}
                            />

                        </div>

                        <div className="tile is-1"></div>

                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Back-end" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={1}
                            />

                        </div>
                    </div>

                    <div className="tile">
                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Portfolios" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={2}
                            />

                        </div>

                        <div className="tile is-1"></div>

                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Full stack" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={3}
                            />

                        </div>
                    </div>
                   
                </div>

                <div className="tile is-vertical is-1"></div>

                <div className="tile is-vertical is-3">

                    <div className="tile is-parent" style={{maxHeight: '200px'}}>

                        <NavTile openedProjects={openedProjects} setOpenedProjects={setOpenedProjects}/>

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