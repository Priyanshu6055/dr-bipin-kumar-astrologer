export const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="mb-4 text-lg">&copy; {new Date().getFullYear()} AstroGuidance. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-amber-300 transition-colors duration-300">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-amber-300 transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};