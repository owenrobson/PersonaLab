import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, Database, PieChart, ArrowRight, Loader2 } from 'lucide-react';
import FileUploadForm from '../components/FileUploadForm';
import CrmIntegrationForm from '../components/CrmIntegrationForm';

const GeneratePersona: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    dataSource: '',
    sourceData: null,
    industry: '',
    targetAudience: '',
    businessGoals: '',
    keyAttributes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUploadComplete = (files: File[]) => {
    setFormData(prev => ({
      ...prev,
      sourceData: files
    }));
    setStep(2);
  };

  const handleCrmComplete = (connection: any) => {
    setFormData(prev => ({
      ...prev,
      sourceData: connection
    }));
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsGenerating(false);
    navigate('/personas');
  };

  const renderDataSourceContent = () => {
    if (formData.dataSource === 'file') {
      return <FileUploadForm onComplete={handleFileUploadComplete} />;
    }
    if (formData.dataSource === 'crm') {
      return <CrmIntegrationForm onComplete={handleCrmComplete} />;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, dataSource: 'file' }))}
          className="flex flex-col items-center p-6 border-2 rounded-lg hover:border-blue-500 hover:shadow-md transition-all border-gray-200"
        >
          <Upload className="h-8 w-8 text-blue-600 mb-3" />
          <span className="text-sm font-medium text-gray-900">Upload Files</span>
        </button>
        
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, dataSource: 'crm' }))}
          className="flex flex-col items-center p-6 border-2 rounded-lg hover:border-blue-500 hover:shadow-md transition-all border-gray-200"
        >
          <Database className="h-8 w-8 text-purple-600 mb-3" />
          <span className="text-sm font-medium text-gray-900">CRM Data</span>
        </button>
        
        <button
          type="button"
          onClick={() => {
            setFormData(prev => ({ ...prev, dataSource: 'manual' }));
            setStep(2);
          }}
          className="flex flex-col items-center p-6 border-2 rounded-lg hover:border-blue-500 hover:shadow-md transition-all border-gray-200"
        >
          <FileText className="h-8 w-8 text-teal-600 mb-3" />
          <span className="text-sm font-medium text-gray-900">Manual Input</span>
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Generate New Persona</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <div className={`ml-2 text-sm font-medium ${
                step >= 1 ? 'text-blue-600' : 'text-gray-500'
              }`}>
                Data Source
              </div>
            </div>
            <div className="h-0.5 w-12 bg-gray-200" />
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <div className={`ml-2 text-sm font-medium ${
                step >= 2 ? 'text-blue-600' : 'text-gray-500'
              }`}>
                Parameters
              </div>
            </div>
            <div className="h-0.5 w-12 bg-gray-200" />
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <div className={`ml-2 text-sm font-medium ${
                step >= 3 ? 'text-blue-600' : 'text-gray-500'
              }`}>
                Generate
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6">
            {step === 1 && (
              <div className="space-y-6 max-w-2xl mx-auto">
                <h2 className="text-lg font-medium text-gray-900">Select Data Source</h2>
                {renderDataSourceContent()}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 max-w-2xl mx-auto">
                <h2 className="text-lg font-medium text-gray-900">Define Parameters</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      required
                    >
                      <option value="">Select an industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="education">Education</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">
                      Target Audience Description
                    </label>
                    <textarea
                      id="targetAudience"
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Describe your target audience..."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="businessGoals" className="block text-sm font-medium text-gray-700">
                      Business Goals
                    </label>
                    <textarea
                      id="businessGoals"
                      name="businessGoals"
                      value={formData.businessGoals}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="What are your business goals?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="keyAttributes" className="block text-sm font-medium text-gray-700">
                      Key Attributes to Consider
                    </label>
                    <textarea
                      id="keyAttributes"
                      name="keyAttributes"
                      value={formData.keyAttributes}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="What key attributes should be considered?"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 max-w-2xl mx-auto text-center">
                <div className="py-8">
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                      <h2 className="text-lg font-medium text-gray-900 mb-2">
                        Generating Personas...
                      </h2>
                      <p className="text-sm text-gray-500">
                        This may take a few moments. We're analyzing your data and creating detailed personas.
                      </p>
                    </>
                  ) : (
                    <>
                      <PieChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h2 className="text-lg font-medium text-gray-900 mb-2">
                        Ready to Generate
                      </h2>
                      <p className="text-sm text-gray-500">
                        Click the button below to start generating your personas.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-auto"
                disabled={!formData.sourceData && step === 1}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isGenerating}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating...' : 'Generate Personas'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneratePersona;