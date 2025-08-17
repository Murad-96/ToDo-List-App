import './TodoItem'
import TodoItem from './TodoItem';


export default function TodoList(props) {
    console.log(`list from TodoList component: ${props.toDos}`)
    const listItems = props.toDos.map(it => <TodoItem key = {it.id} text = {it.text}/>);
    console.log(listItems)
    return (
        <ul>
            {listItems}
        </ul>
    )
}