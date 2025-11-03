import React from 'react';
import MovieGrid from '../components/movies/MovieGrid';

export default function MoviesPage(){
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <MovieGrid title="All Movies" category="all" />
    </div>
  );
}
