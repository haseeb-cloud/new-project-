import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Lock, 
  Globe, 
  Download, 
  ArrowRight,
  CheckCircle,
  Activity,
  Settings,
  Users
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Detection',
      description: 'Real-time analysis of security logs with AI-powered threat detection algorithms.',
      color: 'text-cyber-blue'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Analysis',
      description: 'Process thousands of logs per second with optimized parsing engines.',
      color: 'text-cyber-green'
    },
    {
      icon: Lock,
      title: 'Offline Operation',
      description: 'Complete functionality without internet connectivity for maximum security.',
      color: 'text-cyber-purple'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Works seamlessly across Windows, Linux, and macOS environments.',
      color: 'text-cyber-yellow'
    }
  ];

  const stats = [
    { label: 'Logs Processed', value: '1M+', icon: Activity },
    { label: 'Threats Detected', value: '50K+', icon: Shield },
    { label: 'Uptime', value: '99.9%', icon: Settings },
    { label: 'Active Users', value: '10K+', icon: Users }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-navy to-cyber-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6">
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-purple bg-clip-text text-transparent">
                Portable Log Analysis
              </span>
              <br />
              <span className="text-white">
                & Cybersecurity Monitoring
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Analyze, Detect, and Protect — Anywhere, Anytime.
              <br />
              Advanced threat detection for isolated networks with zero dependencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/dashboard"
              className="group px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Activity className="w-5 h-5 mr-2" />
              Try Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/features"
              className="px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-cyber-blue/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-cyber-navy/50 rounded-full flex items-center justify-center cyber-glow">
                    <Icon className="w-8 h-8 text-cyber-blue" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyber-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyber-green/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyber-purple/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-cyber-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for comprehensive cybersecurity monitoring in one portable solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Network?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start monitoring your cybersecurity posture today with our advanced log analysis tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Demo
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

