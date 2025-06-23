import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    api.get('/tasks').then(res => setTasks(res.data));
  }, []);

  const add = async () => {
    const { data } = await api.post('/tasks', { title });
    setTasks(prev => [data, ...prev]);
    setTitle('');
  };

  const changeStatus = async (t) => {
    const idx = ['To Do', 'In Progress', 'Done'].indexOf(t.status);
    const next = idx < 2 ? ['To Do', 'In Progress', 'Done'][idx + 1] : 'To Do';
    const { data } = await api.put(`/tasks/${t.id}`, { status: next });
    setTasks(prev => prev.map(x => x.id === t.id ? data : x));
  };

  return (
    <div className="max-w-xl mx-auto my-6">
      <h1 className="text-2xl mb-4">Tasks</h1>
      <div className="flex mb-4">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task" />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id} className="p-2 mb-2 flex justify-between items-center border">
            <span>{t.title} — {t.status}</span>
            <button onClick={() => changeStatus(t)}>Next</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
