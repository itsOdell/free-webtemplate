import React from 'react'
import Input from "./Input";
import Button from "./SignupBtn";
function Main() {
    return ( 
    <main id = "main">
        <div className = "main-container">
            <div className = "container">
                <div className = "main-text-container">
                    <h1 className="description">
                        So Who Are We In Short? A Web Template Agency
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste sit, aliquam commodi nisi nulla odio laborum vitae eligendi distinctio.</p>
                    <Button text="See What We Offer" id="special"/>
                </div>

                <div className = "main-form-container">
                    <form action="">
                    <h2>Sign Up</h2>
                    <Input type="text" name="firstname" id="firstname" placeholder="First Name" req="true"/>
                    <Input type="text" name="lastname" id="lastname" placeholder="Last Name" req="true"/>
                    <Input type="tel" name="number" id="number" placeholder="Phone Number (Optional)"/>
                    <Input type="email" name="email" id="email" placeholder="Email" req="true"/>
                    <Input type="password" name="password" id="password" placeholder="Password" req="true"/>
                    <Button text="Sign Up"/>
                    </form>
                </div>

            </div>
        </div>
    </main>
    );
}

export default Main