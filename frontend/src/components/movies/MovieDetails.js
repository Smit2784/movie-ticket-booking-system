import React from 'react';

export default function MovieDetails(){
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-4">
        <div className="h-64 bg-gray-200 rounded-xl skeleton" />
        <div className="card p-6">
          <h1 className="text-3xl font-bold mb-2">Movie Title</h1>
          <p className="text-gray-700">Description placeholder.</p>
        </div>
      </div>
      <div className="space-y-4">
        <a href="/booking/123" className="btn-primary w-full inline-block text-center">Book Tickets</a>
        <div className="card p-4">Showtimes placeholder</div>
      </div>
    </div>
  );
}
