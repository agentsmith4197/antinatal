import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {


  return (
      <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

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