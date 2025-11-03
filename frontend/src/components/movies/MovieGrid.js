import React from 'react';

export default function MovieGrid({ title }){
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="card p-4 card-hover">
            <div className="aspect-[2/3] bg-gray-200 rounded-lg mb-3 skeleton" />
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2 skeleton" />
            <div className="h-3 w-1/2 bg-gray-200 rounded skeleton" />
          </div>
        ))}
      </div>
    </section>
  );
}
