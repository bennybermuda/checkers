import React from 'react';

export default function Landing(props){
    return (
        <div>
            <h1 id="title">Checkers in React</h1>
            <button id="start" onClick={props.onStart}>Play</button>   
        </div>
    )
}