import React from 'react'


const Profile = ({ profileIsOpen, setProfileIsOpen }) => {

    const photo = require('../images/photo.png')
    const download = require('../images/download.png')

    return (
        <div className={profileIsOpen ? "modal is-active" : "modal"}>

            <div className="modal-background" onClick={() => setProfileIsOpen(false)}></div>

            <div className="modal-content">

                <div className="modal-card">

                    <header className="modal-card-head">
                        <figure className="image is-32x32 mr-3" >
                            <img className="is-rounded" src={photo} alt="profil"/>
                        </figure>

                        <p className="modal-card-title">Jeremy Lavigne</p>

                        <button 
                            className="delete" 
                            aria-label="close"
                            onClick={() => setProfileIsOpen(false)}
                        ></button>
                    </header>

                    <section className="modal-card-body">
                        <div className="content is-italic">
                            <ul>
                                <li>30 years old, two children</li>
                                <li>Studies in Mathematics</li>
                                <li>Primary School Teacher, France</li>
                                <li>Arrived in Stockholm in 2019</li>
                                <li>Self-Taught</li>
                                <li>Participating in 
                                    <a href="https://www.novarepotential.se/software-development-academy/" target="_blank" rel="noopener noreferrer"> SDA</a>, 
                                    <a href="https://www.novarepotential.se" target="_blank" rel="noopener noreferrer"> Novare</a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <footer className="modal-card-foot" style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <figcaption className="is-size-7 mr-2">Get My Resume</figcaption>
                        <figure className="image is-32x32" style={{cursor: 'pointer'}} >
                            <a href='../images/resume-lavigne.pdf' download>
                                <img className="is-rounded" src={download} alt="download"/>
                            </a>
                        </figure>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default Profile