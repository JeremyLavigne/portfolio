import React from 'react'
import useWindowWidth from '../utils/windowDimensions'

// --------------------------------------------------------------------------------------
// Nav tile - get access to other tiles
// --------------------------------------------------------------------------------------
const NavTile = ({openedProjects, setOpenedProjects}) => {

    const isMobile = useWindowWidth();

    const handleClickOpenProject = (index) => {
        const newOpenedProjects = [...openedProjects]

        newOpenedProjects[index].open = !newOpenedProjects[index].open

        setOpenedProjects(newOpenedProjects)
    }

    return (
        <article className="tile is-child px-3 py-3" style={isMobile ? {display: 'none'} : {display: 'block'}}>
            <div className="columns">
                <div className="column is-8">
                    <div className="columns">
                        <div className="column is-half">
                            <button 
                                className="button is-link is-light"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(0)}
                            >
                                <i className="fab fa-react"></i>
                            </button>
                        </div>
                        <div className="column is-half">
                            <button 
                                className="button is-success is-light"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(1)}
                            >
                                <i className="fab fa-java"></i>
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <button 
                            className="button is-warning is-light"
                            style={{width: '100%'}}
                            onClick={() => handleClickOpenProject(2)}
                        >
                            <i className="fas fa-step-forward"></i>
                            <i className="fas fa-step-forward"></i>
                            <i className="fas fa-step-forward"></i>
                        </button>
                    </div>
                </div>
                <div className="column is-4 is-flex" style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div></div>
                    <div >
                        <button 
                            className="button is-danger is-light"
                            style={{width: '100%'}}
                            onClick={() => handleClickOpenProject(3)}
                        >
                            <i className="fas fa-question"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default NavTile
