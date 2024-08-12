import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/NavBa';
import Footer from './components/Footer';

const Layout = () => {
    const location = useLocation();
    const hideElements = location.pathname === '/dashbord';
  return (
      <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {!hideElements && <Navbar />}

      {/* Main Content */}
      <main className="flex-grow">
      <Outlet />
      </main>

    {/* Footer */}
    <Footer />
    </div>
  );
};

export default Layout;