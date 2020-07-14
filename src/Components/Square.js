import React from 'react';

export default function Square(props) {
    const onClick = props['onClick'];
    

    return (
        <button onClick={onClick}></button>
    )
}