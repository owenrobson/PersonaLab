import React from 'react';
import { Save } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">AI Persona Generation</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Persona Generation Mode
                  </label>
                  <div className="mt-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="auto"
                          name="generation-mode"
                          type="radio"
                          defaultChecked
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="auto" className="ml-3 block text-sm font-medium text-gray-700">
                          Automatic (AI chooses optimal clustering)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="manual"
                          name="generation-mode"
                          type="radio"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="manual" className="ml-3 block text-sm font-medium text-gray-700">
                          Manual (Define your own parameters)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="persona-count" className="block text-sm font-medium text-gray-700">
                    Default Number of Personas to Generate
                  </label>
                  <select
                    id="persona-count"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option>3</option>
                    <option>5</option>
                    <option>7</option>
                    <option>10</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Data Processing Options
                  </label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-start">
                      <div className="h-5 flex items-center">
                        <input
                          id="clean-data"
                          name="clean-data"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="clean-data" className="font-medium text-gray-700">
                          Auto-clean data
                        </label>
                        <p className="text-gray-500">Automatically remove duplicates and normalize data before processing.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-5 flex items-center">
                        <input
                          id="merge-similar"
                          name="merge-similar"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="merge-similar" className="font-medium text-gray-700">
                          Merge similar personas
                        </label>
                        <p className="text-gray-500">Combine personas with high similarity to avoid duplication.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">API Integrations</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="api-key" className="block text-sm font-medium text-gray-700">
                    OpenAI API Key
                  </label>
                  <input
                    type="password"
                    id="api-key"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="sk-xxxxxxxxxxxxxxxxxxxxx"
                  />
                  <p className="mt-1 text-xs text-gray-500">Required for AI-generated persona creation.</p>
                </div>
                
                <div>
                  <label htmlFor="crm-api" className="block text-sm font-medium text-gray-700">
                    CRM API Key
                  </label>
                  <input
                    type="password"
                    id="crm-api"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your CRM API key"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;