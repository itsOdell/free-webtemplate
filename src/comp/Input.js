import React from 'react'

function Input({type, name, id, placeholder, req}) {
    function speedAcrossAnimation() {
    }
    return (
        <>
            <input type={type} name={name} id={id} placeholder={placeholder} required={req}/>
        </>
    )
}

export default Input
