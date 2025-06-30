
import { useState } from 'react';
import { BookOpen, Users, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const programs = [
    {
      id: 1,
      title: 'Primary Education Initiative',
      description: 'Providing quality education to underprivileged children in rural areas of Lucknow and surrounding districts.',
      icon: BookOpen,
      color: 'primary',
      stats: { beneficiaries: '1,200+', locations: '25 Villages' },
      features: [
        'Free quality education materials',
        'Qualified teacher training',
        'Digital learning resources',
        'Nutritional support programs'
      ]
    },
    {
      id: 2,
      title: 'Skill Development Programs',
      description: 'Empowering youth and adults with practical skills for better employment opportunities and entrepreneurship.',
      icon: Users,
      color: 'secondary',
      stats: { beneficiaries: '800+', locations: '12 Centers' },
      features: [
        'Vocational training courses',
        'Computer literacy programs',
        'Entrepreneurship development',
        'Job placement assistance'
      ]
    },
    {
      id: 3,
      title: 'Community Welfare Services',
      description: 'Comprehensive welfare programs addressing healthcare, women empowerment, and social development needs.',
      icon: Heart,
      color: 'success',
      stats: { beneficiaries: '500+', locations: '8 Communities' },
      features: [
        'Healthcare awareness drives',
        'Women empowerment workshops',
        'Emergency relief support',
        'Social awareness campaigns'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'secondary':
        return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'success':
        return 'text-success bg-success/10 border-success/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Our Programs
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to address the diverse needs of our communities 
            through education, skill development, and social welfare initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              className={`relative overflow-hidden transition-all duration-500 cursor-pointer card-hover ${
                hoveredCard === index ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(program.color)} flex items-center justify-center mb-4`}>
                  <program.icon className="w-8 h-8" />
                </div>
                
                <CardTitle className="font-montserrat text-xl mb-2">
                  {program.title}
                </CardTitle>
                
                <CardDescription className="font-open-sans text-gray-600 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Stats */}
                <div className="flex justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="font-montserrat font-bold text-lg text-gray-800">
                      {program.stats.beneficiaries}
                    </div>
                    <div className="font-open-sans text-sm text-gray-600">Beneficiaries</div>
                  </div>
                  <div className="text-center">
                    <div className="font-montserrat font-bold text-lg text-gray-800">
                      {program.stats.locations}
                    </div>
                    <div className="font-open-sans text-sm text-gray-600">Locations</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        program.color === 'primary' ? 'bg-primary' :
                        program.color === 'secondary' ? 'bg-secondary' : 'bg-success'
                      }`} />
                      <span className="font-open-sans text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => console.log(`Learn more about ${program.title}`)}
                >
                  <span className="font-open-sans">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                program.color === 'primary' ? 'from-primary/5 to-primary/10' :
                program.color === 'secondary' ? 'from-secondary/5 to-secondary/10' :
                'from-success/5 to-success/10'
              } opacity-0 transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-100' : ''
              }`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
