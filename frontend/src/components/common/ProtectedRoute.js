import React from 'react';
import { Navigate } from 'react-router-dom';

// Minimal placeholder auth check; replace with real context
const isAuthed = () => !!localStorage.getItem('token');

export default function ProtectedRoute({ children, adminOnly }){
  const authed = isAuthed();
  const role = localStorage.getItem('role') || 'user';

  if (!authed) return <Navigate to="/auth" replace />;
  if (adminOnly && role !== 'admin') return <Navigate to="/" replace />;
  return children;
}
