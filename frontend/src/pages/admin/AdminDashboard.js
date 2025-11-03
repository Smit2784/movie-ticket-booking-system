import React from 'react';

export default function AdminDashboard(){
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6"><h2 className="font-semibold mb-2">Movies</h2><p>Manage movies and metadata.</p></div>
        <div className="card p-6"><h2 className="font-semibold mb-2">Theaters</h2><p>Manage theaters and screens.</p></div>
        <div className="card p-6"><h2 className="font-semibold mb-2">Bookings</h2><p>Monitor and manage bookings.</p></div>
      </div>
    </div>
  );
}
