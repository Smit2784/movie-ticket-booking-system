import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage(){
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-6xl font-bold text-primary-600">404</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary inline-block">Go Home</Link>
    </div>
  );
}
