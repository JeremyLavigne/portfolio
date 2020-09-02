import React from 'react'

import NavBar from './NavBar'
import WelcomePage from './WelcomePage'


const Home = () => {

    const github = require('../images/github-image.png')

    return (
        <section className="hero is-info is-fullheight">

            <div className="hero-head">
                <NavBar />
            </div>

            <div className="hero-body">
                <WelcomePage />
            </div>

            <div className="hero-foot">
                <div className="content is-flex" style={{justifyContent: 'flex-end'}}>
                    <a href="https://github.com/JeremyLavigne" target="_blank" rel="noopener noreferrer">
                        <img className="image is-64x64" src={github} alt="github_logo"/>
                    </a>
                </div>
            </div>

        </section>
    )
  }
  
  export default Home