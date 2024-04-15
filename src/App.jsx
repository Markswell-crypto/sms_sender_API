import React, { useState } from 'react';
import axios from 'axios';

const SmsForm = () => {
  const [message, setMessage] = useState('');
  const [destination, setDestination] = useState('');
  const [source, setSource] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const apiUrl = 'https://api.smsleopard.com/v1/sms/send';
      const apiKey = 'your_api_key';
      const apiSecret = 'your_api_secret';
  
      const url = `${apiUrl}?username=${apiKey}&password=${apiSecret}&message=${message}&destination=${destination}&source=${source}`;
  
      const response = await axios.get(url);
  
      if (response.data.success) {
        setSuccessMessage('SMS sent successfully!');
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.message || 'Failed to send SMS. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to send SMS. Please try again.');
      setSuccessMessage('');
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
      <h1 className="text-xl font-bold mb-4">Send SMS</h1>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
          <input
            type="text"
            id="source"
            name="source"
            value="SMS_Leopard" // Set default value here
            disabled // Make it uneditable
            className="mt-1 p-2 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send SMS</button>
      </form>
    </div>
  );
};

export default SmsForm;
