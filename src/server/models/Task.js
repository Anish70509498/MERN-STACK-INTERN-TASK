import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import User from './User.js';

const Task = db.define('Task', {
  title: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM('To Do', 'In Progress', 'Done'),
    defaultValue: 'To Do'
  }
});
Task.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Task, { foreignKey: 'user_id' });
export default Task;
