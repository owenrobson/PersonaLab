import React, { useState } from 'react';
import { Upload, File, Database, PieChart } from 'lucide-react';

const ImportData: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('upload');
  const [dragOver, setDragOver] = useState<boolean>(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };
  
  const handleDragLeave = () => {
    setDragOver(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    // Handle file drop logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Import Data</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'upload'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('upload')}
          >
            File Upload
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'crm'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('crm')}
          >
            CRM Integration
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'survey'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('survey')}
          >
            Survey Results
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'upload' && (
            <div>
              <div 
                className={`border-2 border-dashed rounded-lg p-12 text-center ${
                  dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Drop your files here
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    or click to browse from your computer
                  </p>
                  <div>
                    <label
                      htmlFor="file-upload"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      Choose File
                    </label>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Supported file types:</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-md">
                    <File className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">CSV</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-md">
                    <File className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Excel</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-md">
                    <File className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-gray-700">JSON</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'crm' && (
            <div>
              <div className="text-center py-8">
                <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Connect your CRM
                </h3>
                <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                  Connect to your CRM system to import customer data and generate detailed personas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <button className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                  <img src="https://images.pexels.com/photos/5475765/pexels-photo-5475765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Salesforce" className="h-12 w-12 object-contain mb-3" />
                  <span className="text-sm font-medium text-gray-900">Salesforce</span>
                </button>
                <button className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                  <img src="https://images.pexels.com/photos/5475755/pexels-photo-5475755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="HubSpot" className="h-12 w-12 object-contain mb-3" />
                  <span className="text-sm font-medium text-gray-900">HubSpot</span>
                </button>
                <button className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                  <img src="https://images.pexels.com/photos/5475734/pexels-photo-5475734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Zendesk" className="h-12 w-12 object-contain mb-3" />
                  <span className="text-sm font-medium text-gray-900">Zendesk</span>
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'survey' && (
            <div>
              <div className="text-center py-8">
                <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Import Survey Results
                </h3>
                <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                  Connect to your survey platform or upload survey results to generate personas based on customer feedback.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <button className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                  <img src="https://images.pexels.com/photos/5475775/pexels-photo-5475775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="SurveyMonkey" className="h-12 w-12 object-contain mb-3" />
                  <span className="text-sm font-medium text-gray-900">SurveyMonkey</span>
                </button>
                <button className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                  <img src="https://images.pexels.com/photos/5475735/pexels-photo-5475735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Google Forms" className="h-12 w-12 object-contain mb-3" />
                  <span className="text-sm font-medium text-gray-900">Google Forms</span>
                </button>
                <button className="flex flex-col items-center p-6 border border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                  <img src="https://images.pexels.com/photos/5475756/pexels-photo-5475756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Typeform" className="h-12 w-12 object-contain mb-3" />
                  <span className="text-sm font-medium text-gray-900">Typeform</span>
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Import & Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportData;