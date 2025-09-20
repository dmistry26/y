import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Building, 
  HandHeart, 
  Code, 
  Lightbulb, 
  Globe,
  ArrowRight,
  Calendar,
  Clock,
  Target,
  Award,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function GetInvolved() {
  const opportunities = [
    {
      icon: GraduationCap,
      title: "Student Programs",
      subtitle: "For Ages 13-25",
      description: "Join our comprehensive AI/ML programs designed for young minds ready to explore the future of technology.",
      benefits: ["Free Access", "1:1 Mentorship", "Project Portfolio", "Certificate"],
      commitment: "8-16 weeks",
      color: "from-purple-500 to-pink-500",
      cta: "Apply Now"
    },
    {
      icon: Users,
      title: "Volunteer Mentor",
      subtitle: "Share Your Expertise", 
      description: "Guide and inspire the next generation of AI leaders through one-on-one mentorship and group sessions.",
      benefits: ["Flexible Schedule", "Remote Options", "Community Impact", "Professional Development"],
      commitment: "2-4 hours/week",
      color: "from-blue-500 to-purple-500",
      cta: "Become a Mentor"
    },
    {
      icon: Building,
      title: "Corporate Partnership",
      subtitle: "Scale Your Impact",
      description: "Partner with us to provide resources, expertise, and opportunities for young AI enthusiasts worldwide.",
      benefits: ["Brand Visibility", "Talent Pipeline", "CSR Goals", "Innovation Access"],
      commitment: "Flexible",
      color: "from-green-500 to-blue-500",
      cta: "Partner With Us"
    },
    {
      icon: HandHeart,
      title: "Community Volunteer",
      subtitle: "Support Our Mission",
      description: "Help with events, outreach, content creation, and administrative tasks that keep our programs running.",
      benefits: ["Skill Building", "Network Growth", "Resume Builder", "Social Impact"],
      commitment: "3-5 hours/week",
      color: "from-orange-500 to-red-500",
      cta: "Volunteer Now"
    }
  ];

  const impactAreas = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Help us expand AI education to underserved communities worldwide"
    },
    {
      icon: Code,
      title: "Technical Innovation",
      description: "Contribute to open-source projects and educational tools"
    },
    {
      icon: Lightbulb,
      title: "Curriculum Development",
      description: "Design and improve our learning materials and programs"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Provide industry insights and career mentorship to students"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Gonzalez",
      role: "Senior AI Researcher at Microsoft",
      type: "Mentor",
      quote: "Mentoring through YOUTH x AI has been incredibly rewarding. Seeing young minds grasp complex AI concepts and apply them creatively gives me hope for the future.",
      duration: "2 years"
    },
    {
      name: "Alex Kim",
      role: "Software Engineer at Google",
      type: "Alumni & Mentor", 
      quote: "YOUTH x AI transformed my career path. Now as a mentor, I get to give back and help other students discover their passion for AI just like I did.",
      duration: "3 years (student + mentor)"
    },
    {
      name: "TechCorp Industries",
      role: "Corporate Partner",
      type: "Partner",
      quote: "Our partnership with YOUTH x AI has connected us with incredible young talent and helped us fulfill our commitment to diversity in tech.",
      duration: "18 months"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Students" },
    { number: "50+", label: "Volunteer Mentors" },
    { number: "15+", label: "Corporate Partners" },
    { number: "25+", label: "Countries Reached" }
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
              <Heart className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Get <span className="text-gradient">Involved</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Join our mission to democratize AI education and empower the next generation of innovators. 
            There's a place for everyone in our community.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white px-6 py-3 text-lg font-medium border border-white/20">
              <Sparkles className="w-5 h-5 mr-2" />
              Multiple Ways to Make an Impact
            </Badge>
          </div>
        </motion.section>

        {/* Impact Stats */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Opportunities Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ways to <span className="text-gradient">Contribute</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a student, professional, organization, or simply passionate about AI education, 
              we have opportunities that match your interests and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${opportunity.color} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="outline" className="text-white border-white/30">
                          {opportunity.subtitle}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {opportunity.title}
                      </CardTitle>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {opportunity.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          What You'll Get
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {opportunity.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center text-sm text-gray-300">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="font-medium">Time Commitment:</span>
                          <span className="ml-2">{opportunity.commitment}</span>
                        </div>
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${opportunity.color} hover:opacity-90 transition-all duration-300 py-3 text-lg font-semibold`}>
                        {opportunity.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Impact Areas */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your contributions directly support these key areas of our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="glass-effect border-white/20 hover:border-white/30 transition-all duration-300 text-center h-full">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {area.description}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community <span className="text-gradient">Voices</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our community members about their experience making an impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-purple-500/20 text-purple-300 text-xs">
                        {testimonial.type}
                      </Badge>
                      <div className="text-sm text-gray-400">
                        {testimonial.duration}
                      </div>
                    </div>
                    <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
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

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl">
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of students, mentors, and partners who are shaping the future of AI education. 
                Your contribution, no matter how big or small, makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Call
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Questions? Reach out to us at <span className="text-purple-300">partnerships@youthxai.org</span>
              </p>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}