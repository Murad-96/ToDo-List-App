import { useState } from "react"

export default function AddTodoForm (props) {

    const [taskText, setTaskText] = useState("")

    const handleTaskName = (event) => {
        setTaskText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.fn(taskText); 
        setTaskText("");
    }

    return (
        <form>
            <label> Enter task name:
                <input type="text" className="taskName" value={taskText} onChange={handleTaskName}></input>
            </label>
            <button onClick={handleSubmit}>Create</button>
        </form>
    )
}