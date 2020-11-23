import React from 'react'


// --------------------------------------------------------------------------------------
// Profile - Modal opening when clicking on Photo in Home page
// --------------------------------------------------------------------------------------
const Profile = ({ profileIsOpen, setProfileIsOpen }) => {

    const photo = require('../../images/photo.png') 


    return (
        <div className={profileIsOpen ? "modal is-active" : "modal"}>

            <div className="modal-background" onClick={() => setProfileIsOpen(false)}></div>

            <div className="modal-content">

                <div className="modal-card">

                    <header className="modal-card-head">
                        <figure className="image is-32x32 mr-3" >
                            <img className="is-rounded" src={photo} alt="profil"/>
                        </figure>

                        <p className="modal-card-title">Jérémy Lavigne</p>

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

                    <footer className="modal-card-foot">
                        <div className="container has-text-right">

                                <p>Get My Resume -

                                <span className="icon">
                                    <a href={process.env.PUBLIC_URL + '/documents/resume-lavigne.pdf'} download>
                                        <i className="fas fa-file-download"></i>
                                    </a>
                                </span>

                                </p>

                        </div>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default Profile