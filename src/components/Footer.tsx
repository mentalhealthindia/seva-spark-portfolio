
import { Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/fea6e14f-47ff-4720-b195-a362a900d4d9.png" 
                alt="Gopal Welfare Society Logo" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-montserrat font-bold text-lg">
                  Gopal Educational & Social Welfare Society
                </h3>
                <p className="font-open-sans text-sm text-gray-300">
                  Transforming Lives Through Education
                </p>
              </div>
            </div>
            
            <p className="font-open-sans text-gray-300 leading-relaxed mb-6">
              Registered under the Societies Registration Act of 1860 
              (Registration No. LUC/08010/2021-22), we are committed to 
              transforming lives through education and social empowerment.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="font-open-sans text-sm text-gray-300">
                  <div>Building No. 08, Ahmamau</div>
                  <div>Arjunganj, Lucknow, UP - 226002</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a 
                  href="mailto:help.gopalwelfare@gmail.com"
                  className="font-open-sans text-sm text-gray-300 hover:text-secondary transition-colors duration-200"
                >
                  help.gopalwelfare@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-open-sans text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} Gopal Educational and Social Welfare Society. All rights reserved.</p>
              <p className="mt-1">
                Registration No. LUC/08010/2021-22 | Established: 24th February 2025
              </p>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span className="font-open-sans">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="font-open-sans">for our community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
