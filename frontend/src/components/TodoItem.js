import styles from './TodoItem.css'

export default function TodoItem (props) {
    return (
        (
            <div className="todoItem">
                <p>{props.text}</p>
                <button className="deleteButton" onClick={props.onDelete}>Delete</button>
            </div>
        )
    )
}