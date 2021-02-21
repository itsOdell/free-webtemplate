import React from 'react'
import Button from "./SignupBtn";
function BreifHistory() {
    return (
        <section className="history">
            <div className="container">

                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/C_Hello_World_Program.png/402px-C_Hello_World_Program.png" alt="test"/>
                </div>

                <div className="right">
                    <div className="underline"></div>
                    <h3>Brief History</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde expedita distinctio aperiam in dicta debitis quae numquam deleniti esse molestias.</p>
                    <Button id="history-button" text="Learn More"/>
                </div>

            </div>
        </section>
    )
}

export default BreifHistory
