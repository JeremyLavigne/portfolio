import React from 'react'


// --------------------------------------------------------------------------------------
// Figure : image + fig caption + links
// --------------------------------------------------------------------------------------
const Figure = ({image, link, gitLink}) => {

    return (

        <figure className="image is-128x64">
            <img
                src={image}
                alt={"project_image"}
            />
            <figcaption>
                <p className="has-text-dark is-italic">
                    <a href={process.env.PUBLIC_URL + link} rel="noopener noreferrer" target="_blank">Visit</a>
                    <a className="ml-4" href={process.env.PUBLIC_URL + gitLink} rel="noopener noreferrer" target="_blank">GitHub</a>
                </p>
            </figcaption>
        </figure>

    )
}



export default Figure