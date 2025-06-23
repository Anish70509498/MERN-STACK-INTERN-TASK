import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const nav = useNavigate();

  const handle = async e => {
    e.preventDefault();
    await api.post('/signup', form);
    nav('/');
  };

  return (
    <form onSubmit={handle} className="p-6 m-auto max-w-sm">
      <h2 className="text-2xl mb-4">Signup</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Sign Up</button>
      <p onClick={() => nav('/')}>Already have account?</p>
    </form>
  );
}
