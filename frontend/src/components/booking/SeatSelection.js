import React, { useState } from 'react';

export default function SeatSelection(){
  const [selected, setSelected] = useState([]);
  const seats = Array.from({ length: 40 }, (_, i) => `A${i+1}`);

  const toggle = (s) => setSelected(prev => prev.includes(s) ? prev.filter(x=>x!==s) : [...prev, s]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-10 gap-2 bg-white p-6 rounded-xl shadow-card">
        {seats.map(s => (
          <button key={s} onClick={()=>toggle(s)} className={selected.includes(s) ? 'seat-selected' : 'seat-available'}>{s}</button>
        ))}
      </div>
      <div className="card p-4 flex items-center justify-between">
        <div>
          <div className="font-semibold">Selected: {selected.join(', ') || 'None'}</div>
          <div className="text-sm text-gray-600">Total: ₹{selected.length * 200}</div>
        </div>
        <a href="/payment" className="btn-primary">Proceed to Pay</a>
      </div>
    </div>
  );
}
