import express from 'express';
import { protect } from '../middleware/auth.js';
import { getTasks, addTask, updateTask } from '../controllers/taskController.js';
const router = express.Router();
router.use(protect);
router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
export default router;
