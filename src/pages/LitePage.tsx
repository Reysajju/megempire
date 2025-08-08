import React, { useState } from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

const LitePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-md w-full border">
          <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-xl font-medium text-gray-900 mb-3">Thank you</h2>
          <p className="text-gray-600 mb-4">
            Your subscription has been confirmed. Welcome to our community.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-md w-full">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <div className="text-center mb-8">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-gray-600" />
              </div>
              <h1 className="text-2xl font-medium text-gray-900 mb-2">
                Simple Newsletter
              </h1>
              <p className="text-gray-600">
                Get writing tips delivered to your inbox weekly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center group"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* MailerLite Form */}
            <div className="mt-6">
              <div className="ml-embedded" data-form="pony9t"></div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LitePage;