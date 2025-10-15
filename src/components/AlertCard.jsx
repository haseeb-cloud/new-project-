import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Activity,
  X,
  CheckCircle,
  Eye
} from 'lucide-react';

const AlertCard = ({ alert, index }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return {
        bg: 'bg-cyber-red/10',
        border: 'border-cyber-red/30',
        text: 'text-cyber-red',
        icon: 'text-cyber-red'
      };
      case 'high': return {
        bg: 'bg-cyber-yellow/10',
        border: 'border-cyber-yellow/30',
        text: 'text-cyber-yellow',
        icon: 'text-cyber-yellow'
      };
      case 'medium': return {
        bg: 'bg-cyber-blue/10',
        border: 'border-cyber-blue/30',
        text: 'text-cyber-blue',
        icon: 'text-cyber-blue'
      };
      case 'low': return {
        bg: 'bg-cyber-green/10',
        border: 'border-cyber-green/30',
        text: 'text-cyber-green',
        icon: 'text-cyber-green'
      };
      default: return {
        bg: 'bg-gray-500/10',
        border: 'border-gray-500/30',
        text: 'text-gray-400',
        icon: 'text-gray-400'
      };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <Activity className="w-4 h-4 text-cyber-red animate-pulse" />;
      case 'investigating': return <Eye className="w-4 h-4 text-cyber-yellow" />;
      case 'resolved': return <CheckCircle className="w-4 h-4 text-cyber-green" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const colors = getSeverityColor(alert.severity);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg border ${colors.bg} ${colors.border} hover:cyber-glow transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <AlertTriangle className={`w-5 h-5 ${colors.icon}`} />
          <h4 className="font-semibold text-white text-sm">{alert.title}</h4>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon(alert.status)}
          <span className={`px-2 py-1 text-xs rounded-full ${colors.bg} ${colors.text}`}>
            {alert.severity.toUpperCase()}
          </span>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
        {alert.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            <span className="font-mono">{alert.sourceIP}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{alert.timestamp}</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="px-2 py-1 bg-cyber-navy/50 rounded text-white">
            {alert.count} events
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-3">
        <button className="flex-1 px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded hover:bg-cyber-blue/30 transition-colors duration-300">
          Investigate
        </button>
        <button className="flex-1 px-3 py-1 bg-cyber-green/20 text-cyber-green text-xs rounded hover:bg-cyber-green/30 transition-colors duration-300">
          Resolve
        </button>
        <button className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded hover:bg-gray-500/30 transition-colors duration-300">
          <X className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

export default AlertCard;

