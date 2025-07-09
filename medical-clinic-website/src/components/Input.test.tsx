import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input Component', () => {
  const defaultProps = {
    label: 'Test Label',
    name: 'testInput',
  };

  test('renders label and input field', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /test label/i })).toBeInTheDocument();
  });

  test('applies default input classes', () => {
    render(<Input {...defaultProps} />);
    const inputElement = screen.getByRole('textbox', { name: /test label/i });
    expect(inputElement).toHaveClass('border-border focus:border-primary');
  });

  test('displays error message and applies error classes when errorMessage is provided', () => {
    const errorMessage = 'This field is required';
    render(<Input {...defaultProps} errorMessage={errorMessage} />);

    const inputElement = screen.getByRole('textbox', { name: /test label/i });
    expect(inputElement).toHaveClass('border-error focus:border-error');

    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('text-error text-xs');
  });

  test('does not display error message when errorMessage is not provided', () => {
    render(<Input {...defaultProps} />);
    const errorMessageElement = screen.queryByText(/this field is required/i); // Example error text
    expect(errorMessageElement).not.toBeInTheDocument();
  });

  test('applies additional className to the wrapper div', () => {
    // The className prop in Input component is applied to the wrapper div
    render(<Input {...defaultProps} className="extra-input-class" />);
    // Check if the parent div of the label has the class.
    // This is a bit indirect; ideally, the className would be on a more specific testable element or use test IDs.
    const labelElement = screen.getByText('Test Label');
    expect(labelElement.parentElement).toHaveClass('extra-input-class');
  });

  test('passes through other HTML input attributes', () => {
    render(<Input {...defaultProps} placeholder="Enter text..." type="email" />);
    const inputElement = screen.getByRole('textbox', { name: /test label/i });
    expect(inputElement).toHaveAttribute('placeholder', 'Enter text...');
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  test('uses the name prop for id and htmlFor attributes', () => {
    render(<Input {...defaultProps} name="customName" />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toHaveAttribute('for', 'customName');
    const inputElement = screen.getByRole('textbox', { name: /test label/i });
    expect(inputElement).toHaveAttribute('id', 'customName');
  });
});
