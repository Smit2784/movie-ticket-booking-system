import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Auth(){
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login('demo-token');
    window.location.href = '/';
  };

  return (
    <div className="max-w-md mx-auto card p-6">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form className="space-y-3" onSubmit={onSubmit}>
        <input className="input-field" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input-field" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn-primary w-full">Continue</button>
      </form>
    </div>
  );
}
