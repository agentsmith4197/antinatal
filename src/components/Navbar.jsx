import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // Adjust the path as needed
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate(); // Use useNavigate to redirect after logout

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const docSnapshot = await getDoc(userDoc);
        if (docSnapshot.exists()) {
          setUserName(docSnapshot.data().name); // Set the user's name from Firestore
        }
      } else {
        setUserName(''); // Reset the userName if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/dashboard" className="text-white">Home</Link>
          <Link to="/dashboard/appointments" className="text-white">Appointments</Link>
          <Link to="/dashboard/community" className="text-white">Community</Link>
          <Link to="/dashboard/profile" className="text-white">Profile</Link>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="text-white">{userName || 'User'}</button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
              <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
              <button
                onClick={handleLogout} // Handle logout on button click
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
