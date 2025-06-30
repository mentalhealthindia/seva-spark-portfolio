
import { Target, Users, Heart, BookOpen, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Education for All',
      description: 'Creating opportunities for learning and development at every stage of life.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Social Empowerment',
      description: 'Uplifting marginalized groups through tailored welfare programs.',
      color: 'text-secondary'
    },
    {
      icon: Globe,
      title: 'Community Development',
      description: 'Fostering self-reliance and inclusive growth.',
      color: 'text-success'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main About Text */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
              Gopal Educational and Social Welfare Society is a registered society established with a clear purpose—to uplift communities through education, empowerment and social development. Since our formation, we've worked tirelessly to bridge gaps in society by supporting education, promoting welfare initiatives and fostering inclusive growth.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="font-open-sans text-base text-gray-700 leading-relaxed">
                We are officially registered under the Societies Registration Act of 1860, with Registration No. <span className="font-semibold text-primary">LUC/08010/2021-22</span>, dated 24th February 2025. Our society is headquartered at Ahmamau, Arjunganj, Lucknow, Uttar Pradesh – 226002.
              </p>
            </div>

            <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
              At the heart of our efforts is a belief in change through action. We focus on educational programs, skill development and welfare activities that empower individuals—especially the underprivileged—to build better futures. Every initiative we take is driven by our commitment to community welfare and guided by transparency and accountability.
            </p>

            <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-8">
              Our managing committee includes passionate individuals, who actively contribute to the society's mission with their leadership and on-ground involvement.
            </p>

            <div className="text-center">
              <h3 className="font-montserrat font-bold text-2xl text-gray-800 mb-6">
                What We Stand For
              </h3>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full ${value.color} bg-current/10 flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h4 className="font-montserrat font-bold text-xl text-gray-800 mb-4">
                    {value.title}
                  </h4>
                  <p className="font-open-sans text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
              Whether it's organizing educational workshops, running awareness drives, or supporting local communities, we believe every small step makes a big difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
