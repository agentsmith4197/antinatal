import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Save Changes
            </button>
          </form>
        </section>

        {/* Pregnancy Details */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Pregnancy Details</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Due Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Health Conditions</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter any health conditions"
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Save Changes
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
