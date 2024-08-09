const Footer = () => {
    return (
      <footer className="bg-tealBlue-dark text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Game Galaxxy. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy" className="text-white hover:text-gray-700 mx-2">Privacy</a>
            <a href="/terms" className="text-white hover:text-gray-700 mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;