import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Adjust the import path as needed
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import ProgressTracker from '../components/ProgressTracker'; // Adjust the import path as needed

const ProgressTrackingPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weight, setWeight] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [healthLogs, setHealthLogs] = useState([]);
  const currentWeek = 24; // Set the current week dynamically based on user's due date or input
  const milestones = [
    { week: 12, description: 'First trimester ends.' },
    { week: 20, description: 'Anatomy scan ultrasound.' },
    { week: 24, description: 'Viability of the baby increases.' },
    { week: 28, description: 'Start third trimester.' },
    // Add more milestones as needed
  ];

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    const unsubscribeLogs = onSnapshot(collection(db, 'healthLogs'), (snapshot) => {
      const logsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setHealthLogs(logsData);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeLogs();
    };
  }, []);

  const handleSaveLog = async (e) => {
    e.preventDefault();
    if (weight && bloodPressure && user) {
      try {
        await addDoc(collection(db, 'healthLogs'), {
          uid: user.uid,
          weight,
          bloodPressure,
          createdAt: new Date(),
        });
        setWeight('');
        setBloodPressure('');
      } catch (error) {
        console.error('Error saving health log: ', error);
      }
    }
  };

  if (loading) {
    return <div className="text-blue-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Pregnancy Milestones */}
        <ProgressTracker milestone={milestones} currentWeek={currentWeek} />

        {/* Health Logs */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Health Logs</h2>
          <form onSubmit={handleSaveLog} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Weight</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your weight"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Blood Pressure</label>
              <input
                type="text"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your blood pressure"
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Save Log
            </button>
          </form>
          {/* Display saved health logs */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Saved Health Logs:</h3>
            <ul className="bg-white p-4 rounded-lg shadow-lg">
              {healthLogs.map((log) => (
                <li key={log.id} className="border-b py-2">
                  <p>Weight: {log.weight} kg</p>
                  <p>Blood Pressure: {log.bloodPressure}</p>
                  <p>Date: {log.createdAt.toDate().toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reports */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Reports</h2>
          <p className="text-gray-700">Generate and view reports based on tracked data...</p>
        </section>
      </div>
    </div>
  );
};

export default ProgressTrackingPage;
