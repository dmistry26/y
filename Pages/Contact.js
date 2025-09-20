import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, Send, MessageSquare, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiry_type: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiry_type: ""
    });
    
    setIsSubmitting(false);
    // Show success message (in real app, you'd implement proper feedback)
    alert("Thank you! Your message has been sent successfully.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@youthxai.org",
      description: "Get in touch for general inquiries"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "San Francisco, CA",
      description: "Our headquarters in the heart of Silicon Valley"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM to 5 PM PST"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "9:00 AM - 5:00 PM PST",
      description: "Monday through Friday"
    }
  ];

  const quickContacts = [
    {
      title: "Program Inquiries",
      description: "Questions about our AI/ML programs",
      email: "programs@youthxai.org"
    },
    {
      title: "Partnership Opportunities", 
      description: "Collaborate with us on initiatives",
      email: "partnerships@youthxai.org"
    },
    {
      title: "Media & Press",
      description: "Press inquiries and media requests",
      email: "press@youthxai.org"
    },
    {
      title: "Technical Support",
      description: "Help with our platforms and tools",
      email: "support@youthxai.org"
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
              <Mail className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our programs, want to partner with us, 
            or simply want to learn more about YOUTH x AI.
          </p>
        </motion.section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry_type" className="text-white">Type of Inquiry</Label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => handleInputChange('inquiry_type', value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="program">Program Information</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="volunteer">Volunteer/Mentor</SelectItem>
                        <SelectItem value="press">Press/Media</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title} className="flex items-start">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4 mt-1">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-purple-300 font-medium mb-1">{item.info}</p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickContacts.map((contact, index) => (
                  <div key={contact.title} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{contact.description}</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-white mb-4">Follow Our Journey</h3>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                    <Globe className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                    <Users className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Have a question that's not covered here? Check out our comprehensive FAQ section 
                or reach out to us directly.
              </p>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl">
                View FAQ
              </Button>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}