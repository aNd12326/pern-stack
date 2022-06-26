const { Router } = require('express');
const { getAllTask, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getAllTask)

router.get('/tasks/10', getTask)

router.post('/tasks', createTask)

router.delete('/tasks', deleteTask)

router.put('/tasks', updateTask)

module.exports = router;