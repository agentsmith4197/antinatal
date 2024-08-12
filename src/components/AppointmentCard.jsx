import React from 'react';

const AppointmentCard = ({ date, provider, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
      <h3 className="text-xl font-semibold">Appointment on {date}</h3>
      <p className="text-gray-700 mt-2">With {provider}</p>
    </div>
  );
};

export default AppointmentCard;
