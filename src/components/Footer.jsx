import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* Links */}
        <div className="space-y-2">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <p className="text-sm">&copy; 2024 Antenatal Awareness Platform</p>
      </div>
    </footer>
  );
};

export default Footer;
