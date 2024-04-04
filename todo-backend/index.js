const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todoList = [];

app.get('/todos', (req, res) => {
  res.json(todoList);
});

app.post('/todos', (req, res) => {
  const { task, schedule } = req.body;
  const newTodo = { task, schedule };
  todoList.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:index', (req, res) => {
  const index = req.params.index;
  todoList.splice(index, 1);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
