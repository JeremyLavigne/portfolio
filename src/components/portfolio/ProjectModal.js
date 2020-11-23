import React from 'react'


// --------------------------------------------------------------------------------------
// Project detail when click on + button
// --------------------------------------------------------------------------------------
const ProjectModal = ({ projectIsOpen, setProjectIsOpen, currentProject, setCurrentProject }) => {


    return (
        <div className={projectIsOpen ? "modal is-active" : "modal"}>
            <div
                className="modal-background"
                onClick={() => {
                    setProjectIsOpen(false);
                    setCurrentProject({})
                }
                }
            ></div>

            <div className="modal-content">
                <div className="modal-card">

                    <header className="modal-card-head">
                        <p className="container has-text-centered has-text-weight-bold">
                            {currentProject.title}
                        </p>
                    </header>

                    <section className="modal-card-body">
                        <span className="has-text-weight-bold is-italic">Made in :</span> {currentProject.date} <br />
                        <span className="has-text-weight-bold is-italic">Made with :</span> {currentProject.tech} <br />
                        <span className="has-text-weight-bold is-italic">Available in :</span> {currentProject.languages} <br />
                    </section>

                    <footer className="modal-card-foot">
                        <p className="container has-text-dark has-text-right is-italic">
                            <a href={currentProject.link} rel="noopener noreferrer" target="_blank">Visit</a>
                            <a className="ml-4" href={currentProject.gitLink} rel="noopener noreferrer" target="_blank">GitHub</a>
                        </p>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default ProjectModal;