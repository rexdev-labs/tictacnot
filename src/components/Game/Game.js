import { useState } from 'react';
import { calcWinner } from '../../util/calcWinner';
import Board from '../Board/Board'
import ResultModal from '../ResultModal/ResultModal';
import './Game.css'

const Game = () => {
    const [cellValue, setCellValue] = useState(["", "", "", "", "", "", "", "", ""]);
    const [xValue, setXValue] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [playerWin, setPlayerWin] = useState("");
    const [isTie, setTie] = useState(false);
    const [numberOfTurnLeft, setNumberOfTurnLeft] = useState(9);
    const winningCombination = [];
    const isCellEmpty = (cellIndex) => cellValue[cellIndex] === '';
    const playerWinResult = playerWin === "X" ? "/images/player1.webp" : "/images/player2.webp";

    const gameRestart = () => {
        setCellValue(["", "", "", "", "", "", "", "", ""])
        setXValue(true)
        setNumberOfTurnLeft(9)
        setIsGameOver(false)
        setPlayerWin("")
        setTie(false)
    }

    const cellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
            const newCellValue = [...cellValue];
            newCellValue[cellIndex] = xValue ? "X" : "O";

            const calcResult = calcWinner(newCellValue, cellIndex);

            setCellValue(newCellValue)
            setXValue(!xValue)
            setNumberOfTurnLeft(numberOfTurnLeft - 1)
            setIsGameOver(calcResult.hasResult)
            setPlayerWin(calcResult.winner)
            setTie(numberOfTurnLeft == 1)
        }
    }
    return (
        <>
            <Board
                cellValue={cellValue}
                winningCombination={winningCombination}
                cellClicked={cellClicked}
            />
            <ResultModal gameOver={isGameOver} title="YOU WIN" winner={playerWinResult} onRestartGame={gameRestart} />
            <ResultModal gameOver={isTie} title="GAME TIE" winner="/images/tie.webp" onRestartGame={gameRestart} />
        </>
    )
}

export default Game