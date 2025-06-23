import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const User = db.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});
export default User;
