const Footer = () => {
  return (
    <footer className="bg-tealBlue-dark text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Game Galaxxy. All rights reserved.</p>
        <div className="mt-2 flex flex-wrap justify-center">
          <a href="/privacy" className="text-white hover:text-gray-700 mx-2 text-sm md:text-base">Privacy</a>
          <a href="/terms" className="text-white hover:text-gray-700 mx-2 text-sm md:text-base">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
