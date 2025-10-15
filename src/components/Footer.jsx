import { motion } from 'framer-motion';
import { 
  Shield, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@cyberguard.com', color: 'hover:text-cyber-blue' },
  ];

  const quickLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Architecture', href: '/architecture' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Documentation', href: '#' },
  ];

  return (
    <footer className="bg-cyber-navy/50 border-t border-cyber-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-mono text-white">
                CyberGuard
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Advanced portable log analysis and cybersecurity monitoring tool for 
              isolated networks. Protect your infrastructure anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`p-2 rounded-lg bg-cyber-dark/50 text-gray-400 transition-colors duration-300 ${link.color}`}
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyber-blue" />
                <span className="text-sm">contact@cyberguard.com</span>
              </div>
              <div className="text-sm text-gray-400">
                <p>24/7 Security Monitoring</p>
                <p>Enterprise Support Available</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-cyber-blue/20 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} CyberGuard. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-gray-500">
                Built with React & Tailwind CSS
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                <span className="text-xs text-cyber-green">System Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

