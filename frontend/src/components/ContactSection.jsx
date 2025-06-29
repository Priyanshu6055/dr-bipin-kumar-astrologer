import React, { useState } from 'react';

export const Sun = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="8" /><line x1="12" x2="12" y1="2" y2="6" /><line x1="12" x2="12" y1="18" y2="22" /><line x1="4.93" x2="7.76" y1="4.93" y2="7.76" /><line x1="16.24" x2="19.07" y1="16.24" y2="19.07" /><line x1="2" x2="6" y1="12" y2="12" /><line x1="18" x2="22" y1="12" y2="12" /><line x1="4.93" x2="7.76" y1="19.07" y2="16.24" /><line x1="16.24" x2="19.07" y1="7.76" y2="4.93" /></svg>;
export const Star = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
export const Sparkles = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="M9.93 13.5C8.75 14.96 6.58 14.82 5.2 13.4C2.5 10.53 4.2 6.3 9.7 7.27c2.47.46 4.45 2.5 4.7 4.93.38 3.68-3.13 6.07-6.55 4.78C6.56 16.3 6 14 6 12" /><path d="M11.5 6.7c2.4-.95 5.5-1.16 7.6-.6 2.3.62 3.9 2.5 3.5 4.6-.35 1.9-.99 3.1-2.1 4.1" /><path d="M12.93 18.5c1.18-1.46 3.35-1.32 4.73.1c2.7 2.97 1.05 7.2-4.45 6.23-2.47-.46-4.45-2.5-4.7-4.93-.38-3.68 3.13-6.07 6.55-4.78.92.37 1.48 2.67 1.48 4.92" /><path d="M10.5 24.7c-2.4.95-5.5 1.16-7.6.6-2.3-.62-3.9-2.5-3.5-4.6.35-1.9.99-3.1 2.1-4.1" /></svg>;
export const MessageCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>;
export const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 18.7L7.3 13.9C4.7 11.2 4.7 6.8 7.3 4.2C9.9 1.6 14.1 1.6 16.7 4.2C19.3 6.8 19.3 11.2 16.7 13.9L12 18.7Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
export const Phone = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.9v3.4c0 1.2-1.2 2.1-2.4 1.7-2.9-.6-6.1-2-8.5-4.4-2.4-2.4-3.8-5.6-4.4-8.5C4.5 3.2 5.4 2 6.6 2h3.4c1.1 0 1.9.9 1.7 2.1l-.7 3.8c-.2 1.1-.9 1.8-2 2.2-1.1.4-1.9.7-2.7 1.1.5 1 1.2 2 2.1 2.9s1.9 1.6 2.9 2.1c.4-.8.7-1.6 1.1-2.7.4-1.1 1.1-1.8 2.2-2l3.8-.7c1.2-.2 2.1.6 2.1 1.7z" /></svg>;
export const Mail = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
export const Facebook = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
export const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
export const Twitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 13.6 1 10.7 1 7.4c.7.2 1.5.4 2.3.5C2.4 6.8 1.4 4.9 2.1 3.2c1.7 1.7 4.1 2.8 6.1 2.9-2.5-2.2-3.4-5.3-2.1-7.5 1.5 2 3.8 3.2 6.2 3.3-2.6 1.9-4.7 4.5-4.9 7.2-.6 1.5-.9 3-1.1 4.5 1.5-.1 3-.5 4.4-1.2 1.6-.8 3-1.8 4.2-3.1 1.2-1.3 2.1-2.8 2.8-4.5 1-2.5.5-5.3-.6-7.8" /></svg>;


export const ContactSection = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage submission status and messages
  const [status, setStatus] = useState(''); // 'idle', 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    setStatus('sending');
    setStatusMessage('Sending your message...');

    try {
      const backendUrl = 'https://priyanshu-raj-website-6055-htsx.vercel.app/send-email'; 

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Parse the JSON response from the backend

      if (response.ok && data.success) { // Check if the HTTP status is 200-299 and backend 'success' is true
        setStatus('success');
        setStatusMessage(data.message || 'Message sent successfully!');
        // Clear the form fields on success
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle backend errors (e.g., status 400 or 500, or success: false)
        setStatus('error');
        setStatusMessage(data.message || data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      // Handle network errors (e.g., server not reachable)
      console.error('Network or backend error:', error);
      setStatus('error');
      setStatusMessage('Could not connect to the server. Please check your internet connection or try again later.');
    } finally {
      // Optionally, clear the status message after a few seconds
      setTimeout(() => {
        setStatus('');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-bl from-orange-400 to-amber-500 text-white py-16 md:py-24"
             style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-white pb-2 inline-block drop-shadow-md animate-fade-in-up">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Contact Information Section */}
          <div className="text-left bg-white bg-opacity-10 p-8 rounded-xl shadow-2xl border border-white border-opacity-30 animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <MapPin className="mr-3 text-amber-300" />
                <span>123 Celestial Avenue, Star City, Astro State - 456789</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-amber-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-amber-300" />
                <span>info@astrogudiance.com</span>
              </li>
            </ul>
            <div className="flex justify-start space-x-6 mt-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                <Twitter className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Send Us a Message Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl text-gray-800 border border-orange-200 animate-fade-in-right animation-delay-200">
            <h3 className="text-2xl font-semibold text-orange-700 mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2 text-left">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" // Important: `name` attribute matches backend expected field
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2 text-left">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" // Important: `name` attribute matches backend expected field
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              {/* Note: Your backend expects 'subject' but your frontend doesn't have it. */}
              {/* I've removed the subject from the frontend form as per your original code. */}
              {/* The backend will generate a subject based on name and a default template. */}
              {/* If you want a subject field, add it here and in formData state. */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2 text-left">Your Message</label>
                <textarea
                  id="message"
                  name="message" // Important: `name` attribute matches backend expected field
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none resize-y"
                  placeholder="Enter your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-75
                  ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
                disabled={status === 'sending'} // Disable button when sending
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Message Display */}
              {statusMessage && (
                <p className={`text-center font-medium ${
                  status === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
