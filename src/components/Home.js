import React from 'react'

import Profile from './Profile'


// --------------------------------------------------------------------------------------
// Home Slide - Welcome page, profile and github link
// --------------------------------------------------------------------------------------
const Home = ({profileIsOpen, setProfileIsOpen}) => {

    const github = require('../images/github-image.png')
    const photo = require('../images/photo.png')


    return (
        <div className="box" style={boxStyle}>
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

                        <figure className="image is-64x64 has-tooltip-bottom has-tooltip-light" data-tooltip="See it on Github">
                            <a href="https://github.com/JeremyLavigne" target="_blank" rel="noopener noreferrer">
                                <img className="is-rounded" src={github} alt="github"/>
                            </a>
                        </figure>
                    </div>

                </div>
            </div>
            <Profile profileIsOpen={profileIsOpen} setProfileIsOpen={setProfileIsOpen}/>
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
    backgroundImage: "url(" + require('../images/stockholm-night.jpg') + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px'
  }

// Almost same style is repeated 3 times, should put it higher

  export default Home