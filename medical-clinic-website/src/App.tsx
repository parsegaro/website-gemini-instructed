import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
// The default App.css can be removed or modified if not used for general layout
// import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-surface shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-xl font-semibold text-primary hover:text-primary-dark">
                Medical Clinic
              </Link>
              <div className="space-x-4">
                <Link to="/" className="text-text-body hover:text-primary">Home</Link>
                <Link to="/services" className="text-text-body hover:text-primary">Services</Link>
                <Link to="/about" className="text-text-body hover:text-primary">About Us</Link>
                <Link to="/contact" className="text-text-body hover:text-primary">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="bg-surface mt-auto p-4 text-center text-text-body border-t border-border">
          © {new Date().getFullYear()} Medical Clinic. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
