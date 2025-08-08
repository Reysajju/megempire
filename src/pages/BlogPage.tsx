import React from 'react';
import { Calendar, User, ArrowRight, Clock, Sparkles, TrendingUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'The Complete Guide to Character Development: Creating Unforgettable Protagonists',
    excerpt: 'Learn the essential techniques for crafting compelling characters that readers will connect with emotionally and remember long after they finish your book.',
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Character Development'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Overcoming Writer\'s Block: 10 Proven Strategies That Actually Work',
      excerpt: 'Discover practical techniques to break through creative barriers and maintain consistent writing momentum.',
      author: 'David Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Writing Tips'
    },
    {
      id: 3,
      title: 'Building Tension: The Secret to Page-Turning Fiction',
      excerpt: 'Master the art of creating suspense and keeping readers engaged from the first page to the last.',
      author: 'Emma Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Storytelling'
    },
    {
      id: 4,
      title: 'The Psychology of Reader Engagement: What Makes Stories Addictive',
      excerpt: 'Understand the psychological principles behind compelling narratives and how to apply them in your writing.',
      author: 'Michael Torres',
      date: '2024-01-08',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Psychology'
    },
    {
      id: 5,
      title: 'Dialogue That Sings: Writing Conversations That Feel Natural',
      excerpt: 'Learn to write dialogue that reveals character, advances plot, and sounds authentically human.',
      author: 'Lisa Park',
      date: '2024-01-05',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/277593/pexels-photo-277593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Dialogue'
    },
    {
      id: 6,
      title: 'World Building 101: Creating Believable Fictional Worlds',
      excerpt: 'Craft immersive settings that enhance your story and provide rich backdrops for your characters.',
      author: 'James Wilson',
      date: '2024-01-03',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'World Building'
    },
    {
      id: 7,
      title: 'The Business Side of Writing: Building Your Author Platform',
      excerpt: 'Navigate the publishing world and build a sustainable writing career with practical business strategies.',
      author: 'Rachel Green',
      date: '2024-01-01',
      readTime: '13 min read',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Business'
    }
  ];

  const categories = ['All', 'Writing Tips', 'Character Development', 'Storytelling', 'Psychology', 'Dialogue', 'World Building', 'Business'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Expert Writing Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Writing Insights & Resources
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Discover expert tips, techniques, and strategies to elevate your writing craft
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-600 font-bold text-sm px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight hover:text-purple-600 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-purple-500" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/kit"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group shadow-lg"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 border-gray-200 hover:border-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 shadow-sm hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-purple-200">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3 text-purple-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-green-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Link
                  to="/chimp"
                  className="inline-flex items-center text-purple-600 hover:text-white bg-purple-50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 group shadow-sm hover:shadow-lg"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Stay Updated</span>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 relative z-10">
            Never Miss a Writing Tip
          </h2>
          <p className="text-xl mb-10 text-purple-100 leading-relaxed relative z-10">
            Get weekly insights, exclusive resources, and expert advice delivered to your inbox
          </p>
          <Link
            to="/lite"
            className="bg-white text-purple-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center group shadow-2xl relative z-10"
          >
            <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            Subscribe to Newsletter
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;