import React from 'react';

export default function MyBookings(){
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="card p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold">Booking #{1000+i}</div>
            <div className="text-sm text-gray-600">Movie • Theater • 7:30 PM</div>
          </div>
          <a href="#" className="btn-secondary">Download Ticket</a>
        </div>
      ))}
    </div>
  );
}
