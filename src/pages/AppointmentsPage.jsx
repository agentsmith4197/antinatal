import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Adjust the path as needed
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import AppointmentCard from '../components/AppointmentCard'; // Import the AppointmentCard component

const AppointmentsPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [provider, setProvider] = useState('');
  const [userAppointments, setUserAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        fetchAppointments(user.uid);
      } else {
        setUser(null);
        setUserAppointments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchAppointments = async (userId) => {
    setLoading(true);
    try {
      const appointmentsRef = collection(db, 'appointments');
      const q = query(appointmentsRef, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const appointments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUserAppointments(appointments);
    } catch (error) {
      setError('Error fetching appointments: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !time || !provider) {
      setError('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    try {
      const appointmentData = {
        date,
        time,
        provider,
        userId: user.uid,
      };
      await addDoc(collection(db, 'appointments'), appointmentData);
      setDate('');
      setTime('');
      setProvider('');
      setError('');
      fetchAppointments(user.uid);
    } catch (error) {
      setError('Error booking appointment: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {user ? (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Healthcare Provider</label>
                <input
                  type="text"
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter healthcare provider"
                />
              </div>
              <button 
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                disabled={submitting}
              >
                {submitting ? 'Booking...' : 'Book Appointment'}
              </button>
            </form>
          </section>
        ) : (
          <p className="text-red-500">You must be logged in to book appointments.</p>
        )}

        {loading && <p className="text-blue-500">Loading your appointments...</p>}

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Appointment History</h2>
          <div className="grid grid-cols-1 gap-4">
            {userAppointments.length > 0 ? (
              userAppointments.map((appointment) => (
                <AppointmentCard 
                  key={appointment.id} 
                  date={appointment.date} 
                  provider={appointment.provider} 
                  onClick={() => navigate(`/appointment/${appointment.id}`)} // Navigate to details on click
                />
              ))
            ) : (
              <p>No appointments found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppointmentsPage;
