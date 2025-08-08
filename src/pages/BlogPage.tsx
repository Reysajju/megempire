import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Writing Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover expert tips, techniques, and strategies to elevate your writing craft
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-purple-600 font-medium text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/kit"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors border border-gray-200 hover:border-purple-300 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Link
                  to="/chimp"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm group"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Never Miss a Writing Tip
          </h2>
          <p className="text-lg mb-8 text-purple-100">
            Get weekly insights, exclusive resources, and expert advice delivered to your inbox
          </p>
          <Link
            to="/lite"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group"
          >
            Subscribe to Newsletter
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;