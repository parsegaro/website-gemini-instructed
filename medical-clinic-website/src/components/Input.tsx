import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string; // Added name attribute for form handling
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  errorMessage,
  className = '',
  type = 'text', // Default to type="text"
  ...props
}) => {
  const baseInputClasses =
    'w-full p-3 rounded-lg border bg-surface focus:outline-none';

  const normalStateClasses =
    'border-border focus:border-primary focus:ring-2 focus:ring-primary-light';

  const errorStateClasses =
    'border-error focus:border-error focus:ring-2 focus:ring-error'; // Added focus style for error state too

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={name} // Use name for htmlFor, ensure id on input matches
        className="block text-sm font-semibold text-text-body mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={name} // id should match label's htmlFor
        name={name}
        className={`${baseInputClasses} ${
          errorMessage ? errorStateClasses : normalStateClasses
        }`}
        {...props}
      />
      {errorMessage && (
        <p className="text-xs text-error mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
