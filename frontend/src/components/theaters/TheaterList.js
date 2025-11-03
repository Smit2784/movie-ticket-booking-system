import React from 'react';

export default function TheaterList(){
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="card p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold">Theater #{i+1}</div>
            <div className="text-sm text-gray-600">City • Screen 1 • 2D</div>
          </div>
          <a href="/booking/123" className="btn-primary">Select</a>
        </div>
      ))}
    </div>
  );
}
