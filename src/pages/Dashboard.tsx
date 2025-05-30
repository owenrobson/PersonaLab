import React from 'react';
import { BarChart, PieChart, Users, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import RecentPersonas from '../components/RecentPersonas';
import DataSourceChart from '../components/DataSourceChart';
import PersonaTypeDistribution from '../components/PersonaTypeDistribution';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <button 
          onClick={() => navigate('/import')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate New Persona
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Personas" 
          value="24" 
          change="+4" 
          timeframe="from last month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <StatCard 
          title="Data Sources" 
          value="7" 
          change="+2" 
          timeframe="from last month"
          icon={<BarChart className="h-6 w-6 text-purple-600" />}
        />
        <StatCard 
          title="Customer Segments" 
          value="12" 
          change="+3" 
          timeframe="from last month"
          icon={<PieChart className="h-6 w-6 text-teal-600" />}
        />
        <StatCard 
          title="Industries" 
          value="5" 
          change="+1" 
          timeframe="from last month"
          icon={<Briefcase className="h-6 w-6 text-amber-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Data Source Distribution</h2>
          <div className="h-64">
            <DataSourceChart />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Persona Type Distribution</h2>
          <div className="h-64">
            <PersonaTypeDistribution />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Recent Personas</h2>
          <a href="/personas" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View all
          </a>
        </div>
        <RecentPersonas />
      </div>
    </div>
  );
};

export default Dashboard;