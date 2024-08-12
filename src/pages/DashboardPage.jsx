import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* User Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Overview</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Upcoming Appointments */}
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
              <p className="mt-2">No upcoming appointments</p>
            </div>

            {/* Recent Notifications */}
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Recent Notifications</h3>
              <p className="mt-2">You have no new notifications</p>
            </div>

            {/* Progress Tracking */}
            <div className="bg-yellow-500 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Progress Tracking</h3>
              <p className="mt-2">You have made great progress this week!</p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/information" className="bg-blue-500 text-white p-4 rounded-lg text-center">
              Antenatal Information
            </a>
            <a href="/community" className="bg-green-500 text-white p-4 rounded-lg text-center">
              Community Groups
            </a>
            <a href="/support" className="bg-yellow-500 text-white p-4 rounded-lg text-center">
              Support Chat
            </a>
          </div>
        </section>

        {/* Reminders/Notifications */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Reminders & Notifications</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700">You have no new reminders.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
