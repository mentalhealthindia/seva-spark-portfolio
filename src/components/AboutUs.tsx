
import { Target, Users, Heart, BookOpen, Zap, Globe, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Education for All',
      description: 'Creating opportunities for learning and development at every stage of life.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Users,
      title: 'Social Empowerment',
      description: 'Uplifting marginalized groups through tailored welfare programs.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Globe,
      title: 'Community Development',
      description: 'Fostering self-reliance and inclusive growth.',
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  const highlights = [
    {
      icon: Award,
      text: 'Registered under Societies Registration Act of 1860'
    },
    {
      icon: Lightbulb,
      text: 'Driven by transparency and accountability'
    },
    {
      icon: Heart,
      text: 'Passionate managing committee with on-ground involvement'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6 animate-fade-in">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-success mx-auto mb-8 animate-scale-in"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
                  Gopal Educational and Social Welfare Society is a registered society established with a clear purpose—to uplift communities through education, empowerment and social development. Since our formation, we've worked tirelessly to bridge gaps in society by supporting education, promoting welfare initiatives and fostering inclusive growth.
                </p>
                
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mb-6 border-l-4 border-primary">
                  <p className="font-open-sans text-base text-gray-700 leading-relaxed">
                    We are officially registered under the Societies Registration Act of 1860, with Registration No. <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded">LUC/08010/2021-22</span>, dated 24th February 2025. Our society is headquartered at Ahmamau, Arjunganj, Lucknow, Uttar Pradesh – 226002.
                  </p>
                </div>

                <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                  At the heart of our efforts is a belief in change through action. We focus on educational programs, skill development and welfare activities that empower individuals—especially the underprivileged—to build better futures. Every initiative we take is driven by our commitment to community welfare and guided by transparency and accountability.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                <h3 className="font-montserrat font-bold text-2xl text-gray-800 mb-6">
                  Our Impact Highlights
                </h3>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-green-50 transition-all duration-300 transform hover:scale-105">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <highlight.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="font-open-sans text-gray-700 leading-relaxed">
                        {highlight.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-4">
                  Our managing committee includes passionate individuals, who actively contribute to the society's mission with their leadership and on-ground involvement.
                </p>
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                  Whether it's organizing educational workshops, running awareness drives, or supporting local communities, we believe every small step makes a big difference.
                </p>
              </div>
            </div>
          </div>

          {/* What We Stand For Section */}
          <div className="text-center mb-12">
            <h3 className="font-montserrat font-bold text-3xl text-gray-800 mb-8 animate-fade-in">
              What We Stand For
            </h3>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white/90 backdrop-blur-sm border border-white/20 group overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute inset-0 ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-full ${value.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h4 className="font-montserrat font-bold text-xl text-gray-800 mb-4 group-hover:text-gray-900">
                      {value.title}
                    </h4>
                    <p className="font-open-sans text-gray-600 leading-relaxed group-hover:text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
