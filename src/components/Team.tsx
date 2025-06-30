
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      role: 'Founder & President',
      bio: 'Dr. Sharma has dedicated over 15 years to educational reform and social welfare. His vision drives the organization\'s mission to create lasting change through community-based programs.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80',
      email: 'help.gopalwelfare@gmail.com',
      phone: '+91-9876543210',
      specialization: 'Educational Policy & Community Development'
    },
    {
      id: 2,
      name: 'Smt. Priya Gupta',
      role: 'Vice President',
      bio: 'A passionate advocate for women\'s empowerment and education, Priya leads our community outreach programs and oversees the implementation of welfare initiatives across Uttar Pradesh.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
      email: 'priya@gopalwelfare.org',
      phone: '+91-9876543211',
      specialization: 'Women Empowerment & Social Welfare'
    },
    {
      id: 3,
      name: 'Prof. Amit Kumar',
      role: 'Secretary',
      bio: 'With a background in education administration, Prof. Kumar manages our educational programs and ensures quality delivery of services to beneficiaries in rural and urban areas.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80',
      email: 'amit@gopalwelfare.org',
      phone: '+91-9876543212',
      specialization: 'Education Administration & Program Management'
    },
    {
      id: 4,
      name: 'Ms. Sunita Verma',
      role: 'Treasurer',
      bio: 'Sunita brings financial expertise and ensures transparent utilization of funds. She oversees all financial operations and maintains accountability in our resource management.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=400&q=80',
      email: 'sunita@gopalwelfare.org',
      phone: '+91-9876543213',
      specialization: 'Financial Management & Transparency'
    },
    {
      id: 5,
      name: 'Mr. Vikash Singh',
      role: 'Program Coordinator',
      bio: 'Vikash coordinates field operations and works directly with communities. His grassroots approach ensures that our programs reach the most vulnerable populations effectively.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
      email: 'vikash@gopalwelfare.org',
      phone: '+91-9876543214',
      specialization: 'Field Operations & Community Relations'
    },
    {
      id: 6,
      name: 'Dr. Meera Agarwal',
      role: 'Advisory Board Member',
      bio: 'Dr. Agarwal provides strategic guidance on program development and impact measurement. Her expertise in social development helps shape our long-term vision.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      email: 'meera@gopalwelfare.org',
      phone: '+91-9876543215',
      specialization: 'Strategic Planning & Impact Assessment'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of passionate individuals works tirelessly to create positive change 
            in communities across Uttar Pradesh. Meet the people behind our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 card-hover ${
                hoveredMember === index ? 'shadow-2xl -translate-y-2' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Basic Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-montserrat font-bold text-xl mb-1">{member.name}</h3>
                    <p className="font-open-sans text-sm opacity-90 mb-2">{member.role}</p>
                  </div>
                </div>

                {/* Hover Content */}
                <div className={`transition-all duration-500 ${
                  hoveredMember === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="p-6 bg-white">
                    <p className="font-open-sans text-sm text-gray-700 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="font-open-sans text-xs text-primary font-semibold">
                        Specialization:
                      </div>
                      <div className="font-open-sans text-sm text-gray-600">
                        {member.specialization}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="font-open-sans text-xs">{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="w-4 h-4 text-secondary" />
                        <span className="font-open-sans text-xs">{member.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-success" />
                        <span className="font-open-sans text-xs">Lucknow, UP</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Static Info (Always Visible) */}
                <div className={`p-6 bg-white ${hoveredMember === index ? 'hidden' : 'block'}`}>
                  <h3 className="font-montserrat font-bold text-lg text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-open-sans text-primary font-medium mb-3">{member.role}</p>
                  <p className="font-open-sans text-sm text-gray-600 line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Mail className="w-4 h-4" />
                      <span className="font-open-sans text-xs">Contact for more info</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-gray-800 mb-4">
              Join Our Mission
            </h3>
            <p className="font-open-sans text-lg text-gray-600 mb-6">
              We're always looking for passionate individuals who want to make a difference. 
              Whether you want to volunteer, partner with us, or support our cause, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Get Involved
              </button>
              <a 
                href="mailto:help.gopalwelfare@gmail.com"
                className="border border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
