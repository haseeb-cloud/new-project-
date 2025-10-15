import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Database, 
  Cpu, 
  Shield, 
  Monitor,
  ArrowDown,
  ArrowRight,
  Info,
  CheckCircle,
  Zap,
  Lock,
  Settings
} from 'lucide-react';

const Architecture = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = [
    {
      id: 1,
      name: 'Data Ingestion Layer',
      icon: Database,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      description: 'Collects and receives log data from various sources including system logs, network devices, and applications.',
      components: [
        'Log Collectors',
        'File Watchers',
        'Network Listeners',
        'API Endpoints',
        'Message Queues'
      ],
      details: 'This layer is responsible for gathering raw log data from multiple sources. It supports various input formats including Syslog, Windows Event Logs, JSON, CSV, and custom formats. The ingestion layer ensures reliable data collection with built-in retry mechanisms and buffering.'
    },
    {
      id: 2,
      name: 'Parsing & Normalization Engine',
      icon: Cpu,
      color: 'text-cyber-green',
      bgColor: 'bg-cyber-green/10',
      description: 'Processes raw log data, extracts relevant information, and normalizes it into a standard format for analysis.',
      components: [
        'Log Parsers',
        'Data Normalizers',
        'Field Extractors',
        'Timestamp Handlers',
        'Format Converters'
      ],
      details: 'The parsing engine uses advanced regex patterns and machine learning algorithms to extract structured data from unstructured logs. It handles different timestamp formats, IP addresses, user agents, and other common log fields. Normalization ensures consistent data structure across all log sources.'
    },
    {
      id: 3,
      name: 'Analysis & Detection Core',
      icon: Shield,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      description: 'Core analysis engine that applies detection rules, machine learning models, and correlation algorithms to identify threats.',
      components: [
        'Rule Engine',
        'ML Models',
        'Correlation Engine',
        'Anomaly Detectors',
        'Threat Intelligence'
      ],
      details: 'This is the heart of the system where sophisticated analysis takes place. It includes a flexible rule engine for custom detection logic, machine learning models for anomaly detection, and correlation engines that can identify complex attack patterns across multiple log sources.'
    },
    {
      id: 4,
      name: 'User Interface Layer',
      icon: Monitor,
      color: 'text-cyber-yellow',
      bgColor: 'bg-cyber-yellow/10',
      description: 'Modern web-based interface providing real-time dashboards, alert management, and configuration tools.',
      components: [
        'Web Dashboard',
        'Alert Management',
        'Report Generator',
        'Configuration UI',
        'API Gateway'
      ],
      details: 'The UI layer provides an intuitive interface for security analysts to monitor threats, manage alerts, and configure the system. It includes real-time dashboards, interactive log viewers, and comprehensive reporting tools. The interface is designed to be responsive and accessible from any device.'
    }
  ];

  const dataFlow = [
    { from: 'Log Sources', to: 'Data Ingestion', icon: Database },
    { from: 'Raw Logs', to: 'Parsing Engine', icon: Cpu },
    { from: 'Normalized Data', to: 'Analysis Core', icon: Shield },
    { from: 'Threat Alerts', to: 'User Interface', icon: Monitor }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              System <span className="text-cyber-blue">Architecture</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              A robust, scalable architecture designed for high-performance log analysis and threat detection.
              Built with modularity and extensibility in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-cyber-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Four-Layer Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each layer has a specific responsibility, ensuring clean separation of concerns and easy maintenance.
            </p>
          </motion.div>

          {/* Data Flow Visualization */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
              {dataFlow.map((flow, index) => {
                const Icon = flow.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex flex-col lg:flex-row items-center"
                  >
                    <div className="glass p-6 rounded-xl text-center min-w-[200px] hover:cyber-glow transition-all duration-300">
                      <Icon className="w-8 h-8 text-cyber-blue mx-auto mb-3" />
                      <div className="text-sm text-gray-300 mb-1">{flow.from}</div>
                      <div className="text-xs text-cyber-blue font-mono">{flow.to}</div>
                    </div>
                    {index < dataFlow.length - 1 && (
                      <div className="hidden lg:block mx-4">
                        <ArrowRight className="w-6 h-6 text-cyber-green" />
                      </div>
                    )}
                    {index < dataFlow.length - 1 && (
                      <div className="lg:hidden">
                        <ArrowDown className="w-6 h-6 text-cyber-green" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Layer Details */}
          <div className="space-y-8">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`glass p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive ? 'cyber-glow border-2 border-cyber-blue/50' : 'hover:cyber-glow'
                  }`}
                  onClick={() => setActiveLayer(isActive ? null : layer.id)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${layer.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${layer.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {layer.name}
                        </h3>
                        <Info className="w-5 h-5 text-gray-400 hover:text-cyber-blue transition-colors duration-300" />
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {layer.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Settings className="w-4 h-4 mr-2 text-cyber-blue" />
                            Key Components
                          </h4>
                          <ul className="space-y-2">
                            {layer.components.map((component, compIndex) => (
                              <li key={compIndex} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-cyber-green mr-3 flex-shrink-0" />
                                {component}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="md:col-span-1"
                          >
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <Zap className="w-4 h-4 mr-2 text-cyber-purple" />
                              Technical Details
                            </h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {layer.details}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern technologies and best practices for maximum performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-6 rounded-xl text-center hover:cyber-glow transition-all duration-300"
            >
              <Lock className="w-12 h-12 text-cyber-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-gray-400">
                End-to-end encryption, secure data handling, and compliance with security standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-6 rounded-xl text-center hover:cyber-glow transition-all duration-300"
            >
              <Zap className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
              <p className="text-gray-400">
                Optimized algorithms and efficient data structures for maximum processing speed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-6 rounded-xl text-center hover:cyber-glow transition-all duration-300"
            >
              <Settings className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Highly Configurable</h3>
              <p className="text-gray-400">
                Flexible configuration options and extensible architecture for custom requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;

