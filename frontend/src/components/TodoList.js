import './TodoItem'
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';

export default function TodoList(props) {

    const handleDelete = (id) => {
        props.removeFn(id)
    }

    console.log(`list from TodoList component: ${props.toDos.map(it=>it._id)}`)
    const listItems = props.toDos.map(it => <TodoItem key = {it._id} id={it._id} text = {it.text} fn={props.removeFn} onDelete={()=>handleDelete(it._id)} />);
    console.log(listItems)
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
        
    )
}