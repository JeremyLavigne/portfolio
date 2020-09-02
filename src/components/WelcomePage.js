import React from 'react'


const WelcomePage = () => {

    return (
        <div className="container has-text-centered">
            <div className="columns">
                <div className="column">
                    Welcome and thank you for coming here :)
                </div>
                <div className="column">
                    <figure>
                        <video controls>
                            Here a video
                        </video>
                        <figcaption>Nice to Meet you</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
  }
  
  export default WelcomePage