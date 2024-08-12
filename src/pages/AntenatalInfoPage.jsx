import React from 'react';

const AntenatalInfoPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Search/Filter */}
        <section className="mb-8">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Search articles or videos"
          />
        </section>

        {/* Articles/Videos List */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Article/Video Title</h3>
            <p className="text-gray-700 mt-2">Short description of the content...</p>
          </div>
          {/* Add more articles/videos here */}
        </section>

        {/* Detail View */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Selected Article/Video Title</h2>
          <p className="text-gray-700">Full content of the selected article or video...</p>
        </section>
      </div>
    </div>
  );
};

export default AntenatalInfoPage;
