import React from 'react';
import { ArrowRight, BookOpen, Users, Award, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Writing Mastery',
      description: 'Learn advanced techniques from bestselling authors and industry experts.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a thriving community of writers sharing insights and encouragement.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our methods have helped thousands of authors achieve their publishing dreams.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Romance Author',
      content: 'Magnates Empire transformed my writing. I went from struggling to complete a chapter to finishing my first novel in 3 months!',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Thriller Writer',
      content: 'The community and resources here are incredible. My writing has improved dramatically since joining.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Fantasy Author',
      content: 'The best investment I\'ve made in my writing career. The techniques really work!',
      rating: 5
    }
  ];

  const benefits = [
    'Master storytelling fundamentals',
    'Develop consistent writing habits',
    'Learn character development techniques',
    'Understand plot structure and pacing',
    'Build a sustainable writing career',
    'Connect with fellow authors'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="text-yellow-400"> Writing Dreams</span>
                <br />Into Reality
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Join thousands of authors who've discovered the secrets to compelling storytelling, 
                consistent writing habits, and building a successful writing career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kit"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/blog"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
                >
                  Explore Resources
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Writer at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                  <span className="text-sm font-medium">10,000+ Authors Helped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Authors Choose Magnates Empire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the tools, community, and expertise you need to elevate your writing craft
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Master the Art of Storytelling
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach covers everything from fundamental writing techniques 
                to advanced storytelling strategies that captivate readers.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Writing workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Authors
            </h2>
            <p className="text-xl text-gray-600">
              See how Magnates Empire has transformed writing careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become the Author You've Always Dreamed of Being?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join our community of successful authors and start your transformation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kit"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/lite"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;