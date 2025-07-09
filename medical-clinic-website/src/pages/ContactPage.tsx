import React from 'react';
// Example of importing one of the new components
// import Button from '../components/Button';
// import Input from '../components/Input';

const ContactPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p>Contact form and details will go here.</p>
      {/*
      Example usage of components:
      <form>
        <Input label="Your Name" name="name" type="text" placeholder="John Doe" />
        <Input label="Your Email" name="email" type="email" placeholder="john.doe@example.com" />
        <Button variant="primary" type="submit">Send Message</Button>
      </form>
      */}
    </div>
  );
};

export default ContactPage;
