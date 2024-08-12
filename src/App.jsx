import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import SignUpLoginPage from './pages/SignUpLoginPage';
import Dashboard from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import AntenatalInformationPage from './pages/AntenatalInfoPage';
import CommunityPage from './pages/CommunityPage';
import AppointmentsPage from './pages/AppointmentsPage';
import ProgressTrackingPage from './pages/ProgressTrackingPage';
import AdminPanel from './pages/AdminPanel';
import MainLayout from './MainLayout'
import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
     
        <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignUpLoginPage />} />
          </Route>
          
          <Route path='/dashboard' element={<PrivateRoute element={<Layout />} />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="information" element={<AntenatalInformationPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="progress" element={<ProgressTrackingPage />} />
          <Route path="admin" element={<AdminPanel />} />
          </Route>
        </Routes>

  );
};

export default App;
