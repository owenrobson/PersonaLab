import React, { useState } from 'react';
import { Database, ArrowRight } from 'lucide-react';

interface CrmIntegrationFormProps {
  onComplete: (connection: any) => void;
}

const CrmIntegrationForm: React.FC<CrmIntegrationFormProps> = ({ onComplete }) => {
  const [selectedCrm, setSelectedCrm] = useState('');
  const [credentials, setCredentials] = useState({
    apiKey: '',
    domain: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ type: selectedCrm, ...credentials });
  };

  const crmSystems = [
    {
      id: 'salesforce',
      name: 'Salesforce',
      icon: 'https://images.pexels.com/photos/5475765/pexels-photo-5475765.jpeg'
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      icon: 'https://images.pexels.com/photos/5475755/pexels-photo-5475755.jpeg'
    },
    {
      id: 'zoho',
      name: 'Zoho CRM',
      icon: 'https://images.pexels.com/photos/5475734/pexels-photo-5475734.jpeg'
    }
  ];

  return (
    <div className="space-y-6">
      {!selectedCrm ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {crmSystems.map((crm) => (
            <button
              key={crm.id}
              type="button"
              onClick={() => setSelectedCrm(crm.id)}
              className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <img src={crm.icon} alt={crm.name} className="h-12 w-12 object-contain mb-3" />
              <span className="text-sm font-medium text-gray-900">{crm.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Database className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-medium text-gray-900">
                Connect to {crmSystems.find(crm => crm.id === selectedCrm)?.name}
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                  API Key
                </label>
                <input
                  type="password"
                  id="apiKey"
                  value={credentials.apiKey}
                  onChange={(e) => setCredentials(prev => ({ ...prev, apiKey: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                  Domain
                </label>
                <input
                  type="text"
                  id="domain"
                  value={credentials.domain}
                  onChange={(e) => setCredentials(prev => ({ ...prev, domain: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Admin Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setSelectedCrm('')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Connect
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CrmIntegrationForm;