import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
  Shield,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const schema = yup.object({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().required('Email is required').email('Invalid email address'),
    company: yup.string(),
    subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
    priority: yup.string().required('Priority is required')
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@cyberguard.com', 'support@cyberguard.com'],
      color: 'text-cyber-blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'text-cyber-green'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Security Street', 'Cyber City, CC 12345'],
      color: 'text-cyber-purple'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 9AM-6PM PST', '24/7 Emergency Support'],
      color: 'text-cyber-yellow'
    }
  ];

  const priorities = [
    { value: 'low', label: 'General Inquiry', color: 'text-cyber-green' },
    { value: 'medium', label: 'Technical Support', color: 'text-cyber-blue' },
    { value: 'high', label: 'Security Incident', color: 'text-cyber-yellow' },
    { value: 'critical', label: 'Emergency', color: 'text-cyber-red' }
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
              Get in <span className="text-cyber-blue">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Have questions about CyberGuard? Need technical support? 
              We're here to help you secure your network.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center mb-8">
                <MessageSquare className="w-6 h-6 mr-3 text-cyber-blue" />
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-cyber-green/10 border border-cyber-green/30 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-cyber-green mr-3" />
                  <span className="text-cyber-green">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-cyber-red/10 border border-cyber-red/30 rounded-lg flex items-center"
                >
                  <AlertCircle className="w-5 h-5 text-cyber-red mr-3" />
                  <span className="text-cyber-red">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company and Priority */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      className="w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Priority *
                    </label>
                    <select
                      {...register('priority')}
                      className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                        errors.priority ? 'border-red-500' : ''
                      }`}
                    >
                      <option value="">Select priority</option>
                      {priorities.map(priority => (
                        <option key={priority.value} value={priority.value}>
                          {priority.label}
                        </option>
                      ))}
                    </select>
                    {errors.priority && (
                      <p className="text-red-400 text-sm mt-1">{errors.priority.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                    placeholder="Brief description of your inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className={`w-full px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Please provide details about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyber-blue" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-4">
                      <Icon className={`w-5 h-5 ${info.color} mt-1 flex-shrink-0`} />
                      <div>
                        <h4 className="text-white font-medium mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-400 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-cyber-green" />
                Quick Links
              </h3>
              <div className="space-y-4">
                <a
                  href="/dashboard"
                  className="block p-3 bg-cyber-navy/50 rounded-lg hover:bg-cyber-blue/20 transition-colors duration-300"
                >
                  <div className="text-white font-medium">Try Demo</div>
                  <div className="text-gray-400 text-sm">Experience our dashboard</div>
                </a>
                <a
                  href="/features"
                  className="block p-3 bg-cyber-navy/50 rounded-lg hover:bg-cyber-blue/20 transition-colors duration-300"
                >
                  <div className="text-white font-medium">View Features</div>
                  <div className="text-gray-400 text-sm">Explore capabilities</div>
                </a>
                <a
                  href="/architecture"
                  className="block p-3 bg-cyber-navy/50 rounded-lg hover:bg-cyber-blue/20 transition-colors duration-300"
                >
                  <div className="text-white font-medium">System Architecture</div>
                  <div className="text-gray-400 text-sm">Technical details</div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyber-purple" />
                Response Times
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">General Inquiry</span>
                  <span className="text-white">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technical Support</span>
                  <span className="text-white">8 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Incident</span>
                  <span className="text-cyber-yellow">2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency</span>
                  <span className="text-cyber-red">30 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

