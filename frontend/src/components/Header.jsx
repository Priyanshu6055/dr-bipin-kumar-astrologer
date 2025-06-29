import React, { useState, useEffect } from 'react';

export const Sun = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="8"/><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg>;
export const Star = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
export const Sparkles = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="M9.93 13.5C8.75 14.96 6.58 14.82 5.2 13.4C2.5 10.53 4.2 6.3 9.7 7.27c2.47.46 4.45 2.5 4.7 4.93.38 3.68-3.13 6.07-6.55 4.78C6.56 16.3 6 14 6 12"/><path d="M11.5 6.7c2.4-.95 5.5-1.16 7.6-.6 2.3.62 3.9 2.5 3.5 4.6-.35 1.9-.99 3.1-2.1 4.1"/><path d="M12.93 18.5c1.18-1.46 3.35-1.32 4.73.1c2.7 2.97 1.05 7.2-4.45 6.23-2.47-.46-4.45-2.5-4.7-4.93-.38-3.68 3.13-6.07 6.55-4.78.92.37 1.48 2.67 1.48 4.92"/><path d="M10.5 24.7c-2.4.95-5.5 1.16-7.6.6-2.3-.62-3.9-2.5-3.5-4.6.35-1.9.99-3.1 2.1-4.1"/></svg>;
export const MessageCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>;
export const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 18.7L7.3 13.9C4.7 11.2 4.7 6.8 7.3 4.2C9.9 1.6 14.1 1.6 16.7 4.2C19.3 6.8 19.3 11.2 16.7 13.9L12 18.7Z"/><circle cx="12" cy="9" r="2.5"/></svg>;
export const Phone = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.9v3.4c0 1.2-1.2 2.1-2.4 1.7-2.9-.6-6.1-2-8.5-4.4-2.4-2.4-3.8-5.6-4.4-8.5C4.5 3.2 5.4 2 6.6 2h3.4c1.1 0 1.9.9 1.7 2.1l-.7 3.8c-.2 1.1-.9 1.8-2 2.2-1.1.4-1.9.7-2.7 1.1.5 1 1.2 2 2.1 2.9s1.9 1.6 2.9 2.1c.4-.8.7-1.6 1.1-2.7.4-1.1 1.1-1.8 2.2-2l3.8-.7c1.2-.2 2.1.6 2.1 1.7z"/></svg>;
export const Mail = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
export const Facebook = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
export const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
export const Twitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 13.6 1 10.7 1 7.4c.7.2 1.5.4 2.3.5C2.4 6.8 1.4 4.9 2.1 3.2c1.7 1.7 4.1 2.8 6.1 2.9-2.5-2.2-3.4-5.3-2.1-7.5 1.5 2 3.8 3.2 6.2 3.3-2.6 1.9-4.7 4.5-4.9 7.2-.6 1.5-.9 3-1.1 4.5 1.5-.1 3-.5 4.4-1.2 1.6-.8 3-1.8 4.2-3.1 1.2-1.3 2.1-2.8 2.8-4.5 1-2.5.5-5.3-.6-7.8"/></svg>;


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-600 text-white shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-amber-300" />
          <a href="#" className="text-3xl font-bold rounded-md px-2 py-1 transition-all duration-300 hover:bg-orange-700">
            Dr. Bipin Kumar
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none focus:text-amber-300">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 01-1.414-1.414L10.586 12 5.722 7.136a1 1 0 011.414-1.414L12 10.586l4.864-4.864a1 1 0 011.414 1.414L13.414 12l4.864 4.864z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-orange-600 md:bg-transparent w-full md:w-auto left-0 mt-2 md:mt-0 py-4 md:py-0 rounded-md shadow-lg md:shadow-none top-full`}>
          <li><a href="#home" className="block px-6 py-2 md:p-0 text-lg hover:text-amber-300 transition-colors duration-300 rounded-md hover:bg-orange-700 md:hover:bg-transparent">Home</a></li>
          <li><a href="#about" className="block px-6 py-2 md:p-0 text-lg hover:text-amber-300 transition-colors duration-300 rounded-md hover:bg-orange-700 md:hover:bg-transparent">About</a></li>
          <li><a href="#services" className="block px-6 py-2 md:p-0 text-lg hover:text-amber-300 transition-colors duration-300 rounded-md hover:bg-orange-700 md:hover:bg-transparent">Services</a></li>
          <li><a href="#testimonials" className="block px-6 py-2 md:p-0 text-lg hover:text-amber-300 transition-colors duration-300 rounded-md hover:bg-orange-700 md:hover:bg-transparent">Testimonials</a></li>
          <li><a href="#contact" className="block px-6 py-2 md:p-0 text-lg hover:text-amber-300 transition-colors duration-300 rounded-md hover:bg-orange-700 md:hover:bg-transparent">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};