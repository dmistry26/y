import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Users, 
  Award, 
  Clock, 
  BookOpen, 
  Lightbulb, 
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

export default function Program() {
  const programs = [
    {
      title: "AI Fundamentals Bootcamp",
      level: "Beginner",
      duration: "8 weeks",
      format: "Online",
      description: "Learn the basics of artificial intelligence, machine learning concepts, and ethical AI development through hands-on projects and mentorship.",
      topics: ["Introduction to AI/ML", "Python Programming", "Data Analysis", "Ethics in AI", "Career Pathways"],
      features: ["Live Sessions", "1:1 Mentorship", "Project Portfolio", "Certificate"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "ML Engineering Track",
      level: "Intermediate",
      duration: "12 weeks",
      format: "Hybrid",
      description: "Dive deep into machine learning algorithms, model development, and real-world application deployment with industry professionals.",
      topics: ["Advanced ML Algorithms", "Model Deployment", "Data Engineering", "MLOps", "Industry Projects"],
      features: ["Industry Mentors", "Real Projects", "Tech Stack Training", "Internship Prep"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AI for Social Good",
      level: "All Levels",
      duration: "6 weeks",
      format: "Project-based",
      description: "Apply AI technologies to address social challenges in healthcare, education, climate change, and social justice.",
      topics: ["AI Applications", "Social Impact Projects", "Community Partnerships", "Presentation Skills"],
      features: ["Community Impact", "NGO Partnerships", "Showcase Event", "Networking"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "AI Leadership Academy",
      level: "Advanced",
      duration: "16 weeks",
      format: "Cohort-based",
      description: "Develop leadership skills while creating AI solutions for real-world problems, with opportunities to mentor younger students.",
      topics: ["AI Strategy", "Team Leadership", "Product Development", "Mentorship Training", "Industry Connections"],
      features: ["Leadership Training", "Mentor Opportunities", "Industry Connections", "Alumni Network"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const outcomes = [
    {
      icon: Brain,
      title: "Technical Skills",
      description: "Master AI/ML fundamentals, programming languages, and modern development tools"
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Build confidence, communication skills, and the ability to lead diverse teams"
    },
    {
      icon: Target,
      title: "Career Readiness",
      description: "Gain industry experience, build professional networks, and access internship opportunities"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Understand AI's global impact and develop solutions that benefit communities worldwide"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Program Graduate, Now AI Intern at Meta",
      quote: "YOUTH x AI didn't just teach me technical skills - it showed me how to use AI to make a real difference in the world."
    },
    {
      name: "Marcus Johnson",
      role: "AI Leadership Academy Alumni",
      quote: "The mentorship and community I found here opened doors I never knew existed. Now I'm helping other students discover their potential."
    }
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
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            AI/ML <span className="text-gradient">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive learning pathways designed to transform curious minds into confident AI leaders
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-purple-500/20 text-purple-300 px-4 py-2 text-base">
              <Users className="w-4 h-4 mr-2" />
              500+ Students
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 px-4 py-2 text-base">
              <Award className="w-4 h-4 mr-2" />
              Industry Recognized
            </Badge>
            <Badge className="bg-green-500/20 text-green-300 px-4 py-2 text-base">
              <Globe className="w-4 h-4 mr-2" />
              15+ Countries
            </Badge>
          </div>
        </motion.section>

        {/* Programs Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From beginner-friendly introductions to advanced leadership tracks, find the perfect program for your journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center`}>
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-white border-white/30">
                        {program.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {program.title}
                    </CardTitle>
                    <div className="flex gap-4 text-sm text-gray-300 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-1" />
                        {program.format}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Key Topics
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.topics.map((topic, i) => (
                          <Badge key={i} variant="outline" className="text-xs text-gray-300 border-gray-500">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Program Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 transition-all duration-300`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Learning Outcomes */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll <span className="text-gradient">Achieve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our programs are designed to deliver measurable outcomes that prepare you for success in the AI industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 text-center h-full">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{outcome.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {outcome.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Student <span className="text-gradient">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20">
                  <CardContent className="p-8">
                    <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Application Process */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Applications are open for our next cohort. Join hundreds of students already transforming their futures with AI.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Apply Online</h3>
                  <p className="text-gray-300 text-sm">Complete our simple application form</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Interview</h3>
                  <p className="text-gray-300 text-sm">Brief conversation with our team</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Start Learning</h3>
                  <p className="text-gray-300 text-sm">Begin your AI journey with us</p>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mr-4">
                  Apply Now
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}