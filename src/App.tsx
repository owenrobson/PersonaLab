import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ImportData from './pages/ImportData';
import PersonaLibrary from './pages/PersonaLibrary';
import PersonaDetails from './pages/PersonaDetails';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/import" element={<ImportData />} />
          <Route path="/personas" element={<PersonaLibrary />} />
          <Route path="/personas/:id" element={<PersonaDetails />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;