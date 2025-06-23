import Task from '../models/Task.js';

export const getTasks = (req, res) =>
  Task.findAll({ where: { user_id: req.user.id }, order: [['createdAt', 'DESC']] })
        .then(tasks => res.json(tasks));

export const addTask = (req, res) =>
  Task.create({ title: req.body.title, user_id: req.user.id })
        .then(task => res.status(201).json(task));

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = await Task.findOne({ where: { id, user_id: req.user.id } });
  if (!task) return res.status(404).json({ error: 'Not found' });
  if (title) task.title = title;
  if (status) task.status = status;
  await task.save();
  res.json(task);
};
