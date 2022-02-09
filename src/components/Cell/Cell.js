import './Cell.css'
import className from 'classnames'

const Cell = (props) => {
    const cellClasses = className({
        cell: true,
        winner: props.canHightLight,
    })
    const cellContentClasses = className({
        'cell-content': true,
        populated: props.value

    })

   
    return (
        <button className={cellClasses} onClick={props.onClick}>
            <img className={cellContentClasses} src={props.imgs}></img>
        </button>
    )
}

export default Cell