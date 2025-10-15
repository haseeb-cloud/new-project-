import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ stat, index }) => {
  const Icon = stat.icon;
  const isPositive = stat.change.startsWith('+');
  const isNegative = stat.change.startsWith('-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass p-6 rounded-xl hover:cyber-glow transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${stat.color}`} />
        </div>
        <div className="flex items-center space-x-1">
          {isPositive && <TrendingUp className="w-4 h-4 text-cyber-green" />}
          {isNegative && <TrendingDown className="w-4 h-4 text-cyber-red" />}
          <span className={`text-sm font-medium ${
            isPositive ? 'text-cyber-green' : 
            isNegative ? 'text-cyber-red' : 
            'text-gray-400'
          }`}>
            {stat.change}
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-1">
          {stat.value}
        </h3>
        <p className="text-gray-400 text-sm">
          {stat.title}
        </p>
      </div>

      {/* Animated background effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-blue/5 to-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default StatsCard;

