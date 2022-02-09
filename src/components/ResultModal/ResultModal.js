import './ResultModal.css'
import classNames from 'classnames';
const ResultModal = (props) => {
    const resultModalClasses = classNames({
        'modal-open': props.gameOver
    })

    return (
        <>
            <div id="modal-overlay" className={resultModalClasses}>
                <div id="game-result-modal">
                    <div id="result-container">
                        <div id="winner-container">
                            <center>
                                <img src={props.winner} id="img-size" />
                                <h1>{props.title}</h1>
                            </center>
                            <div id="new-game-container">
                                <button id="new-game-button" onClick={props.onRestartGame}>Start New Game</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ResultModal