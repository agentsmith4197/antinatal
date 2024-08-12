import React, { useState } from 'react';

const ProfileForm = ({ initialProfile, onSave }) => {
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save Changes</button>
    </form>
  );
};

export default ProfileForm;
