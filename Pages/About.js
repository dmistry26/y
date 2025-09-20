import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart, Award, Globe, Sparkles, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description: "We believe AI should be accessible to all young people, regardless of their background, location, or resources."
    },
    {
      icon: Heart,
      title: "Ethics First",
      description: "Teaching responsible AI development and deployment with a focus on human-centered design and social impact."
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Encouraging creative problem-solving and out-of-the-box thinking to address real-world challenges."
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building a global network of young AI enthusiasts, mentors, and industry professionals."
    }
  ];

  const team = [
    {
      name: "Student Leaders",
      role: "Program Coordinators",
      description: "Passionate young people leading programs and mentoring their peers in AI literacy and application."
    },
    {
      name: "Industry Mentors",
      role: "Technical Advisors",
      description: "Experienced professionals from leading tech companies sharing real-world insights and career guidance."
    },
    {
      name: "Academic Partners",
      role: "Educational Consultants",
      description: "Researchers and professors from top universities ensuring our curriculum meets the highest standards."
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
              <Users className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            About <span className="text-gradient">YOUTH x AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a nonprofit organization dedicated to empowering young people with the knowledge, 
            skills, and opportunities to become leaders in the age of artificial intelligence.
          </p>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Founded by young entrepreneurs and AI enthusiasts, YOUTH x AI emerged from a simple observation: 
                    the artificial intelligence revolution is happening now, but young people are often left out of 
                    the conversation and the opportunities it creates.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We started with a vision to bridge this gap by creating accessible, engaging, and impactful 
                    programs that prepare the next generation not just to use AI, but to shape its development 
                    in ways that benefit all of humanity.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center glass-effect">
                      <Sparkles className="w-32 h-32 text-purple-400" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To democratize AI education and create pathways for young people to become 
                  ethical leaders and innovators in artificial intelligence, ensuring that 
                  the future of AI reflects the diversity and values of our global community.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardContent className="p-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Vision</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  A world where every young person has the opportunity to understand, create with, 
                  and shape artificial intelligence technology, fostering a future where AI serves 
                  humanity's greatest aspirations and addresses our most pressing challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every program we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Community</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse network of passionate individuals working together to shape the future of AI education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-purple-300 font-medium mb-4">{member.role}</p>
                    </div>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Making Impact Together
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Every day, we're working to ensure that the transformative power of artificial intelligence 
                is accessible to young people from all walks of life. Through education, mentorship, and 
                community building, we're creating pathways for the next generation to not just participate 
                in the AI revolution, but to lead it with wisdom, creativity, and compassion.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                  <div className="text-gray-300">Countries Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-gray-300">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">25+</div>
                  <div className="text-gray-300">Mentors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-gray-300">Programs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}