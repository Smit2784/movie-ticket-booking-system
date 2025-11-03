import React from 'react';

export default function Profile(){
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card p-6">
        <h2 className="font-semibold mb-2">Profile</h2>
        <div className="space-y-2">
          <div className="input-field">John Doe</div>
          <div className="input-field">john@example.com</div>
        </div>
      </div>
      <div className="md:col-span-2 card p-6">Recent activity placeholder</div>
    </div>
  );
}
