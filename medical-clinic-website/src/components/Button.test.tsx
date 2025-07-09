import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers like .toHaveClass
import Button from './Button';

describe('Button Component', () => {
  test('renders with default (primary) variant', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-primary text-white');
  });

  test('renders with primary variant explicitly', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /primary button/i });
    expect(buttonElement).toHaveClass('bg-primary text-white');
  });

  test('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /secondary button/i });
    expect(buttonElement).toHaveClass('bg-transparent border border-border text-text-body');
  });

  test('applies additional className', () => {
    render(<Button className="extra-class">Styled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /styled button/i });
    expect(buttonElement).toHaveClass('extra-class');
  });

  test('passes through other HTML button attributes', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();
  });

  test('renders children correctly', () => {
    render(<Button><span>Complex Child</span></Button>);
    expect(screen.getByText(/complex child/i)).toBeInTheDocument();
  });
});
