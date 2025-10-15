import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Lock, 
  Globe, 
  Download, 
  Settings,
  Activity,
  Eye,
  Database,
  Cpu,
  FileText,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: 'Cross-Platform Portability',
      description: 'Deploy on any operating system with a single executable file. No installation required, no dependencies to manage.',
      details: [
        'Single executable deployment',
        'Windows, Linux, macOS support',
        'No external dependencies',
        'Portable configuration files'
      ],
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10'
    },
    {
      icon: Lock,
      title: 'Offline Log Analysis',
      description: 'Complete functionality without internet connectivity. Perfect for air-gapped networks and high-security environments.',
      details: [
        'Zero internet dependency',
        'Air-gapped network support',
        'Local data processing',
        'Secure offline operation'
      ],
      color: 'text-cyber-green',
      bgColor: 'bg-cyber-green/10'
    },
    {
      icon: Activity,
      title: 'Threat Detection Engine',
      description: 'Advanced AI-powered algorithms to identify security threats, anomalies, and suspicious patterns in real-time.',
      details: [
        'Machine learning algorithms',
        'Real-time threat detection',
        'Pattern recognition',
        'Anomaly detection'
      ],
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10'
    },
    {
      icon: Settings,
      title: 'Simple Rule Builder',
      description: 'Create custom detection rules with an intuitive interface. No coding required for basic rule configuration.',
      details: [
        'Visual rule builder',
        'Pre-built rule templates',
        'Custom condition logic',
        'Rule testing and validation'
      ],
      color: 'text-cyber-yellow',
      bgColor: 'bg-cyber-yellow/10'
    },
    {
      icon: Zap,
      title: 'Lightweight Performance',
      description: 'Optimized for minimal resource usage while maintaining high-speed log processing capabilities.',
      details: [
        'Low memory footprint',
        'High-speed processing',
        'Efficient algorithms',
        'Resource optimization'
      ],
      color: 'text-cyber-red',
      bgColor: 'bg-cyber-red/10'
    },
    {
      icon: Globe,
      title: 'Zero-Dependency Deployment',
      description: 'Self-contained application with all required libraries bundled. Deploy anywhere without additional setup.',
      details: [
        'Self-contained binaries',
        'No external libraries',
        'Quick deployment',
        'Minimal system requirements'
      ],
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10'
    }
  ];

  const additionalFeatures = [
    {
      icon: Eye,
      title: 'Intuitive Interface',
      description: 'Clean, modern dashboard designed for both security experts and beginners.',
      color: 'text-cyber-green'
    },
    {
      icon: Database,
      title: 'Multiple Log Formats',
      description: 'Support for Syslog, Windows Event Logs, Apache, Nginx, and custom formats.',
      color: 'text-cyber-blue'
    },
    {
      icon: Cpu,
      title: 'Real-time Processing',
      description: 'Process logs as they arrive with minimal latency for immediate threat response.',
      color: 'text-cyber-purple'
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Generate detailed security reports in multiple formats (PDF, CSV, JSON).',
      color: 'text-cyber-yellow'
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alerting',
      description: 'Intelligent alert prioritization and correlation to reduce false positives.',
      color: 'text-cyber-red'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'Built-in compliance reporting for SOC 2, ISO 27001, and other standards.',
      color: 'text-cyber-green'
    }
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
              Powerful <span className="text-cyber-blue">Features</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Everything you need for comprehensive cybersecurity monitoring in one portable solution.
              Built for security professionals who demand reliability and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-cyber-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Six essential features that make our tool the perfect choice for cybersecurity monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-2xl hover:cyber-glow transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyber-green mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive toolset for complete cybersecurity monitoring and analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-xl hover:cyber-glow transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-navy/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience the Power
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Try our interactive dashboard to see these features in action.
            </p>
            <motion.a
              href="/dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
            >
              <Activity className="w-5 h-5 mr-2" />
              Try Interactive Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;

