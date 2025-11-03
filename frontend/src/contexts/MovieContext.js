import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext(null);
export const useMovies = () => useContext(MovieContext);

export function MovieProvider({ children }){
  const [filters, setFilters] = useState({ q: '', genre: 'all' });

  return (
    <MovieContext.Provider value={{ filters, setFilters }}>
      {children}
    </MovieContext.Provider>
  );
}
