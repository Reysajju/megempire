import React, { useState } from 'react';
import { Mail, Zap, Gift, ArrowRight, CheckCircle } from 'lucide-react';

// Add Mailchimp script
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.id = 'mcjs';
  script.innerHTML = `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/30163111f1b13a4c23985eecf/b60e6e1decf8af1384568e08a.js");`;
  if (!document.getElementById('mcjs')) {
    document.head.appendChild(script);
  }
}

const ChimpPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
  };

  const benefits = [
    'Weekly writing challenges that spark creativity',
    'Exclusive author interviews and insights',
    'Free writing templates and worksheets',
    'Community access to fellow writers',
    'Monthly live Q&A sessions'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome Aboard!</h2>
          <p className="text-gray-600 mb-6">
            You're now part of our creative writing community! Check your email for a special welcome gift.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Share with Friends
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <div className="text-white space-y-6">
              <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="h-5 w-5 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">Join the Creative Revolution</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Unleash Your
                <br />
                <span className="text-yellow-300">Inner Chimp!</span>
              </h1>
              
              <p className="text-xl text-orange-100 leading-relaxed">
                Ready to go bananas with your writing? Join our playful community of authors 
                who believe creativity should be fun, wild, and absolutely unstoppable!
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-yellow-300 w-2 h-2 rounded-full"></div>
                    <span className="text-orange-100">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-white bg-opacity-30 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="text-yellow-300 font-semibold">5,000+ Creative Writers</div>
                  <div className="text-sm text-orange-200">Already swinging with us!</div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your FREE Writing Starter Pack!
                </h2>
                <p className="text-gray-600">
                  Includes templates, prompts, and our secret banana smoothie recipe for creative fuel! 🍌
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="writer@example.com"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center group"
                >
                  Go Bananas with Writing!
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  No spam, just creative goodness! Unsubscribe anytime. 
                  <br />
                  We respect your inbox like we respect good plot twists.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span>No Commitment</span>
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

export default ChimpPage;