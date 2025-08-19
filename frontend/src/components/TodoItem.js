
export default function TodoItem (props) {
    return (
        !props.isDeleted && (
            <div className="todoItem">
                <p>{props.text}</p>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        )
    )
}