
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ImpactStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [filter, setFilter] = useState('all');

  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      age: 16,
      category: 'education',
      location: 'Ahmamau, Lucknow',
      story: 'Thanks to Gopal Welfare Society, I received quality education and support. Today, I am the first in my family to complete secondary education and dream of becoming a teacher.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      impact: 'First-generation learner',
      program: 'Primary Education Initiative'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      age: 28,
      category: 'skill-development',
      location: 'Arjunganj, Lucknow',
      story: 'The skill development program changed my life completely. I learned computer skills and started my own digital services business. Now I employ 5 other youth from my community.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      impact: 'Entrepreneur & Job Creator',
      program: 'Skill Development Programs'
    },
    {
      id: 3,
      name: 'Sunita Devi',
      age: 35,
      category: 'women-empowerment',
      location: 'Rural Lucknow',
      story: 'Through the women empowerment workshops, I gained confidence and skills. I now lead a self-help group of 20 women and we have collectively saved over ₹2 lakhs.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
      impact: 'Community Leader',
      program: 'Community Welfare Services'
    },
    {
      id: 4,
      name: 'Amit Gupta',
      age: 22,
      category: 'skill-development',
      location: 'Lucknow',
      story: 'The vocational training program helped me develop technical skills. I secured a job at a local IT company and now support my entire family financially.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80',
      impact: 'Skilled Professional',
      program: 'Skill Development Programs'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Stories' },
    { key: 'education', label: 'Education' },
    { key: 'skill-development', label: 'Skill Development' },
    { key: 'women-empowerment', label: 'Women Empowerment' }
  ];

  const filteredStories = filter === 'all' ? stories : stories.filter(story => story.category === filter);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  const currentStoryData = filteredStories[currentStory];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Stories of Transformation
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs. 
            These testimonials showcase the lasting impact of our community-driven initiatives.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.key}
              variant={filter === filterOption.key ? 'default' : 'outline'}
              onClick={() => {
                setFilter(filterOption.key);
                setCurrentStory(0);
              }}
              className="font-open-sans"
            >
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Story Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/2 relative">
                  <img
                    src={currentStoryData.image}
                    alt={currentStoryData.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-montserrat font-semibold text-lg">{currentStoryData.name}</div>
                    <div className="font-open-sans text-sm opacity-90">{currentStoryData.location}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-secondary" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  <blockquote className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
                    "{currentStoryData.story}"
                  </blockquote>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-montserrat font-semibold text-primary text-lg">
                          {currentStoryData.impact}
                        </div>
                        <div className="font-open-sans text-sm text-gray-600">
                          {currentStoryData.program}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-montserrat font-medium text-gray-800">
                          Age: {currentStoryData.age}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevStory}
                      disabled={filteredStories.length <= 1}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>

                    <div className="flex space-x-2">
                      {filteredStories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStory(index)}
                          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentStory ? 'bg-primary' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextStory}
                      disabled={filteredStories.length <= 1}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
