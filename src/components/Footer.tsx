
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#mission' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Impact Stories', href: '#impact' },
    { name: 'Get Involved', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    'Primary Education Initiative',
    'Skill Development Programs',
    'Community Welfare Services',
    'Women Empowerment',
    'Healthcare Awareness'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
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
              </div>
            </div>
            
            <p className="font-open-sans text-gray-300 leading-relaxed mb-6">
              Registered under the Societies Registration Act of 1860 
              (Registration No. LUC/08010/2021-22), we are committed to 
              transforming lives through education and social empowerment.
            </p>

            <div className="space-y-3">
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
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="font-open-sans text-sm text-gray-300">
                  Available Mon-Sat, 9 AM - 6 PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-open-sans text-gray-300 hover:text-secondary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="font-open-sans text-gray-300 text-sm">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Get Involved</h4>
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('#donate')}
                className="w-full bg-secondary hover:bg-secondary/90 text-black font-montserrat font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Donate Now
              </button>
              
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-semibold py-3 px-6 rounded-full transition-all duration-300"
              >
                Volunteer
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-montserrat font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
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

        {/* Legal Notice */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="font-open-sans text-xs text-gray-500 leading-relaxed">
              Gopal Educational and Social Welfare Society is a registered non-profit organization 
              committed to transparency and accountability. All donations are used directly for 
              community welfare and educational programs. For detailed financial reports and 
              program updates, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
