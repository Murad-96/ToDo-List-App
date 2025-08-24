const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const port = 3001

const app = express()

app.use(express.json()) // middleware function for parsing JSON data in the body of incoming requests
app.use(cors())

const uri = process.env.MONGO_URI
mongoose.connect(uri)
.then(()=>console.log("✅ Connected to MongoDB with Mongoose!"))
.catch((err) => console.error('MongoDB connection error:', err));
    

const TaskSchema = new mongoose.Schema({
    text: String
})

// Models are constructors compiled from Schema definitions.
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the db.
// The first argument is the singlular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
const Task = mongoose.model("Task", TaskSchema);


app.get('/api/todos', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks); // send a JSON response
})

app.post('/api/todos', async (req, res) => {
    console.log('post received')
    console.log(`body: ${req.body}`)
    if (!req.body) {
        res.status(400).json({message: "Task text not specified."})
    }
    const task = new Task({text: req.body.text})
    await task.save()
    
    res.status(201).json(task); // set response status to 200, sets the Content-Type header to application/json and attaches task in the body.
})

app.delete('/api/todos/:id', async (req, res) => {
    console.log(`params: ${req.params.id}`)
    try {
        const task = await Task.findById(req.params.id);
        await task.deleteOne();
    } catch (e) {
        res.status(404).json({message: e.message})
    }
    res.json({message: "Task deleted"})
})

app.listen(port, () =>{
    console.log(`The server is running on port http://localhost:${port}.`);
})