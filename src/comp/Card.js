import React from 'react'

function Card({title, desc}) {
    return (
        <div id="card">
            <h3>{title}</h3>
            <p class="card-desc">{desc}</p>
        </div>
    )
}

export default Card
