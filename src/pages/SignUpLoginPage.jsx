import React, { useState } from 'react';
import { auth, db } from '../firebase'; // Adjust the path as needed
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setIsForgotPassword(false);
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
    setError(''); // Clear error message
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(true);
    setError(''); // Clear error message
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setLoading(true);
    setError(''); // Clear any previous error
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: name,
        email: email,
        createdAt: new Date(),
      });

      navigate('/dashboard'); // Navigate to dashboard on successful sign-up
    } catch (error) {
      console.error("Error during sign up:", error);
      setError(error.message); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous error
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Navigate to dashboard on successful login
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.message); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {!isForgotPassword ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              {isSignUp ? 'Sign Up' : 'Login'}
            </h2>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
              {isSignUp && (
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {isSignUp && (
                <div className="mb-4">
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}
              <button
                type="submit"
                className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading} // Disable button during loading
              >
                {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Login')}
              </button>
              {error && (
                <div className="mt-4 text-red-500 text-center">
                  {error}
                </div>
              )}
            </form>
            <div className="text-center mt-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={toggleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>
            <div className="text-center mt-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={toggleForm}
              >
                {isSignUp
                  ? 'Already have an account? Login'
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Reset Link
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={toggleForm}
              >
                Back to {isSignUp ? 'Sign Up' : 'Login'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
