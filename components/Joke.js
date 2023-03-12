import React from "react";

export default function Joke(props) {
    return(
        <div className="joke">
            <p className="setup">{props.setup}</p>
            <p className="punchline">{props.punchline}</p>
            <p>{props.name}</p>
        </div>
    )
}