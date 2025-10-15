import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronUp, 
  ChevronDown, 
  Eye, 
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

const LogTable = ({ logs }) => {
  const [sortField, setSortField] = useState('timestamp');
  const [sortDirection, setSortDirection] = useState('desc');
  const [expandedRow, setExpandedRow] = useState(null);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-cyber-red bg-cyber-red/20';
      case 'high': return 'text-cyber-yellow bg-cyber-yellow/20';
      case 'medium': return 'text-cyber-blue bg-cyber-blue/20';
      case 'low': return 'text-cyber-green bg-cyber-green/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'blocked': return <XCircle className="w-4 h-4 text-cyber-red" />;
      case 'allowed': return <CheckCircle className="w-4 h-4 text-cyber-green" />;
      case 'monitored': return <Eye className="w-4 h-4 text-cyber-blue" />;
      case 'investigating': return <AlertTriangle className="w-4 h-4 text-cyber-yellow" />;
      case 'resolved': return <CheckCircle className="w-4 h-4 text-cyber-green" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedLogs = [...logs].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];

    if (sortField === 'timestamp') {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }

    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-cyber-blue/20">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <Eye className="w-5 h-5 mr-2 text-cyber-blue" />
          Security Logs
          <span className="ml-2 px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full">
            {logs.length}
          </span>
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cyber-navy/50">
            <tr>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-cyber-blue transition-colors duration-300"
                onClick={() => handleSort('timestamp')}
              >
                <div className="flex items-center">
                  Timestamp
                  {sortField === 'timestamp' && (
                    sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-cyber-blue transition-colors duration-300"
                onClick={() => handleSort('sourceIP')}
              >
                <div className="flex items-center">
                  Source IP
                  {sortField === 'sourceIP' && (
                    sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-cyber-blue transition-colors duration-300"
                onClick={() => handleSort('event')}
              >
                <div className="flex items-center">
                  Event
                  {sortField === 'event' && (
                    sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-cyber-blue transition-colors duration-300"
                onClick={() => handleSort('severity')}
              >
                <div className="flex items-center">
                  Severity
                  {sortField === 'severity' && (
                    sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-cyber-blue transition-colors duration-300"
                onClick={() => handleSort('user')}
              >
                <div className="flex items-center">
                  User
                  {sortField === 'user' && (
                    sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyber-blue/10">
            {sortedLogs.map((log, index) => (
              <motion.tr
                key={log.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-cyber-navy/30 transition-colors duration-300"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">
                  {log.timestamp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyber-blue font-mono">
                  {log.sourceIP}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {log.event}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(log.severity)}`}>
                    {log.severity.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {log.user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(log.status)}
                    <span className="ml-2 text-sm text-gray-300 capitalize">{log.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => setExpandedRow(expandedRow === log.id ? null : log.id)}
                    className="text-cyber-blue hover:text-cyber-green transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Expanded Row Details */}
      {expandedRow && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-cyber-blue/20 bg-cyber-navy/30 p-6"
        >
          {(() => {
            const log = logs.find(l => l.id === expandedRow);
            return log ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Event Details</h4>
                  <p className="text-gray-300 leading-relaxed">{log.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Additional Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Event ID:</span>
                      <span className="text-white font-mono">{log.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Source:</span>
                      <span className="text-white">{log.sourceIP}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Severity Level:</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(log.severity)}`}>
                        {log.severity.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </motion.div>
      )}

      {logs.length === 0 && (
        <div className="text-center py-12">
          <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">No logs found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default LogTable;

