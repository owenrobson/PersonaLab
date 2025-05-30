import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload, 
  Users, 
  Settings, 
  X, 
  Brain
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform md:translate-x-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">PersonaForge</span>
          </div>
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-5 px-2 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <LayoutDashboard 
              className="mr-4 h-6 w-6 flex-shrink-0" 
              aria-hidden="true" 
            />
            Dashboard
          </NavLink>

          <NavLink
            to="/import"
            className={({ isActive }) =>
              `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Upload 
              className="mr-4 h-6 w-6 flex-shrink-0" 
              aria-hidden="true" 
            />
            Import Data
          </NavLink>

          <NavLink
            to="/personas"
            className={({ isActive }) =>
              `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Users 
              className="mr-4 h-6 w-6 flex-shrink-0" 
              aria-hidden="true" 
            />
            Persona Library
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Settings 
              className="mr-4 h-6 w-6 flex-shrink-0" 
              aria-hidden="true" 
            />
            Settings
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;