import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  Sparkles, 
  Star, 
  CheckCircle, 
  Feather,
  TrendingUp,
  Zap,
  Heart,
  Globe,
  Target,
  Lightbulb
} from 'lucide-react';

const HomePage = () => {
  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const features = [
    {
      icon: BookOpen,
      title: 'Expert Writing Guides',
      description: 'Comprehensive resources covering every aspect of the writing craft, from character development to plot structure.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Thriving Community',
      description: 'Connect with fellow authors, share your work, and get valuable feedback from experienced writers.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Professional Templates',
      description: 'Access our collection of industry-standard templates for manuscripts, query letters, and more.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Writing Challenges',
      description: 'Daily prompts and monthly challenges to keep your creativity flowing and skills sharp.',
      color: 'from-violet-500 to-violet-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Published Novelist',
      content: 'Magnates Empire transformed my writing journey. The community support and resources are unmatched.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Writer',
      content: 'The templates and guides saved me months of trial and error. My income doubled in six months.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Content Creator',
      content: 'Best investment in my writing career. The community alone is worth its weight in gold.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Writers', icon: Users },
    { number: '50,000+', label: 'Resources Shared', icon: BookOpen },
    { number: '1,000+', label: 'Success Stories', icon: Award },
    { number: '99%', label: 'Satisfaction Rate', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("${svgPattern}")` }}></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Welcome to the Future of Writing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Unleash Your
              <br />
              <span className="text-yellow-300 animate-float">Writing Empire</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of authors who've transformed their passion into profit. 
              Get the tools, community, and guidance you need to build your writing empire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/kit"
                className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center"
              >
                <Feather className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/blog"
                className="group glass-effect text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <BookOpen className="mr-3 h-6 w-6" />
                Explore Resources
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-purple-200">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Free to Start</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Expert-Led Community</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover-lift border border-gray-100">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-6">
              <Target className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <br />
              <span className="gradient-text">Succeed as a Writer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From beginner to bestseller, we provide the tools, community, and expertise 
              to accelerate your writing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-gray-100 h-full">
                  <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-6">
              <Heart className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Loved by Writers
              <br />
              <span className="gradient-text">Worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful authors who've transformed their writing careers with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover-lift border border-gray-100">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-purple-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-purple-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("${svgPattern}")` }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <Globe className="h-5 w-5 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">Join the Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Build Your
            <br />
            <span className="text-yellow-300">Writing Empire?</span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get instant access to our complete writing toolkit, join our thriving community, 
            and start your journey to writing success today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/kit"
              className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center"
            >
              <Lightbulb className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Get Started Free
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/blog"
              className="group glass-effect text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <TrendingUp className="mr-3 h-6 w-6" />
              Explore Resources
            </Link>
          </div>
          
          <div className="mt-12 text-sm text-purple-200">
            <p>✨ No credit card required • ✨ Cancel anytime • ✨ 30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;