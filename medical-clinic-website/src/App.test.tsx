import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Simplified Mock for react-router-dom
jest.mock('react-router-dom', () => ({
  // Provide specific mocks for what's used in App.tsx
  // If other exports are needed by tested components, they'd need to be added here.
  __esModule: true, // This is important for ES modules
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Route: ({ element }: { element: React.ReactNode }) => <>{element}</>, // Render the element to test page components are 'mounted'
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => <a href={to}>{children}</a>,
  // Add any other exports from react-router-dom that App.tsx or its children might use directly
  // For example, if useNavigate or useParams were used, they'd need mock implementations:
  // useNavigate: () => jest.fn(),
  // useParams: () => ({}),
}));

describe('App Component', () => {
  test('renders the main application layout including navigation and footer', () => {
    render(<App />);

    // Check for navigation presence (e.g., the brand name)
    expect(screen.getByText('Medical Clinic')).toBeInTheDocument();

    // Check for one of the links in the navigation
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();

    // Check for the main content area (it will render the HomePage due to mock Route behavior)
    expect(screen.getByRole('heading', { name: /home page/i })).toBeInTheDocument();

    // Check for footer presence
    expect(screen.getByText(/Medical Clinic. All rights reserved./i)).toBeInTheDocument();
  });
});
