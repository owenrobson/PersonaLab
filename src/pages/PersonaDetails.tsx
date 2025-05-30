import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  User,
  BarChart,
  Heart,
  AlertTriangle,
  Target,
  Lightbulb,
  DollarSign,
  Share2,
  Download,
  Edit,
} from 'lucide-react';
import { mockPersonas } from '../data/mockData';

const PersonaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  // Find the persona with the matching ID
  const persona = mockPersonas.find(p => p.id === id);
  
  if (!persona) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Persona Not Found</h2>
          <p className="text-gray-500">The persona you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
          <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 flex justify-center">
            <img
              src={persona.avatar}
              alt={persona.name}
              className="h-24 w-24 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
        <div className="pt-16 pb-6 px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">{persona.name}</h1>
          <p className="text-gray-600">{persona.jobTitle}</p>
          <div className="mt-2 flex justify-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {persona.industry}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {persona.age} years old
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
              {persona.location}
            </span>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </button>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'demographics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('demographics')}
            >
              Demographics
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'psychographics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('psychographics')}
            >
              Psychographics
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'journey'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('journey')}
            >
              Journey Map
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-3">Bio</h2>
                <p className="text-gray-600 leading-relaxed">
                  {persona.bio}
                </p>
              </div>
              
              {/* Key Characteristics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 rounded-md p-2">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Goals</h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        {persona.goals.map((goal, index) => (
                          <li key={index} className="flex items-start">
                            <span className="h-5 flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
                            </span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-purple-100 rounded-md p-2">
                        <Heart className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Needs</h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        {persona.needs.map((need, index) => (
                          <li key={index} className="flex items-start">
                            <span className="h-5 flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mr-2"></span>
                            </span>
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-100 rounded-md p-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Pain Points</h3>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        {persona.painPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="h-5 flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Behaviors and Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Behaviors</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <ul className="space-y-3">
                      {persona.behaviors.map((behavior, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Lightbulb className="h-5 w-5 text-blue-600" />
                          </div>
                          <p className="ml-3 text-sm text-gray-600">{behavior}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Values</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <ul className="space-y-3">
                      {persona.values.map((value, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0">
                            <DollarSign className="h-5 w-5 text-green-600" />
                          </div>
                          <p className="ml-3 text-sm text-gray-600">{value}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'demographics' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Demographics</h2>
              <p className="text-gray-600">Detailed demographic information will be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'psychographics' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Psychographics</h2>
              <p className="text-gray-600">Detailed psychographic information will be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'journey' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Journey Map</h2>
              <p className="text-gray-600">Customer journey map will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonaDetails;