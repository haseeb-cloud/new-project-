import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Menu, 
  X, 
  Moon, 
  Sun,
  Activity,
  Settings,
  Users,
  Info,
  Mail
} from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Shield },
    { name: 'Features', path: '/features', icon: Activity },
    { name: 'Architecture', path: '/architecture', icon: Settings },
    { name: 'Dashboard', path: '/dashboard', icon: Activity },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyber-blue/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-mono text-white">
              CyberGuard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-cyber-blue/20 text-cyber-blue cyber-glow'
                      : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-cyber-navy/50 hover:bg-cyber-blue/20 transition-colors duration-300"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-cyber-yellow" />
              ) : (
                <Moon className="w-5 h-5 text-cyber-blue" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-cyber-navy/50 hover:bg-cyber-blue/20 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-cyber-blue/20 text-cyber-blue'
                      : 'text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

