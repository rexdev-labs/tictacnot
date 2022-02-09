import Cell from '../Cell/Cell'
import './Board.css'
const Board = (props) => {
    
    const cells = props.cellValue.map((value, index) => {
        const canHightLight = props.winningCombination && props.winningCombination.indexOf(index) >= 0;
        const imgs = value === "X" ? "/images/player1.webp" : "/images/player2.webp";

        return (<Cell 
            value={value} 
            canHightLight={canHightLight} 
            key={index} 
            imgs={imgs}
            onClick = {()=>props.cellClicked(index)}
            />)
    })
    return (
        <div id="board">
            {cells}
        </div>
    )
}

export default Board