import React from 'react'

import Profile from './Profile'


// --------------------------------------------------------------------------------------
// Home Slide - Welcome page, profile and github link
// --------------------------------------------------------------------------------------
const Home = ({profileIsOpen, setProfileIsOpen}) => {

    const github = require('../../images/github-image.png')
    const photo = require('../../images/photo.png')
    const linkedIn = require('../../images/linkedin.png')


    // --------------------------------------------------------------------------------------
    return (
        <div className="box boxStyle" style={{backgroundImage: "url(" + require('../../images/stockholm-night.jpg') + ")"}}>
            <div className="container">

                <div className="columns is-vcentered">

                    <div className="column is-8 has-text-centered">
                        <p className="title has-text-light is-italic">Varmt Välkommen</p>
                    </div>

                    <div className="column is-4 is-flex" style={{justifyContent: 'center'}}>

                        <figure 
                            className="image is-64x64 mr-3 has-tooltip-bottom has-tooltip-light"
                            data-tooltip="See profile"
                            onClick={() => setProfileIsOpen(true)}
                        >
                            <img className="is-rounded" src={photo} alt="profil" style={{cursor: 'pointer'}}/>
                        </figure>

                        <figure className="image is-64x64 has-tooltip-bottom has-tooltip-light" data-tooltip="See me on Github">
                            <a href="https://github.com/JeremyLavigne" target="_blank" rel="noopener noreferrer">
                                <img className="is-rounded" src={github} alt="github"/>
                            </a>
                        </figure>

                        <figure className="image is-64x64 has-tooltip-bottom has-tooltip-light" data-tooltip="See me on LinkedIn" style={{marginLeft : '10px'}}>
                            <a href="https://www.linkedin.com/in/jérémy-lavigne-33577a177" target="_blank" rel="noopener noreferrer">
                                <img className="is-rounded" src={linkedIn} alt="linkedIn"/>
                            </a>
                        </figure>
                    </div>

                </div>
            </div>
            <Profile profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen}/>
        </div>
    )
  }

export default Home