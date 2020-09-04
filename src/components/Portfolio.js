import React from 'react'


// --------------------------------------------------------------------------------------
// Portfolio slide - Need to work on it
// --------------------------------------------------------------------------------------
const Portfolio = () => {


    return (
        <div className="box" style={boxStyle}>
            <div className="tile is-ancestor px-3 py-3">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <p className="title">Hangman</p>
                                <p className="subtitle">React/Redux</p>
                                <figure>
                                    <img alt="hangman_overview" width="300" height="200" />
                                    <figcaption>Hangman the game</figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <p className="title">Java application</p>
                                <p className="subtitle">Develop in SDA</p>
                                <figure>
                                    <img alt="javaApp_overview" width="300" height="200" />
                                    <figcaption>Java App</figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            <p className="title">Previous Version</p>
                            <p className="subtitle">If you want to judge some evolution ;)</p>
                            <div className="content">
                                Content
                                </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-warning">
                        <div className="content">
                            <p className="title">Portfolio</p>
                            <div className="content">
                                Here is some of my projects, bla bla bla bla
                                Here is some of my projects, bla bla bla bla
                                Here is some of my projects, bla bla bla bla
                                Here is some of my projects, bla bla bla bla
                                </div>
                        </div>
                    </article>
                </div>
            </div>
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
    backgroundImage: "url(" + require('../images/bibliotek.jpg') + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px'
}


export default Portfolio