import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/tasks', taskRoutes);

(async () => {
  await db.sync();
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})();
