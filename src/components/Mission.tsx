
import { useEffect, useState } from 'react';
import { GraduationCap, Users, Heart, BookOpen } from 'lucide-react';

const Mission = () => {
  const [counters, setCounters] = useState({
    students: 0,
    programs: 0,
    volunteers: 0,
    years: 0
  });

  const finalValues = {
    students: 2500,
    programs: 15,
    volunteers: 150,
    years: 3
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        currentValue += increment;
        
        if (step >= steps) {
          currentValue = finalValue;
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));

        if (step >= steps) {
          clearInterval(intervals.find(interval => interval === arguments[0]));
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      icon: GraduationCap,
      value: counters.students,
      label: 'Students Impacted',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      value: counters.programs,
      label: 'Active Programs',
      color: 'text-secondary'
    },
    {
      icon: Users,
      value: counters.volunteers,
      label: 'Volunteers',
      color: 'text-success'
    },
    {
      icon: Heart,
      value: counters.years,
      label: 'Years of Service',
      color: 'text-primary'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Our Mission & Impact
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Gopal Educational and Social Welfare Society, we believe in change through action. 
            Our mission is to create opportunities for learning, empowerment, and inclusive growth 
            in communities across Uttar Pradesh.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Education for All</h3>
              <p className="font-open-sans text-gray-600">
                Creating opportunities for learning and development at every stage of life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Social Empowerment</h3>
              <p className="font-open-sans text-gray-600">
                Uplifting marginalized groups through tailored welfare programs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Community Development</h3>
              <p className="font-open-sans text-gray-600">
                Fostering self-reliance and inclusive growth in local communities.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white rounded-2xl p-6 shadow-lg card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`font-montserrat font-bold text-3xl md:text-4xl ${stat.color} mb-2 animate-counter`}>
                {stat.value.toLocaleString()}
                {stat.label === 'Years of Service' && '+'}
                {stat.label === 'Students Impacted' && '+'}
              </div>
              <p className="font-open-sans text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
