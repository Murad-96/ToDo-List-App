import { useState } from "react"

export default function TodoItem (props) {
    const[deleted, setDeleted] = useState(false);

    const handleDelete = () => {
        setDeleted(true)
    }

    return (
        !deleted && (
            <div className="todoItem">
                <p>{props.text}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    )
}