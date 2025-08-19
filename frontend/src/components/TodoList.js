import './TodoItem'
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';

export default function TodoList(props) {

    const handleDelete = (id) => {
        props.removeFn(id)
    }

    console.log(`list from TodoList component: ${props.toDos.map(it=>it.id)}`)
    const listItems = props.toDos.map(it => <TodoItem key = {it.id} id={it.id} text = {it.text} fn={props.removeFn} onDelete={()=>handleDelete(it.id)} />);
    console.log(listItems)
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
        
    )
}