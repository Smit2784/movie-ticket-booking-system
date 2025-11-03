import React from 'react';
import { useParams } from 'react-router-dom';
import SeatSelection from '../components/booking/SeatSelection';

export default function BookingPage(){
  const { showId } = useParams();
  return <SeatSelection showId={showId} />;
}
