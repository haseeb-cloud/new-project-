import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const NotificationToast = ({ notifications, removeNotification }) => {
  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`glass p-4 rounded-lg border-l-4 min-w-80 max-w-96 ${
              notification.type === 'success' ? 'border-cyber-green' :
              notification.type === 'error' ? 'border-cyber-red' :
              notification.type === 'warning' ? 'border-cyber-yellow' :
              'border-cyber-blue'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`flex-shrink-0 ${
                notification.type === 'success' ? 'text-cyber-green' :
                notification.type === 'error' ? 'text-cyber-red' :
                notification.type === 'warning' ? 'text-cyber-yellow' :
                'text-cyber-blue'
              }`}>
                {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
                {notification.type === 'error' && <AlertCircle className="w-5 h-5" />}
                {notification.type === 'warning' && <AlertCircle className="w-5 h-5" />}
                {notification.type === 'info' && <Info className="w-5 h-5" />}
              </div>
              
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm">
                  {notification.title}
                </h4>
                <p className="text-gray-300 text-xs mt-1">
                  {notification.message}
                </p>
              </div>
              
              <button
                onClick={() => removeNotification(notification.id)}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationToast;

