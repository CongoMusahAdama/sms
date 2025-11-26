import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import BranchesPage from './pages/BranchesPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import DashboardLayout from './components/dashboard/DashboardLayout';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Route>

          <Route path="/dashboard/member" element={<DashboardLayout role="member" />} />
          <Route path="/dashboard/officer" element={<DashboardLayout role="officer" />} />
          <Route path="/dashboard/executive" element={<DashboardLayout role="executive" />} />
          <Route path="/dashboard/admin" element={<DashboardLayout role="admin" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

