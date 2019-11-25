const router = require('express').Router();


const Task = require('../models/task');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});



// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});



// ADD a new task
router.post('/', async (req, res) => {
  const { title, description } = req.body;
 
  res.json({status: 'Task Savedd'});
});

module.exports = router;