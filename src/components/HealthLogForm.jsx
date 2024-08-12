import React, { useState } from 'react';

const HealthLogForm = ({ onSave }) => {
  const [log, setLog] = useState({
    weight: '',
    bloodPressure: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLog((prevLog) => ({ ...prevLog, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(log);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Weight</label>
        <input
          type="number"
          name="weight"
          value={log.weight}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your weight"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Blood Pressure</label>
        <input
          type="text"
          name="bloodPressure"
          value={log.bloodPressure}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your blood pressure"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save Log</button>
    </form>
  );
};

export default HealthLogForm;
