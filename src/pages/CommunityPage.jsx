import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Adjust the import path as needed
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

const CommunityPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    const unsubscribeMessages = onSnapshot(collection(db, 'messages'), (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesData);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeMessages();
    };
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '' && user) {
      try {
        await addDoc(collection(db, 'messages'), {
          text: newMessage,
          uid: user.uid,
          name: user.displayName || 'Anonymous', // Get name from user object
          createdAt: new Date(),
        });
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message: ', error);
      }
    }
  };
  
  

  if (loading) {
    return <div className="text-blue-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {user ? (
          <>
            {/* Forum/List of Groups */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Community Groups</h2>
              <ul className="bg-white p-6 rounded-lg shadow-lg">
                <li className="mb-4">
                  <a href="/group/1" className="text-blue-500 hover:underline">
                    Group 1
                  </a>
                </li>
                {/* Add more groups here */}
              </ul>
            </section>

            {/* Group Chat/Discussions */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Group Chat</h2>
              <div className="mb-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  {messages.map((msg) => (
                    <p key={msg.id} className="text-gray-700">
                      <strong>{msg.name}:</strong> {msg.text}
                    </p>
                  ))}
                </div>
              </div>
              <form onSubmit={handleSendMessage} className="flex">
                <input
                  type="text"
                  className="flex-grow px-3 py-2 border rounded-lg"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
                  Send
                </button>
              </form>
            </section>
          </>
        ) : (
          <p className="text-red-500">You must be logged in to access the community page.</p>
        )}
      </div>
    </div>
  );
};

export default CommunityPage;
