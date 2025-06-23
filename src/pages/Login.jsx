import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const nav = useNavigate();

  const handle = async e => {
    e.preventDefault();
    const res = await api.post('/login', form);
    localStorage.setItem('token', res.data.token);
    nav('/dashboard');
  };

  return (
    <form onSubmit={handle} className="p-6 m-auto max-w-sm">
      <h2 className="text-2xl mb-4">Login</h2>
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
      <p onClick={() => nav('/signup')}>No account? Signup</p>
    </form>
  );
}
