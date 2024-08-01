const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mst0181:admin@cluster0.xswigtd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}