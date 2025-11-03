import React from 'react';
import Hero from '../components/home/Hero';
import MovieGrid from '../components/movies/MovieGrid';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <MovieGrid title="Now Showing" category="now" />
      <MovieGrid title="Upcoming" category="upcoming" />
    </div>
  );
}
