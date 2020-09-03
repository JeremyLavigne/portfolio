import React from 'react'

import Profile from './Profile'

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
                            data-tooltip="More about me"
                            onClick={() => setProfileIsOpen(true)}
                        >
                            <img className="is-rounded" src={photo} alt="profil" style={{cursor: 'pointer'}}/>
                        </figure>

                        <figure className="image is-64x64 has-tooltip-bottom has-tooltip-light" data-tooltip="See me on Github">
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


  export default Home