import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Shield, 
  AlertTriangle, 
  Settings,
  Plus,
  Trash2
} from 'lucide-react';

const RuleForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    condition: '',
    threshold: '',
    action: 'alert',
    severity: 'medium',
    enabled: true
  });

  const [errors, setErrors] = useState({});

  const eventTypes = [
    'Failed Login Attempt',
    'Successful Login',
    'Port Scan',
    'File Access',
    'Data Export',
    'System Error',
    'Suspicious Activity',
    'Configuration Change'
  ];

  const actions = [
    { value: 'alert', label: 'Send Alert' },
    { value: 'block_ip', label: 'Block IP' },
    { value: 'monitor', label: 'Monitor Only' },
    { value: 'alert_and_block', label: 'Alert & Block' }
  ];

  const severities = [
    { value: 'low', label: 'Low', color: 'text-cyber-green' },
    { value: 'medium', label: 'Medium', color: 'text-cyber-blue' },
    { value: 'high', label: 'High', color: 'text-cyber-yellow' },
    { value: 'critical', label: 'Critical', color: 'text-cyber-red' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Rule name is required';
    }
    
    if (!formData.eventType) {
      newErrors.eventType = 'Event type is required';
    }
    
    if (!formData.condition.trim()) {
      newErrors.condition = 'Condition is required';
    }
    
    if (!formData.threshold || isNaN(formData.threshold) || formData.threshold <= 0) {
      newErrors.threshold = 'Valid threshold is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="glass p-8 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyber-blue" />
              Create Detection Rule
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-cyber-navy/50 rounded-lg transition-colors duration-300"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rule Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Rule Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Enter rule name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Event Type *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                  errors.eventType ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select event type</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.eventType && (
                <p className="text-red-400 text-sm mt-1">{errors.eventType}</p>
              )}
            </div>

            {/* Condition and Threshold */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Condition *
                </label>
                <input
                  type="text"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                    errors.condition ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., count > 3"
                />
                {errors.condition && (
                  <p className="text-red-400 text-sm mt-1">{errors.condition}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Threshold *
                </label>
                <input
                  type="number"
                  name="threshold"
                  value={formData.threshold}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                    errors.threshold ? 'border-red-500' : ''
                  }`}
                  placeholder="e.g., 5"
                  min="1"
                />
                {errors.threshold && (
                  <p className="text-red-400 text-sm mt-1">{errors.threshold}</p>
                )}
              </div>
            </div>

            {/* Action and Severity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Action
                </label>
                <select
                  name="action"
                  value={formData.action}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300"
                >
                  {actions.map(action => (
                    <option key={action.value} value={action.value}>
                      {action.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Severity
                </label>
                <select
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300"
                >
                  {severities.map(severity => (
                    <option key={severity.value} value={severity.value}>
                      {severity.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Enabled Toggle */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="enabled"
                checked={formData.enabled}
                onChange={handleChange}
                className="w-4 h-4 text-cyber-blue bg-cyber-navy border-cyber-blue rounded focus:ring-cyber-blue focus:ring-2"
              />
              <label className="text-sm font-medium text-white">
                Enable rule immediately
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 flex items-center justify-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Rule
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 glass text-white font-semibold rounded-lg hover:bg-cyber-navy/50 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RuleForm;

