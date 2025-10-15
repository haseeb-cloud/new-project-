import { motion } from 'framer-motion';
import { 
  Shield, 
  Target, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Zap,
  Heart
} from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Lead Security Engineer',
      bio: '10+ years in cybersecurity, former NSA analyst specializing in threat detection and log analysis.',
      avatar: 'AC',
      color: 'bg-cyber-blue'
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      bio: 'Full-stack developer with expertise in distributed systems and real-time data processing.',
      avatar: 'SJ',
      color: 'bg-cyber-green'
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps & Infrastructure',
      bio: 'Infrastructure specialist focused on scalable, secure deployments and cross-platform compatibility.',
      avatar: 'MR',
      color: 'bg-cyber-purple'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'AI/ML Research Lead',
      bio: 'PhD in Computer Science, expert in machine learning algorithms for anomaly detection.',
      avatar: 'EW',
      color: 'bg-cyber-yellow'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every decision is made with security as the top priority. We believe in defense in depth and zero-trust principles.',
      color: 'text-cyber-blue'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Cybersecurity tools should be accessible to organizations of all sizes, not just large enterprises.',
      color: 'text-cyber-green'
    },
    {
      icon: Lock,
      title: 'Privacy',
      description: 'We respect your data privacy. Our tool operates entirely offline and never sends data to external servers.',
      color: 'text-cyber-purple'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'We optimize for speed and efficiency, ensuring our tool can handle high-volume log processing.',
      color: 'text-cyber-yellow'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'SOC 2 Type II Certified',
      description: 'Compliant with security standards for data protection and availability.'
    },
    {
      icon: CheckCircle,
      title: '99.9% Uptime SLA',
      description: 'Proven reliability with enterprise-grade monitoring and support.'
    },
    {
      icon: Users,
      title: '10,000+ Active Users',
      description: 'Trusted by security teams worldwide for threat detection and analysis.'
    },
    {
      icon: Shield,
      title: 'Zero Security Incidents',
      description: 'Clean security record with no reported vulnerabilities or breaches.'
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
              About <span className="text-cyber-blue">CyberGuard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              We're on a mission to democratize cybersecurity monitoring by making advanced 
              threat detection accessible to organizations of all sizes, anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cyber-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                In today's interconnected world, cybersecurity threats are evolving faster than ever. 
                Traditional security solutions often require complex infrastructure, internet connectivity, 
                and significant resources that many organizations simply don't have.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                CyberGuard was born from the belief that every organization deserves access to 
                enterprise-grade security monitoring, regardless of their size, location, or 
                infrastructure constraints.
              </p>
              <div className="flex items-center text-cyber-blue">
                <Heart className="w-5 h-5 mr-2" />
                <span className="font-semibold">Built with passion for security</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-cyber-green" />
                Why We Built This
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">Air-gapped networks</strong> need security monitoring too
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">Small organizations</strong> deserve enterprise-grade security
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">Zero dependencies</strong> for maximum portability
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyber-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong className="text-white">Privacy-first</strong> approach with offline operation
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-xl hover:cyber-glow transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${value.color.replace('text-', 'bg-').replace('text-', '')}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cyber-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Security experts, engineers, and researchers united by a common goal: 
              making cybersecurity accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl hover:cyber-glow transition-all duration-300 text-center"
              >
                <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-cyber-blue font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition and milestones that validate our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-xl hover:cyber-glow transition-all duration-300 text-center"
                >
                  <Icon className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
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
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the future of accessible cybersecurity. Try CyberGuard today and 
              experience the difference that security-first design makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/dashboard"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 flex items-center justify-center"
              >
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

