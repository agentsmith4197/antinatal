import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Antenatal Awareness</h1>
        <p className="mt-4 text-lg">
          Your go-to platform for everything you need to know during pregnancy.
        </p>
      </section>

      {/* Navigation Links */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Explore Our Sections</h2>
          <div className="flex flex-wrap justify-center">
            <a href="/dashboard/information" className="bg-blue-500 text-white py-2 px-4 rounded m-2">
              Antenatal Information
            </a>
            <a href="/dashboard/community" className="bg-blue-500 text-white py-2 px-4 rounded m-2">
              Community
            </a>
            <a href="/dashboard/appointments" className="bg-blue-500 text-white py-2 px-4 rounded m-2">
              Appointments
            </a>
            <a href="/dashboard/progress" className="bg-blue-500 text-white py-2 px-4 rounded m-2">
              Progress Tracking
            </a>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">What Our Users Say</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">
                  "This platform has been a lifesaver during my pregnancy. The information is top-notch!"
                </p>
                <p className="mt-4 text-right text-blue-500 font-bold">- Jane Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">
                  "The community support is amazing. I found answers to all my questions."
                </p>
                <p className="mt-4 text-right text-blue-500 font-bold">- Mary Smith</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">
                  "Booking appointments has never been easier. Highly recommend!"
                </p>
                <p className="mt-4 text-right text-blue-500 font-bold">- Sarah Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
