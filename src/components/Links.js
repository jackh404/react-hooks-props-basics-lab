import React from "react"

function Links(props) {
    return (
        <>
            <h3>Links</h3>
            {console.log(props)}
            <a href = {props.github}>{props.github}</a>
            <a href = {props.linkedin}>{props.linkedin}</a>
        </>
    )
}

export default Links