'use client'
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="bg-gradient-to-br from-n-8 to-n-7 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg text-gray-300 mt-4">We'd love to hear from you. Please fill out the form below and we'll get in touch with you soon.</p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-color-1"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-color-1"
                  placeholder="Your email address"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label htmlFor="subject" className="block text-sm font-semibold">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-color-1"
                placeholder="Subject of your message"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-color-1"
                placeholder="Your message"
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-color-1 text-white font-semibold rounded-md hover:bg-color-2 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
