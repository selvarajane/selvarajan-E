import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">SELVARAJAN E.</h2>
            <p className="text-slate-600 max-w-xs">
              Building futuristic digital experiences with cutting-edge technologies.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/selvarajane" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-blue-600 transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/selvarajane/" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-blue-600 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sr_offcl_?igsh=cWliNDVmd252aDJs" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-blue-600 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Selvarajan E. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
