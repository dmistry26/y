import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, User, ArrowRight, Eye, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function Journal() {
  const categories = [
    { name: "AI Research", count: 12, color: "bg-purple-500/20 text-purple-300" },
    { name: "Student Stories", count: 8, color: "bg-blue-500/20 text-blue-300" },
    { name: "Industry Insights", count: 15, color: "bg-green-500/20 text-green-300" },
    { name: "Tutorials", count: 10, color: "bg-orange-500/20 text-orange-300" },
    { name: "Ethics & AI", count: 6, color: "bg-pink-500/20 text-pink-300" }
  ];

  const featuredArticle = {
    title: "The Future of AI Education: Empowering Youth for Tomorrow's Challenges",
    excerpt: "Exploring how artificial intelligence education is evolving to meet the needs of young learners and prepare them for careers that don't exist yet.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI Research",
    views: 1250
  };

  const articles = [
    {
      title: "Building My First Machine Learning Model: A Student's Journey",
      excerpt: "From zero coding experience to deploying a real-world ML solution - here's what I learned along the way.",
      author: "Marcus Rodriguez",
      date: "December 12, 2024",
      readTime: "5 min read",
      category: "Student Stories",
      views: 890
    },
    {
      title: "Ethics in AI: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of ethical considerations in AI development and how young developers can lead the change.",
      author: "Dr. Amira Hassan",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Ethics & AI",
      views: 1420
    },
    {
      title: "Breaking into Tech: AI Career Paths for Young Professionals",
      excerpt: "A comprehensive guide to the various career opportunities in AI and machine learning for the next generation.",
      author: "James Kim",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Industry Insights",
      views: 2100
    },
    {
      title: "Python for AI: Essential Libraries Every Beginner Should Know",
      excerpt: "A curated list of Python libraries that will supercharge your AI development journey, with practical examples.",
      author: "Elena Patel",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Tutorials",
      views: 1680
    },
    {
      title: "From Classroom to Startup: How YOUTH x AI Changed My Life",
      excerpt: "One student's inspiring journey from learning basic AI concepts to launching their own AI-powered social impact startup.",
      author: "David Park",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Student Stories",
      views: 950
    },
    {
      title: "The Role of AI in Climate Change Solutions",
      excerpt: "Exploring how artificial intelligence is being used to address environmental challenges and create sustainable solutions.",
      author: "Dr. Maria Santos",
      date: "November 30, 2024",
      readTime: "9 min read",
      category: "AI Research",
      views: 1340
    }
  ];

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "bg-gray-500/20 text-gray-300";
  };

  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl shadow-2xl">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            AI <span className="text-gradient">Journal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Insights, stories, and discoveries from the frontlines of AI education and innovation
          </p>
        </motion.section>

        {/* Categories */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge className="bg-white/10 text-white px-4 py-2 text-base font-medium">
              All Articles
            </Badge>
            {categories.map((category, index) => (
              <Badge 
                key={category.name} 
                className={`${category.color} px-4 py-2 text-base font-medium hover:opacity-80 transition-opacity cursor-pointer`}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Featured Article */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gradient">Featured Article</h2>
          </div>
          
          <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300">
            <CardContent className="p-0">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge className={getCategoryColor(featuredArticle.category)}>
                    <Tag className="w-3 h-3 mr-1" />
                    {featuredArticle.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Eye className="w-4 h-4 mr-1" />
                    {featuredArticle.views.toLocaleString()} views
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  {featuredArticle.title}
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{featuredArticle.author}</p>
                      <p className="text-sm text-gray-400">Contributing Writer</p>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Recent Articles */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay up to date with the latest insights from our community of students, educators, and industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 h-full group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${getCategoryColor(article.category)} text-xs`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-400">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views.toLocaleString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-white text-sm">{article.author}</p>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest articles, insights, and AI education resources delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time
              </p>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}