import React from 'react';
import * as utils from './utils.js';
import Draggable from 'react-draggable';

function Square(props) {

    const squareClasses = props['squareClasses'];
    //const onClick = props['onClick'];
    const onMouseEnter = props['onMouseEnter'];
    const onMouseLeave = props['onMouseLeave'];

    return (
        //<button className = { "square " + (squareClasses) } onClick={onClick} />
        <button className = { "square " + (squareClasses) } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    );
}

export default class Board extends React.Component {

    renderSquare(coordinates, squareClasses) {
        return (
            <Draggable>
                <Square
                key = {coordinates}
                squareClasses = {squareClasses}
                //onClick = {() => this.props.onClick(coordinates) }
                onMouseEnter = {() => this.props.onMouseEnter(coordinates)}
                onMouseLeave = {() => this.props.onMouseLeave(coordinates)}
                />
            </Draggable>
            
        );
    }

    render() {
        let boardRender = [];
        let columnsRender = [];

        const moves = this.props.moves;

        for (let coordinates in this.props.boardState) {

            if (!this.props.boardState.hasOwnProperty(coordinates)) {
                continue;
            }

            const col = utils.getColAsInt(this.props.columns, coordinates);
            const row = utils.getRowAsInt(coordinates);

            const currentPlayer = utils.returnPlayerName(this.props.currentPlayer);

            const colorClass  = ( (utils.isOdd(col) && utils.isOdd(row)) || (!utils.isOdd(col) && !(utils.isOdd(row)) ) ) ? 'white' : 'black';

            let squareClasses = [];

            squareClasses.push(coordinates);
            squareClasses.push(colorClass);

            if (this.props.activePiece === coordinates) {
                //console.log('hovered over active')
                squareClasses.push('isActive');
            }

            if (moves.indexOf(coordinates) > -1) {
                let moveClass = 'movable ' + currentPlayer + '-move';
                squareClasses.push(moveClass);
            }

            if (this.props.boardState[coordinates] !== null) {
                squareClasses.push(this.props.boardState[coordinates].player + ' piece');

                if (this.props.boardState[coordinates].isKing === true ) {
                    squareClasses.push('king');
                }
            }

            squareClasses = squareClasses.join(' ');

            columnsRender.push(this.renderSquare(coordinates, squareClasses, this.props.boardState[coordinates]));

            if (columnsRender.length >= 8) {
                columnsRender = columnsRender.reverse();
                boardRender.push(<div key={boardRender.length} className="board-col">{columnsRender}</div>);
                columnsRender = [];
            }
        }

        return (boardRender);
    }
}