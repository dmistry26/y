import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Play, Calendar, Clock, User, Building, ArrowRight, Headphones, Video } from "lucide-react";
import { motion } from "framer-motion";

export default function Interviews() {
  const featuredInterview = {
    title: "The Future of AI Ethics with Dr. Timnit Gebru",
    guest: "Dr. Timnit Gebru",
    role: "AI Ethics Researcher & Former Google AI Ethics Co-Lead",
    company: "Distributed AI Research Institute",
    description: "A deep dive into the importance of ethical AI development, bias in machine learning, and how young people can champion responsible AI practices.",
    duration: "45 min",
    date: "December 10, 2024",
    type: "Video",
    views: "12.5K",
    topics: ["AI Ethics", "Bias in AI", "Research", "Social Impact"]
  };

  const interviews = [
    {
      title: "Building AI Products at Scale",
      guest: "Alex Chen",
      role: "VP of AI at Stripe",
      company: "Stripe",
      duration: "32 min",
      date: "December 5, 2024",
      type: "Audio",
      views: "8.2K",
      description: "Insights on taking AI from prototype to production and the challenges of scaling AI systems.",
      topics: ["Product Development", "Scaling", "Engineering"]
    },
    {
      title: "From Student to AI Entrepreneur",
      guest: "Maria Rodriguez",
      role: "Founder & CEO",
      company: "VisionAI",
      duration: "28 min",
      date: "November 28, 2024",
      type: "Video",
      views: "15.7K",
      description: "The inspiring journey of a YOUTH x AI alumni who founded a computer vision startup.",
      topics: ["Entrepreneurship", "Startups", "Computer Vision"]
    },
    {
      title: "Democratizing AI Education",
      guest: "Dr. Andrew Ng",
      role: "Founder",
      company: "DeepLearning.AI",
      duration: "38 min",
      date: "November 20, 2024",
      type: "Audio",
      views: "22.1K",
      description: "How to make AI education accessible worldwide and the future of online learning.",
      topics: ["Education", "Online Learning", "Accessibility"]
    },
    {
      title: "AI in Healthcare Revolution",
      guest: "Dr. Fei-Fei Li",
      role: "Professor & Co-Director",
      company: "Stanford HAI",
      duration: "42 min",
      date: "November 15, 2024",
      type: "Video",
      views: "18.9K",
      description: "Exploring how artificial intelligence is transforming medical diagnosis and treatment.",
      topics: ["Healthcare", "Medical AI", "Research"]
    },
    {
      title: "Breaking Barriers in AI Research",
      guest: "Dr. Joy Buolamwini",
      role: "Founder",
      company: "Algorithmic Justice League",
      duration: "35 min",
      date: "November 8, 2024",
      type: "Video",
      views: "14.3K",
      description: "Fighting bias in AI systems and promoting algorithmic justice for all communities.",
      topics: ["AI Justice", "Bias", "Research", "Activism"]
    },
    {
      title: "The Business of AI",
      guest: "Jensen Huang",
      role: "CEO",
      company: "NVIDIA",
      duration: "50 min",
      date: "November 1, 2024",
      type: "Audio",
      views: "25.8K",
      description: "The evolution of AI hardware and the future of accelerated computing.",
      topics: ["Hardware", "Business", "Innovation"]
    }
  ];

  const categories = [
    { name: "AI Ethics", count: 8 },
    { name: "Entrepreneurship", count: 12 },
    { name: "Research", count: 15 },
    { name: "Industry Insights", count: 20 },
    { name: "Student Stories", count: 6 }
  ];

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
              <Mic className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Expert <span className="text-gradient">Interviews</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Conversations with AI pioneers, industry leaders, and change-makers shaping the future of technology
          </p>
        </motion.section>

        {/* Stats Bar */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-300">Expert Interviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">200K+</div>
              <div className="text-gray-300">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">25+</div>
              <div className="text-gray-300">Industry Leaders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-gray-300">Universities</div>
            </div>
          </div>
        </motion.section>

        {/* Categories */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge className="bg-white/10 text-white px-4 py-2 text-base font-medium">
              All Interviews
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category.name} 
                className="bg-purple-500/20 text-purple-300 px-4 py-2 text-base font-medium hover:opacity-80 transition-opacity cursor-pointer"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Featured Interview */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gradient">Featured Interview</h2>
          </div>
          
          <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="order-2 md:order-1">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Badge className={`${featuredInterview.type === 'Video' ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
                      {featuredInterview.type === 'Video' ? <Video className="w-3 h-3 mr-1" /> : <Headphones className="w-3 h-3 mr-1" />}
                      {featuredInterview.type}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredInterview.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredInterview.duration}
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                    {featuredInterview.title}
                  </h1>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {featuredInterview.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredInterview.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs text-gray-300 border-gray-500">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Interview
                  </Button>
                </div>

                <div className="order-1 md:order-2">
                  <div className="glass-effect p-8 rounded-2xl text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{featuredInterview.guest}</h3>
                    <p className="text-purple-300 font-medium mb-2">{featuredInterview.role}</p>
                    <p className="text-gray-400 mb-4 flex items-center justify-center">
                      <Building className="w-4 h-4 mr-2" />
                      {featuredInterview.company}
                    </p>
                    <div className="text-sm text-gray-400">
                      {featuredInterview.views} views
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Recent Interviews */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent <span className="text-gradient">Interviews</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from the experiences and insights of industry leaders, researchers, and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interviews.map((interview, index) => (
              <motion.div
                key={interview.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 h-full group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${interview.type === 'Video' ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'} text-xs`}>
                        {interview.type === 'Video' ? <Video className="w-3 h-3 mr-1" /> : <Headphones className="w-3 h-3 mr-1" />}
                        {interview.type}
                      </Badge>
                      <div className="text-xs text-gray-400">{interview.views} views</div>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{interview.guest}</h3>
                        <p className="text-sm text-purple-300">{interview.role}</p>
                        <p className="text-xs text-gray-400 flex items-center">
                          <Building className="w-3 h-3 mr-1" />
                          {interview.company}
                        </p>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300 line-clamp-2 mb-3">
                      {interview.title}
                    </h4>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {interview.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {interview.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs text-gray-400 border-gray-600">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {interview.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {interview.duration}
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="w-full text-gray-400 hover:text-white hover:bg-white/10">
                      <Play className="w-4 h-4 mr-2" />
                      {interview.type === 'Video' ? 'Watch' : 'Listen'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Podcast Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl">
                  <Headphones className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                YOUTH x AI Podcast
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Subscribe to our podcast for in-depth conversations with AI leaders, researchers, and innovators. 
                Available on all major podcast platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Headphones className="mr-2 w-5 h-5" />
                  Subscribe to Podcast
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10">
                  View All Episodes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}