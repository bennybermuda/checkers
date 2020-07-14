//state management
//turn state
import React, {useState} from 'react';
import Square from './Square'

export default class Board extends React.Component {
    renderSquare(coordinates, playerKing, AIKing) {
        return (
            <Square
                isFree = {true}
                isPlayerKingSpace = {playerKing}
                isAIKingSpace = {AIKing}
                location = {coordinates}
                onClick = {() => this.props.onClick(coordinates) }
            />
        )
    }

    renderBoard() {
        //board state
        const [boardSquares, setBoardSquares] = useState(Array(64).fill())
        //turn state
        const [playerIsNext, setPlayerIsNext] = useState(true) 
        //handle turn
        const handleTurn = index => {
            //copy of our board state
            const squares = [...boardSquares];
            //if index of board has a checker on it, return
            if (squares[index]) return
            //move checker if square you click on is a valid move
            
        }
    }
    render() {
        return(
            <div></div>
        )
    }
}