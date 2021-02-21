import React from 'react'

function Navbar() {
    for (let i = 0; i < document.querySelectorAll("li").length - 1; i++) {
        let li = document.querySelectorAll("li")[i];
        li.onmouseover = function() {
            this.children[1].classList.remove("li_underline_empty");
            this.children[1].classList.add("li_underline");
        }
        li.onmouseleave = function() {
            this.children[1].classList.remove("li_underline");
            this.children[1].classList.add("li_underline_empty");
        }
    }
    return (
        <nav id="navbar">
            <div className="container">
                <section className="logo-cont">
                    <h1 className="logo">landing</h1>
                </section>

                <ul>
                    <li>
                    <a href="#main">Home</a>
                    <div className=""></div>
                    </li>
                    <li>
                        <a href="#offer">What we offer</a>
                        <div className=""></div>
                    </li>
                    <li>
                        <a href="#" className="login">Login</a>
                        <div className="box">
                           <a href="#main">or sign in</a>
                        </div>
                    </li>

                    <div className="mama">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    
                </ul>
            </div>   
        </nav>
    );
}
export default Navbar;
