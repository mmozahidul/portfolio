import React, { useEffect, useState } from 'react';
import { 
  Search, 
  DollarSign, 
  Globe, 
  Package, 
  Mail, 
  ExternalLink, 
  Linkedin,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Award,
  Users,
  Target,
  Plane,
  BarChart3,
  Zap,
  PenTool,
  TrendingUp,
  Menu,
  X
} from 'lucide-react';
import PortfolioPreview from './components/PortfolioPreview';
import WhatsAppChat from './components/WhatsAppChat';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  const services = [
    {
      icon: Plane,
      title: "Google Ads Management",
      description: "Strategic campaign setup, optimization, and management to maximize ROI and drive qualified traffic.",
      features: [
        "Campaign Strategy",
        "Keyword Research", 
        "Ad Copy Creation",
        "Bid Management",
        "Performance Tracking"
      ]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO services including local and technical optimization to improve search rankings.",
      features: [
        "Technical SEO",
        "Local SEO",
        "Keyword Research",
        "Content Optimization",
        "Link Building"
      ]
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress websites that are fast, secure, and optimized for conversions.",
      features: [
        "Custom Design",
        "Speed Optimization",
        "Security Setup",
        "Mobile Responsive",
        "SEO Ready"
      ]
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Strategic content creation and marketing to engage audiences and drive conversions.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Social Media",
        "Email Marketing",
        "Content Calendar"
      ]
    },
    {
      icon: BarChart3,
      title: "Digital Strategy Consulting",
      description: "Comprehensive digital marketing strategy development and implementation guidance.",
      features: [
        "Market Analysis",
        "Competitor Research",
        "Strategy Planning",
        "Implementation",
        "Performance Review"
      ]
    },
    {
      icon: Zap,
      title: "Conversion Optimization",
      description: "Optimize your website and campaigns for maximum conversions and revenue growth.",
      features: [
        "A/B Testing",
        "Landing Pages",
        "User Experience",
        "Analytics Setup",
        "Performance Tracking"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Randibagley",
      country: "🇺🇸 United States",
      text: "Moz helped me create high-quality backlinks and even found additional sites himself. Clear communication, super-fast delivery, and spot-on strategy — already seeing results!"
    },
    {
      name: "Matt Fitch",
      country: "🇺🇸 United States", 
      text: "Mozahidul consistently delivers fast, accurate, and technically strong work. His visual skills and attention to detail are excellent. We'll definitely work with him again."
    },
    {
      name: "Googleauroin",
      country: "🇮🇳 India",
      text: "Very professional and always ahead of deadlines. We've worked together many times — he never disappoints. Highly recommended for ongoing digital projects."
    },
    {
      name: "JimmyJim123476",
      country: "🇦🇺 Australia",
      text: "Absolutely phenomenal! Professional, respectful, and sharp. Moz took my business to the next level and exceeded my expectations every single time."
    },
    {
      name: "Badmem0ry",
      country: "🇨🇦 Canada",
      text: "Outstanding work. He took time to understand my goals, delivered top-tier virtual assistant support, and nailed exactly what I needed. A+!"
    },
    {
      name: "christiandoyle",
      country: "🇺🇸 United States",
      text: "This seller is very ethical and a hard worker. After doing initial work for me he even went and did more work I requested before even paying paid. He delivered faster than expected and I will use him again. I had him make me a spreadsheet of directory listings and the details of each. Thank you, again Rise_Fast!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-[#334155]">
      {/* Enhanced Professional Header with Dynamic Background */}
      <header className={`fixed top-0 left-0 right-0 z-[9999] shadow-lg transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/20' 
          : 'bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Logo Mozahidul e.jpeg" 
                alt="Mozahidul Islam Logo" 
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation with Enhanced Visibility */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/portfolio" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group">
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm lg:text-base">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button with Enhanced Visibility */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/10 transition-all duration-300 z-[10000] relative"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation with Enhanced Visibility */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/10 shadow-2xl z-[9998] animate-fade-in-up">
              <nav className="px-4 py-6 space-y-3">
                <a 
                  href="#about" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                >
                  Services
                </a>
                <a 
                  href="/portfolio" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                >
                  Portfolio
                </a>
                <a 
                  href="#testimonials" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  onClick={toggleMobileMenu} 
                  className="block bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-6 py-3 rounded-xl font-semibold text-center mt-4 hover:shadow-lg transition-all duration-300"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section with Fixed Text Visibility */}
      <section className="pt-20 md:pt-32 pb-24 bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] relative overflow-hidden">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-[#FACC15]/20 rounded-full"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#FACC15]/20 rounded-full"></div>
          <div className="absolute bottom-20 left-40 w-12 h-12 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            
            {/* Left Column - Content */}
            <div className="lg:pr-8">
              {/* Greeting */}
              <div className="mb-6 animate-fade-in-up">
                <span className="text-lg text-blue-100 font-medium">Hello! I'm</span>
                <h1 className="text-[#FACC15] text-2xl font-bold mt-1">Mozahidul Islam</h1>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
                Digital Marketing Expert
              </h2>

              {/* Description */}
              <p className="text-lg text-blue-100 leading-relaxed mb-8 animate-fade-in-up animation-delay-400 max-w-lg">
                Helping businesses grow through expert SEO, Google Ads, WordPress & marketing strategies that deliver measurable results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-600">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-[#FACC15] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:bg-[#FACC15]/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Hire Me
                  <ArrowRight size={18} />
                </a>
                <a 
                  href="/portfolio"
                  className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1E40AF] transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  View Portfolio
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in-up animation-delay-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FACC15] mb-1">340%</div>
                  <div className="text-sm text-blue-100 font-medium">Avg ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FACC15] mb-1">50+</div>
                  <div className="text-sm text-blue-100 font-medium">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FACC15] mb-1">8+</div>
                  <div className="text-sm text-blue-100 font-medium">Years Exp</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image with Circular Background */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-1000">
              {/* Large Circular Background */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-[#FACC15] to-[#FACC15]/80 rounded-full relative overflow-hidden">
                  {/* Professional Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-white">
                    <img 
                      src="https://mozahidul.online/Mozahidul.jpg"
                      alt="Mozahidul Islam - Digital Marketing Expert"
                      className="w-full h-full object-cover"
                      itemProp="image"
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border border-[#F3F4F6]">
                  <div className="flex items-center gap-1 text-sm text-[#334155] font-medium mb-2">
                    <span>FOLLOW ME ON:</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <a 
                      href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=md-mozahidul-islam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#004182] transition-all duration-300 hover:scale-105 text-sm shadow-lg"
                    >
                      <Linkedin size={16} />
                      Follow
                    </a>
                    <a 
                      href="https://fiverr.com/rise_fast" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#1DBF73] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href="mailto:mmozahiduli@gmail.com"
                      className="w-8 h-8 bg-[#EA4335] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Updated with Professional Image */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3 animate-pulse"></span>
                About Me
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                Digital Marketing Professional
              </h2>
              <p className="text-xl text-[#334155] max-w-3xl mx-auto leading-relaxed">
                Transforming businesses through data-driven marketing strategies and proven digital solutions
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              
              {/* Left Column - Story */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F3F4F6] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                    <Users size={18} className="text-white" />
                  </div>
                  My Story
                </h3>
                
                <div className="space-y-4 text-[#334155] leading-relaxed">
                  <p>
                    Hi, I'm Mozahidul Islam, a results-driven digital marketing freelancer with over 
                    <span className="font-semibold text-[#1E40AF]"> 8+ years of experience</span> helping clients succeed through Google Ads, SEO, 
                    and WordPress. I work with global clients to increase traffic, generate 
                    leads, and grow sales online.
                  </p>
                  
                  <p>
                    My expertise lies in creating data-driven marketing strategies that deliver 
                    measurable results. From optimizing Google Ads campaigns to 
                    implementing technical SEO solutions, I focus on ROI and sustainable 
                    growth for every client.
                  </p>
                </div>
              </div>

              {/* Right Column - Approach */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F3F4F6] hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                    <Target size={18} className="text-white" />
                  </div>
                  My Approach
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-1">Data-Driven Strategy</h4>
                      <p className="text-sm text-[#334155]">Every decision backed by analytics and performance metrics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-1">ROI-Focused Results</h4>
                      <p className="text-sm text-[#334155]">Prioritizing measurable outcomes and sustainable growth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-1">Continuous Optimization</h4>
                      <p className="text-sm text-[#334155]">Regular testing and refinement for peak performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-[#0F172A] to-[#334155] rounded-2xl p-8 mb-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Track Record of Success</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award size={32} className="text-[#1E40AF]" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">8+</div>
                    <div className="text-gray-300 font-medium">Years Experience</div>
                    <div className="text-sm text-gray-400 mt-1">In digital marketing</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={32} className="text-[#1E40AF]" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-300 font-medium">Happy Clients</div>
                    <div className="text-sm text-gray-400 mt-1">Across the globe</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp size={32} className="text-[#1E40AF]" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">340%</div>
                    <div className="text-gray-300 font-medium">Average ROAS</div>
                    <div className="text-sm text-gray-400 mt-1">Improvement achieved</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F3F4F6]">
              <h3 className="text-2xl font-bold text-[#0F172A] text-center mb-8 flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                  <BarChart3 size={18} className="text-white" />
                </div>
                Core Expertise
              </h3>
                
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0F172A]">Google Ads Management</span>
                    <span className="text-sm text-[#1E40AF] font-bold">95%</span>
                  </div>
                  <div className="w-full bg-[#F3F4F6] rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] h-3 rounded-full w-[95%]"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0F172A]">SEO Optimization</span>
                    <span className="text-sm text-[#1E40AF] font-bold">90%</span>
                  </div>
                  <div className="w-full bg-[#F3F4F6] rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] h-3 rounded-full w-[90%]"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0F172A]">WordPress Development</span>
                    <span className="text-sm text-[#1E40AF] font-bold">85%</span>
                  </div>
                  <div className="w-full bg-[#F3F4F6] rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0F172A]">Digital Strategy</span>
                    <span className="text-sm text-[#1E40AF] font-bold">92%</span>
                  </div>
                  <div className="w-full bg-[#F3F4F6] rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] h-3 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <p className="text-lg text-[#334155] mb-6">
                Ready to transform your digital presence?
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section - Redesigned to match attached image */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#F8F9FA] to-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">What I Do</h2>
            <p className="text-lg text-[#334155] max-w-3xl mx-auto">
              I offer comprehensive digital marketing services designed to help your business grow online and achieve measurable results.
            </p>
          </div>
          
          {/* Services Grid - 3x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-[#F3F4F6] hover:border-[#1E40AF]/30">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#1E40AF] rounded-xl flex items-center justify-center group-hover:bg-[#1D4ED8] transition-colors">
                    <service.icon size={32} className="text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#334155] leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#334155]">
                      <div className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16">
            <p className="text-lg text-[#334155] mb-6">
              Ready to take your business to the next level?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1D4ED8] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get Started Today
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <div id="portfolio">
        <PortfolioPreview />
      </div>

      {/* Testimonials Section - Enhanced with Slider */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E40AF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Client Feedback</h2>
          
          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#334155] to-[#475569] shadow-xl border border-[#475569]">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-12 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} className="fill-[#FACC15] text-[#FACC15]" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed italic font-medium">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="border-t border-gray-400 pt-6">
                      <div className="font-bold text-xl text-white mb-2">{testimonial.name}</div>
                      <div className="text-lg text-gray-300">{testimonial.country}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FACC15]/90 hover:bg-[#FACC15] text-[#0F172A] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FACC15]/90 hover:bg-[#FACC15] text-[#0F172A] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[#FACC15] scale-125' 
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid (Hidden on mobile, shown on larger screens) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#475569] p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[#475569]">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 leading-relaxed text-sm italic">"{testimonial.text}"</p>
                <div className="border-t border-[#64748B] pt-3">
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-300">{testimonial.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white to-[#F8F9FA] border-t border-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#0F172A]">Let's Connect</h2>
            <p className="text-xl mb-12 text-[#334155]">
              Interested in working together? Reach out directly or through my freelance profiles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:mmozahiduli@gmail.com"
                className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send a Message
                <Mail size={18} />
              </a>
              <a 
                href="https://fiverr.com/rise_fast" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-[#1E40AF] text-[#1E40AF] px-8 py-4 rounded-lg font-semibold hover:bg-[#1E40AF] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                Hire Me on Fiverr
                <ExternalLink size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=md-mozahidul-islam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0A66C2] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#004182] transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Linkedin size={18} />
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Footer */}
      <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E40AF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/Logo Mozahidul e.jpeg" 
                  alt="Mozahidul Islam Logo" 
                  className="h-12 w-auto object-contain mr-4 bg-white rounded-lg p-2"
                />
                <div>
                  <div className="font-bold text-2xl text-white">Mozahidul Islam</div>
                  <div className="text-blue-200">Digital Marketing Expert</div>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
                Helping businesses grow through expert SEO, Google Ads, WordPress & marketing strategies that deliver measurable results.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=md-mozahidul-islam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#004182] transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={16} />
                  Follow on LinkedIn
                </a>
                <a 
                  href="https://fiverr.com/rise_fast" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ExternalLink size={20} />
                </a>
                <a 
                  href="mailto:mmozahiduli@gmail.com"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#FACC15]">Services</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">Google Ads Management</a></li>
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">SEO Optimization</a></li>
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">WordPress Development</a></li>
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">Content Marketing</a></li>
                <li><a href="#services" className="hover:text-[#FACC15] transition-colors">Digital Strategy</a></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#FACC15]">Quick Links</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#about" className="hover:text-[#FACC15] transition-colors">About Me</a></li>
                <li><a href="/portfolio" className="hover:text-[#FACC15] transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-[#FACC15] transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-[#FACC15] transition-colors">Contact</a></li>
                <li><a href="/portfolio" className="hover:text-[#FACC15] transition-colors">Case Studies</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 mb-4 md:mb-0">
              © {currentYear} Mozahidul Islam. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-blue-200 text-sm">
              <span>🌟 8+ Years Experience</span>
              <span>🚀 340% Avg ROAS</span>
              <span>✅ 50+ Happy Clients</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat phoneNumber="8801738170257" />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Schema.org Structured Data for Person */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mozahidul Islam",
          "alternateName": "Mozahidul",
          "url": "https://mozahidul.online",
          "image": {
            "@type": "ImageObject",
            "url": "https://mozahidul.online/Mozahidul.jpg",
            "width": 400,
            "height": 400
          },
          "sameAs": [
            "https://www.linkedin.com/in/md-mozahidul-islam/",
            "https://fiverr.com/rise_fast"
          ],
          "jobTitle": "Digital Marketing Expert",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance Digital Marketing"
          },
          "description": "Mozahidul Islam is a digital marketing expert with 8+ years of experience specializing in Google Ads, SEO, and WordPress solutions for businesses worldwide.",
          "knowsAbout": [
            "Google Ads Management",
            "Search Engine Optimization",
            "WordPress Development",
            "Digital Marketing Strategy",
            "E-commerce Marketing",
            "Content Marketing"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Digital Marketing Specialist",
            "occupationLocation": {
              "@type": "Place",
              "name": "Global (Remote)"
            },
            "skills": [
              "Google Ads",
              "SEO",
              "WordPress",
              "Digital Strategy",
              "Content Marketing"
            ]
          },
          "award": [
            "340% Average ROAS Improvement",
            "50+ Successful Projects Completed",
            "8+ Years Professional Experience"
          ]
        })
      }} />
    </div>
  );
}

export default App;