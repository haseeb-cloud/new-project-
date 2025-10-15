import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Activity,
  Shield,
  AlertTriangle
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const ChartPanel = ({ logs, alerts }) => {
  // Process data for charts
  const severityCounts = logs.reduce((acc, log) => {
    acc[log.severity] = (acc[log.severity] || 0) + 1;
    return acc;
  }, {});

  const eventCounts = logs.reduce((acc, log) => {
    acc[log.event] = (acc[log.event] || 0) + 1;
    return acc;
  }, {});

  const hourlyData = logs.reduce((acc, log) => {
    const hour = new Date(log.timestamp).getHours();
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {});

  // Convert to chart data
  const severityData = Object.entries(severityCounts).map(([severity, count]) => ({
    severity: severity.toUpperCase(),
    count,
    fill: getSeverityColor(severity)
  }));

  const eventData = Object.entries(eventCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([event, count]) => ({
      event: event.length > 15 ? event.substring(0, 15) + '...' : event,
      count
    }));

  const hourlyChartData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
    count: hourlyData[i] || 0
  }));

  const pieData = severityData.map(item => ({
    name: item.severity,
    value: item.count,
    color: item.fill
  }));

  function getSeverityColor(severity) {
    switch (severity) {
      case 'critical': return '#ff0040';
      case 'high': return '#ffaa00';
      case 'medium': return '#00d4ff';
      case 'low': return '#00ff88';
      default: return '#8b5cf6';
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass p-3 rounded-lg border border-cyber-blue/20">
          <p className="text-white font-medium">{label}</p>
          <p className="text-cyber-blue">
            Count: <span className="text-white">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Severity Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-cyber-blue" />
              Severity Distribution
            </h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyber-green" />
              <span className="text-sm text-gray-400">Last 24h</span>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={severityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="severity" 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Event Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-cyber-green" />
              Top Events
            </h3>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-cyber-blue" />
              <span className="text-sm text-gray-400">Real-time</span>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={eventData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  type="number"
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis 
                  dataKey="event" 
                  type="category"
                  stroke="#9CA3AF"
                  fontSize={12}
                  width={120}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#00d4ff" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hourly Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <Activity className="w-5 h-5 mr-2 text-cyber-purple" />
              Hourly Activity
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="hour" 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#00d4ff" 
                  strokeWidth={2}
                  dot={{ fill: '#00d4ff', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#00ff88' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Threat Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-cyber-red" />
              Threat Overview
            </h3>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-cyber-red/20 text-cyber-red text-xs rounded-full">
                {alerts.filter(a => a.status === 'active').length} Active
              </span>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="glass p-3 rounded-lg border border-cyber-blue/20">
                          <p className="text-white font-medium">{payload[0].name}</p>
                          <p className="text-cyber-blue">
                            Count: <span className="text-white">{payload[0].value}</span>
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChartPanel;

