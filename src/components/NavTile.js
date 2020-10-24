import React from 'react'
import useWindowWidth from '../utils/windowDimensions'


// --------------------------------------------------------------------------------------
// Nav tile - Top right corner tile giving access to other tiles
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
                <div className="column is-12">
                    <div className="columns">
                        <div className="column is-half">
                            <button 
                                className="button is-link"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(0)}
                            >
                                <i className="fab fa-react"></i>
                            </button>
                        </div>
                        <div className="column is-half">
                            <button 
                                className="button is-link"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(1)}
                            >
                                <i className="fab fa-java"></i>
                            </button>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-half">
                            <button 
                                className="button is-link"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(2)}
                            >
                                <i className="fas fa-step-backward"></i>
                            </button>
                        </div>
                        <div className="column is-half">
                            <button 
                                className="button is-link"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(3)}
                            >
                                <i className="fab fa-node-js"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default NavTile
