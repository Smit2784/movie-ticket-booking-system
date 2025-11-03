import React from 'react';

export default function Layout({children}){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="sticky top-0 z-20 bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gradient">MovieBooker</a>
          <nav className="space-x-4">
            <a className="btn-ghost" href="/movies">Movies</a>
            <a className="btn-ghost" href="/my-bookings">My Bookings</a>
            <a className="btn-primary" href="/auth">Sign In</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600">© {new Date().getFullYear()} MovieBooker</div>
      </footer>
    </div>
  );
}
