const express = require('express');
const cors = require('cors')


const port = 3001

const app = express()

app.use(express.json()) // middleware function for parsing JSON data in the body of incoming requests
app.use(cors())

let todos = [
    {id: 1, text: 'clean the room'},
    {id: 2, text: 'build a server with Express'}
];

app.get('/api/todos', (req, res) => {
    res.json(todos); // send a JSON response
})

app.post('/api/todos', (req, res) => {
    console.log('post received')
    console.log(`body: ${req.body}`)
    let task = {id: todos.length + 1, text: req.body.text}
    todos.push(task)
    res.status(201).json(task);
})

app.delete('/api/todos/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = todos.findIndex(t => t.id === taskId);
    if (taskIndex == -1) {
        res.status(404).send('Task not found');
    }
    todos.splice(taskIndex, 1);
    res.status(204).send();
})

app.listen(port, () =>{
    console.log(`The server is running on port http://localhost:${port}.`);
})