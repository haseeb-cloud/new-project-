import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'auto', icon: Monitor, label: 'Auto' }
  ];

  const currentTheme = darkMode ? 'dark' : 'light';

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-400 mr-2">Theme:</span>
      <div className="flex bg-cyber-navy/50 rounded-lg p-1">
        {themes.map((theme) => {
          const Icon = theme.icon;
          const isActive = currentTheme === theme.name;
          
          return (
            <motion.button
              key={theme.name}
              onClick={() => {
                if (theme.name === 'dark') setDarkMode(true);
                else if (theme.name === 'light') setDarkMode(false);
                else setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
              }}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 flex items-center space-x-1 ${
                isActive
                  ? 'bg-cyber-blue text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-cyber-navy/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-3 h-3" />
              <span>{theme.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeToggle;

