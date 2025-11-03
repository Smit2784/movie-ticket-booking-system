import React from 'react';

export default function Payment(){
  return (
    <div className="card p-6 max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Payment</h1>
      <div className="grid gap-3">
        <input className="input-field" placeholder="Card number" />
        <div className="grid grid-cols-2 gap-3">
          <input className="input-field" placeholder="MM/YY" />
          <input className="input-field" placeholder="CVV" />
        </div>
        <button className="btn-primary">Pay ₹400</button>
      </div>
    </div>
  );
}
