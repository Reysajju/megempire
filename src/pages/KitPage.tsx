import React, { useState } from 'react';
import { Mail, Star, Download, BookOpen, Users, Award, ArrowRight, CheckCircle, Gift, Zap } from 'lucide-react';

// Add ConvertKit script
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.async = true;
  script.setAttribute('data-uid', '1714634658');
  script.src = 'https://rey-garcia.kit.com/1714634658/index.js';
  if (!document.querySelector('script[data-uid="1714634658"]')) {
    document.head.appendChild(script);
  }
}

const KitPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    writingGoal: '',
    experience: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
  };

  const kitIncludes = [
    {
      icon: BookOpen,
      title: 'Complete Writing Guide',
      description: '50-page comprehensive guide to storytelling mastery',
      value: '$49'
    },
    {
      icon: Download,
      title: 'Template Collection',
      description: '12 professional templates for character sheets, plot outlines, and more',
      value: '$29'
    },
    {
      icon: Zap,
      title: 'Writing Prompts Pack',
      description: '365 creative prompts to spark your imagination daily',
      value: '$19'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Exclusive access to our private author community and forums',
      value: '$97'
    },
    {
      icon: Award,
      title: 'Bonus Masterclass',
      description: '2-hour video masterclass on publishing and marketing',
      value: '$149'
    },
    {
      icon: Gift,
      title: 'Surprise Bonuses',
      description: 'Additional resources and tools added monthly',
      value: 'Priceless'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Published Author',
      content: 'This kit transformed my writing process completely. I went from scattered ideas to a published novel in 6 months!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Marcus Thompson',
      role: 'Freelance Writer',
      content: 'The templates alone saved me dozens of hours. This is exactly what every serious writer needs.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sophia Chen',
      role: 'Content Creator',
      content: 'Best investment I\'ve made in my writing career. The community support is incredible too!',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-lg w-full">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to the Author Elite!
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your Complete Writing Kit is on its way! Check your email in the next few minutes 
            for download links and exclusive community access.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-purple-800 font-medium">
              🎉 Bonus: You've been automatically enrolled in our monthly author mastermind sessions!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Limited Time: Complete Writing Kit</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Everything You Need to
              <br />
              <span className="text-yellow-300">Master Writing</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get our comprehensive writing toolkit with guides, templates, prompts, 
              and exclusive community access. Transform from aspiring writer to published author.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Complete Package</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Side */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Inside Your Writing Kit
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Gift className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-800 font-medium">
                    Total Value: $343 - Get Everything for FREE Today!
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {kitIncludes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <span className="text-sm font-medium text-green-600">{item.value}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Join 10,000+ Successful Authors
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Complete Writing Kit
                </h2>
                <p className="text-gray-600">
                  Join thousands of authors who've transformed their writing with our proven system
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="writingGoal" className="block text-sm font-medium text-gray-700 mb-1">
                    Writing Goal
                  </label>
                  <select
                    id="writingGoal"
                    name="writingGoal"
                    value={formData.writingGoal}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="novel">Write a novel</option>
                    <option value="freelance">Start freelance writing</option>
                    <option value="blog">Create a successful blog</option>
                    <option value="improve">Improve writing skills</option>
                    <option value="publish">Get published</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Complete beginner</option>
                    <option value="some">Some experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center group"
                >
                  Get My Complete Writing Kit FREE
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 mb-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
                <div className="flex items-center justify-center space-x-6 text-xs text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                    <span>30-Day Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitPage;