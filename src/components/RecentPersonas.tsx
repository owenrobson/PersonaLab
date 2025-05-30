import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { mockPersonas } from '../data/mockData';

const RecentPersonas: React.FC = () => {
  // Get the 5 most recent personas
  const recentPersonas = mockPersonas.slice(0, 5);
  
  return (
    <div className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {recentPersonas.map((persona) => (
          <li key={persona.id} className="py-4">
            <Link to={`/personas/${persona.id}`} className="block hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={persona.avatar} 
                    alt={persona.name} 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{persona.name}</p>
                  <p className="text-sm text-gray-500 truncate">{persona.jobTitle}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-end">
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="text-sm font-medium text-gray-900">{persona.createdAt}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPersonas;