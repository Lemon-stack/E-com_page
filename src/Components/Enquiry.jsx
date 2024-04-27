import React from 'react';
import queryString from 'query-string';

const WhatsAppButton = () => {
  // Function to handle button click
  const handleWhatsAppClick = () => {
    // Phone number to send WhatsApp message
    const phoneNumber = '1234567890'; // Replace this with your phone number

    // Message for WhatsApp
    const message = 'Hello from my React App!'; // Customize the message

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?${queryString.stringify({ text: message })}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleWhatsAppClick}>
      Send Message on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
