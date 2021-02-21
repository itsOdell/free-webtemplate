import React from 'react'

function SignupBtn({id, text}) {
    for (let i = 0; i < document.querySelectorAll("button").length; i++) {
        let btn = document.querySelectorAll("button")[i];
        btn.onmouseover = function() {
            this.children[0].classList.remove("empty");
            this.children[0].classList.add("fill");
        }
        btn.onmouseleave = function() {
            this.children[0].classList.remove("fill");
            this.children[0].classList.add("empty");
        }
    }
    return (
        <>
            <button type="submit" id={id}>
                <div></div>
                {text}
            </button>
        </>
    )
}

export default SignupBtn
