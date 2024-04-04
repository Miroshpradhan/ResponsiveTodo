const express = require('express');
const Todo = require('../model/Todo');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
    schedule: new Date(req.body.schedule),
    completed: req.body.completed || false,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.completed = req.body.completed;
    const updatedTodo = await todo.save();

    res.json({ message: 'Todo updated', updatedTodo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
