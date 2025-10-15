import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import NotificationToast from './components/NotificationToast';
import BackToTop from './components/BackToTop';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import QuickStartGuide from './components/QuickStartGuide';
import Home from './pages/Home';
import Features from './pages/Features';
import Architecture from './pages/Architecture';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show welcome notification
      addNotification('success', 'Welcome to CyberGuard!', 'Security monitoring system initialized successfully.');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addNotification = (type, title, message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, type, title, message }]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <div className="loading-scan w-64 h-1 bg-cyber-blue mb-8"></div>
          <h2 className="text-2xl font-mono text-cyber-blue mb-4">Initializing Security Systems...</h2>
          <div className="flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="matrix-bg min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Theme Toggle */}
          <div className="fixed bottom-4 left-4 z-40">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          
          {/* Back to Top Button */}
          <BackToTop />
          
          {/* Notifications */}
          <NotificationToast 
            notifications={notifications} 
            removeNotification={removeNotification} 
          />
          
          {/* Keyboard Shortcuts */}
          <KeyboardShortcuts />
          
          {/* Quick Start Guide */}
          <QuickStartGuide />
        </div>
      </div>
    </Router>
  );
}

export default App;