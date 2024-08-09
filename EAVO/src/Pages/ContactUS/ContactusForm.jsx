import { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    postalCode: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/contact', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('There was an error sending your message.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-200 rounded-2xl">
      <h1 className="text-center text-3xl font-bold mb-6">Contact Form</h1>
      {message && <p className="text-center mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email *</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone Number</label>
          <PhoneInput
            country={'us'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Country</label>
          <select
            name="country"
            className="w-full p-2 border rounded"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="ET">Ethiopia</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United State</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            className="w-full p-2 border rounded"
            placeholder="Enter Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-orange-500 text-white font-bold rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
