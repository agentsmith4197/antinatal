import React from 'react';

const ProgressTracker = ({ milestone, currentWeek }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Pregnancy Milestones</h2>
      <p className="text-gray-700">You are currently in week {currentWeek} of your pregnancy.</p>
      <div className="mt-4">
        {/* Add visual indicators for milestones */}
        {milestone.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full ${currentWeek >= item.week ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <p className="ml-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
