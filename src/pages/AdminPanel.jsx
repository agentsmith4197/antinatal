import React from 'react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Content Management */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Content Management</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4">
            Create New Content
          </button>
          <ul className="bg-white p-6 rounded-lg shadow-lg">
            <li className="mb-4">
              <a href="/edit-content/1" className="text-blue-500 hover:underline">
                Edit Article/Video 1
              </a>
            </li>
            {/* Add more content items here */}
          </ul>
        </section>

        {/* User Management */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
          <ul className="bg-white p-6 rounded-lg shadow-lg">
            <li className="mb-4">
              <a href="/user/1" className="text-blue-500 hover:underline">
                User 1
              </a>
            </li>
            {/* Add more users here */}
          </ul>
        </section>

        {/* Appointment Management */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Appointment Management</h2>
          <ul className="bg-white p-6 rounded-lg shadow-lg">
            <li className="mb-4">
              <a href="/appointment/1" className="text-blue-500 hover:underline">
                Appointment with Dr. Smith on 2024-08-15
              </a>
            </li>
            {/* Add more appointments here */}
          </ul>
        </section>

        {/* Notification Management */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Notification Management</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4">
            Send New Notification
          </button>
          <ul>
            <li className="mb-4">Notification 1...</li>
            {/* Add more notifications here */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
