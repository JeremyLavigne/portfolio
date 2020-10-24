import React from 'react'


// --------------------------------------------------------------------------------------
// Back end Projects Tile -
// --------------------------------------------------------------------------------------
const BackEndProject = () => {

    const link = "/documents/java-app.jar"
    const gitLink ="https://github.com/JeremyLavigne/sda8-ind-project-jeremy"

    return (
        <div>
            <div className="is-flex mb-4">
                <figure className="image is-128x64">
                    <img
                        src={require('../../images/java-app.png')}
                        alt={"project_image"}
                    />
                    <figcaption>
                        <p className="has-text-dark is-italic">
                            <a href={process.env.PUBLIC_URL + link} rel="noopener noreferrer" target="_blank" download>Download</a>
                            <a className="ml-4" href={process.env.PUBLIC_URL + gitLink} rel="noopener noreferrer" target="_blank">GitHub</a>
                        </p>
                    </figcaption>
                </figure>

                <p className="ml-2" style={{minWidth: '30%'}}>Money Tracker</p>
            </div>
        </div>
    )
}


export default BackEndProject