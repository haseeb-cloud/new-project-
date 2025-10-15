import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard, X } from 'lucide-react';

const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: 'Ctrl + /', description: 'Toggle shortcuts help' },
    { key: 'Ctrl + K', description: 'Search' },
    { key: 'Ctrl + D', description: 'Go to Dashboard' },
    { key: 'Ctrl + F', description: 'Go to Features' },
    { key: 'Ctrl + A', description: 'Go to Architecture' },
    { key: 'Ctrl + H', description: 'Go to Home' },
    { key: 'Esc', description: 'Close modals' },
    { key: 'Ctrl + T', description: 'Toggle theme' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass p-8 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Keyboard className="w-6 h-6 mr-3 text-cyber-blue" />
                Keyboard Shortcuts
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-cyber-navy/50 rounded-lg transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              {shortcuts.map((shortcut, index) => (
                <motion.div
                  key={shortcut.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-cyber-navy/30 rounded-lg hover:bg-cyber-navy/50 transition-colors duration-300"
                >
                  <span className="text-gray-300">{shortcut.description}</span>
                  <kbd className="px-3 py-1 bg-cyber-dark text-cyber-blue text-sm font-mono rounded border border-cyber-blue/30">
                    {shortcut.key}
                  </kbd>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-cyber-blue/10 rounded-lg">
              <p className="text-sm text-gray-300">
                💡 <strong>Tip:</strong> Press <kbd className="px-2 py-1 bg-cyber-dark text-cyber-blue text-xs font-mono rounded">Ctrl + /</kbd> anytime to toggle this help panel.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KeyboardShortcuts;

