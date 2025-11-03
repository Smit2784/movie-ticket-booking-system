import React from 'react';

export default function Hero(){
  return (
    <div className="bg-gradient-primary text-white rounded-xl p-10 shadow-card">
      <h1 className="text-4xl font-bold mb-3">Book Your Movie Night</h1>
      <p className="text-white/90 mb-6 max-w-2xl">Discover the latest releases, select your favorite seats, and enjoy a seamless booking experience.</p>
      <a href="/movies" className="btn-secondary">Browse Movies</a>
    </div>
  );
}
