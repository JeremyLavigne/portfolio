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
                                className="button is-link"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(0)}
                            ></button>
                        </div>
                        <div className="column is-half">
                            <button 
                                className="button is-success"
                                style={{width: '100%'}}
                                onClick={() => handleClickOpenProject(1)}
                            ></button>
                        </div>
                    </div>
                    <div className="content">
                        <button 
                            className="button is-link"
                            style={{width: '100%'}}
                            onClick={() => handleClickOpenProject(2)}
                        ></button>
                    </div>
                </div>
                <div className="column is-4 is-flex" style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div></div>
                    <div >
                        <button 
                            className="button is-danger"
                            style={{width: '100%'}}
                            onClick={() => handleClickOpenProject(3)}
                        ></button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default NavTile
