import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  X, 
  ArrowRight, 
  Shield, 
  Activity, 
  Settings,
  Eye,
  CheckCircle
} from 'lucide-react';

const QuickStartGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    {
      title: 'Welcome to CyberGuard',
      description: 'Your portable cybersecurity monitoring solution',
      icon: Shield,
      content: 'This tool helps you analyze logs, detect threats, and monitor security events in isolated networks.',
      action: 'Get Started'
    },
    {
      title: 'Explore the Dashboard',
      description: 'Interactive security monitoring interface',
      icon: Activity,
      content: 'Navigate to the Dashboard to see real-time logs, alerts, and threat detection in action.',
      action: 'View Dashboard'
    },
    {
      title: 'Create Detection Rules',
      description: 'Build custom security rules',
      icon: Settings,
      content: 'Use the Rule Builder to create custom detection patterns and automated responses.',
      action: 'Build Rules'
    },
    {
      title: 'Monitor & Analyze',
      description: 'Real-time security monitoring',
      icon: Eye,
      content: 'Watch for threats, analyze patterns, and export reports for further investigation.',
      action: 'Start Monitoring'
    }
  ];

  useEffect(() => {
    // Show guide after 3 seconds if not completed
    const timer = setTimeout(() => {
      const hasSeenGuide = localStorage.getItem('cyberguard-guide-seen');
      if (!hasSeenGuide) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      localStorage.setItem('cyberguard-guide-seen', 'true');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const closeGuide = () => {
    setIsOpen(false);
    localStorage.setItem('cyberguard-guide-seen', 'true');
  };

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeGuide}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass p-8 rounded-2xl w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!isCompleted ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Play className="w-6 h-6 mr-3 text-cyber-blue" />
                    Quick Start Guide
                  </h2>
                  <button
                    onClick={closeGuide}
                    className="p-2 hover:bg-cyber-navy/50 rounded-lg transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {currentStepData.title}
                  </h3>
                  <p className="text-cyber-blue font-medium mb-4">
                    {currentStepData.description}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {currentStepData.content}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Step {currentStep + 1} of {steps.length}</span>
                    <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-cyber-navy/50 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyber-blue to-cyber-green h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-3 glass text-white font-semibold rounded-lg hover:bg-cyber-navy/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 flex items-center"
                  >
                    {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-cyber-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-cyber-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Setup Complete!
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  You're all set to start using CyberGuard. The dashboard is ready for monitoring, 
                  and you can begin creating custom detection rules right away.
                </p>
                <button
                  onClick={closeGuide}
                  className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-green text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300"
                >
                  Start Monitoring
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickStartGuide;

