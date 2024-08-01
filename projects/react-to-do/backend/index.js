const express = require('express');
const cors = require('cors');
const { todo } = require('./db');
const { createToDo , updateToDo } = require('./types');
const app = express();
app.use(express.json());

app.use(cors());



app.post('/todo', async function(req,res){
    const createTodo = req.body;
    const parsedTodo = createToDo.safeParse(createTodo);
    if(!parsedTodo.success){
        res.status(411).json({
            msg : "Invalid input"
        })  
        return;    
        
    }
    //update it in DB
    await todo.create({
        title: createTodo.title,
        description: createTodo.description,
        completed: false
    });
    res.json({
       msg: "DB ADDED"
    });
})

app.get('/todos', async function(req,res){
    const todos = await todo.find({});

    res.json({
        todos 
    })
})
app.put('/completed', async function(req,res){
    const updateTodo = req.body.id;
    const parsedTodo = updateToDo.safeParse(updateTodo);
    if(!parsedTodo.success){
        res.status(411).json({
            msg : "Invalid input"
        })  
        return;    
        
    }
    //update it in DB
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    });
    res.json({
        msg: "TODO updated"
     });
})
app.listen(3000);