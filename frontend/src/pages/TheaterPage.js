import React from 'react';
import { useParams } from 'react-router-dom';
import TheaterList from '../components/theaters/TheaterList';

export default function TheaterPage(){
  const { movieId } = useParams();
  return (
    <div className="container mx-auto px-4 py-8">
      <TheaterList movieId={movieId} />
    </div>
  );
}
