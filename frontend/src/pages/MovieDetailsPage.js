import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/movies/MovieDetails';

export default function MovieDetailsPage(){
  const { id } = useParams();
  return <MovieDetails id={id} />;
}
