import React, { useState } from 'react';

const AdminContentForm = ({ initialContent, onSave }) => {
  const [content, setContent] = useState(initialContent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(content);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={content.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={content.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        ></textarea>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save Content</button>
    </form>
  );
};

export default AdminContentForm;
