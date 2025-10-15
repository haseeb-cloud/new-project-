import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  Shield, 
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  EyeOff,
  RefreshCw,
  TrendingUp,
  Clock,
  Users,
  Server
} from 'lucide-react';
import LogTable from '../components/LogTable';
import AlertCard from '../components/AlertCard';
import RuleForm from '../components/RuleForm';
import ChartPanel from '../components/ChartPanel';
import StatsCard from '../components/StatsCard';

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [rules, setRules] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [showRuleForm, setShowRuleForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // Load mock data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [logsData, alertsData, rulesData] = await Promise.all([
          import('../data/logs.json'),
          import('../data/alerts.json'),
          import('../data/rules.json')
        ]);
        setLogs(logsData.default);
        setAlerts(alertsData.default);
        setRules(rulesData.default);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const stats = [
    {
      title: 'Total Logs',
      value: logs.length.toLocaleString(),
      icon: Activity,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      change: '+12%'
    },
    {
      title: 'Active Alerts',
      value: alerts.filter(alert => alert.status === 'active').length,
      icon: AlertTriangle,
      color: 'text-cyber-red',
      bgColor: 'bg-cyber-red/10',
      change: '+3'
    },
    {
      title: 'Threats Blocked',
      value: '1,247',
      icon: Shield,
      color: 'text-cyber-green',
      bgColor: 'bg-cyber-green/10',
      change: '+8%'
    },
    {
      title: 'System Uptime',
      value: '99.9%',
      icon: Server,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      change: '+0.1%'
    }
  ];

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.sourceIP.includes(searchTerm) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === 'all' || log.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  const handleAddRule = (newRule) => {
    const rule = {
      ...newRule,
      id: rules.length + 1,
      createdAt: new Date().toISOString(),
      enabled: true
    };
    setRules([...rules, rule]);
    setShowRuleForm(false);
  };

  const handleExport = () => {
    const csvContent = [
      ['Timestamp', 'Source IP', 'Event', 'Severity', 'User', 'Status'],
      ...filteredLogs.map(log => [
        log.timestamp,
        log.sourceIP,
        log.event,
        log.severity,
        log.user,
        log.status
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'security-logs.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-scan w-64 h-1 bg-cyber-blue mb-8"></div>
          <h2 className="text-2xl font-mono text-cyber-blue mb-4">Loading Security Dashboard...</h2>
          <div className="flex space-x-2 justify-center">
            <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Security Dashboard
              </h1>
              <p className="text-gray-400">
                Real-time monitoring and threat detection
              </p>
            </div>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 glass text-white rounded-lg hover:cyber-glow transition-all duration-300 flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-cyber-blue text-white rounded-lg hover:bg-cyber-blue/80 transition-all duration-300 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search logs, IPs, users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300"
              />
            </div>
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="px-4 py-3 glass text-white rounded-lg focus:outline-none focus:cyber-glow transition-all duration-300"
            >
              <option value="all">All Severities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
            <button
              onClick={() => setShowRuleForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-white rounded-lg hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300 flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Rule
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <StatsCard key={stat.title} stat={stat} index={index} />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            {/* Log Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LogTable logs={filteredLogs} />
            </motion.div>

            {/* Charts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ChartPanel logs={logs} alerts={alerts} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Alerts Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-cyber-red" />
                    Active Alerts
                  </h3>
                  <span className="px-2 py-1 bg-cyber-red/20 text-cyber-red text-xs rounded-full">
                    {alerts.filter(alert => alert.status === 'active').length}
                  </span>
                </div>
                <div className="space-y-4">
                  {alerts.slice(0, 5).map((alert, index) => (
                    <AlertCard key={alert.id} alert={alert} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Rules Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-cyber-blue" />
                    Detection Rules
                  </h3>
                  <span className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded-full">
                    {rules.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {rules.slice(0, 4).map((rule, index) => (
                    <div key={rule.id} className="p-3 bg-cyber-navy/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-white">{rule.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          rule.enabled ? 'bg-cyber-green/20 text-cyber-green' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {rule.enabled ? 'Active' : 'Disabled'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{rule.eventType}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rule Form Modal */}
      {showRuleForm && (
        <RuleForm
          onClose={() => setShowRuleForm(false)}
          onSubmit={handleAddRule}
        />
      )}
    </div>
  );
};

export default Dashboard;

