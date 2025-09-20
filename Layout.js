import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Brain, Users, BookOpen, Mic, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { title: "Home", url: createPageUrl("Home"), icon: Brain },
    { title: "About", url: createPageUrl("About"), icon: Users },
    { title: "AI/ML Program", url: createPageUrl("Program"), icon: Brain },
    { title: "Journal", url: createPageUrl("Journal"), icon: BookOpen },
    { title: "Interviews", url: createPageUrl("Interviews"), icon: Mic },
    { title: "Contact", url: createPageUrl("Contact"), icon: Mail },
    { title: "Get Involved", url: createPageUrl("GetInvolved"), icon: Heart },
  ];

  const isActive = (url) => location.pathname === url;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900">
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #1e1b4b 100%);
          --accent-purple: #8b5cf6;
          --accent-blue: #3b82f6;
        }
        
        body {
          background: var(--primary-gradient);
          color: white;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">YOUTH x AI</h1>
                <p className="text-xs text-gray-300">Empowering Tomorrow's Innovators</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                    isActive(item.url) 
                      ? 'bg-white/15 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.url) 
                          ? 'bg-white/15 text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">YOUTH x AI</p>
                <p className="text-xs text-gray-400">© 2024 All rights reserved</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Bridging the gap between youth and artificial intelligence</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}