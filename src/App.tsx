import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import PostPage from './components/PostPage';
import { 
  Search, DollarSign, Globe, Package, Mail, ExternalLink, Linkedin,
  Star, ChevronLeft, ChevronRight, ArrowRight, Award, Users, Target,
  Plane, BarChart3, Zap, PenTool, TrendingUp, Menu, X
} from 'lucide-react';
import PortfolioPreview from './components/PortfolioPreview';
import WhatsAppChat from './components/WhatsAppChat';
import ScrollToTop from './components/ScrollToTop';

const services = [ { icon: Plane, title: "Google Ads Management", description: "Strategic campaign setup, optimization, and management to maximize ROI and drive qualified traffic.", features: [ "Campaign Strategy", "Keyword Research", "Ad Copy Creation", "Bid Management", "Performance Tracking" ] }, { icon: Search, title: "SEO Optimization", description: "Comprehensive SEO services including local and technical optimization to improve search rankings.", features: [ "Technical SEO", "Local SEO", "Keyword Research", "Content Optimization", "Link Building" ] }, { icon: Globe, title: "WordPress Development", description: "Custom WordPress websites that are fast, secure, and optimized for conversions.", features: [ "Custom Design", "Speed Optimization", "Security Setup", "Mobile Responsive", "SEO Ready" ] }, { icon: PenTool, title: "Content Marketing", description: "Strategic content creation and marketing to engage audiences and drive conversions.", features: [ "Content Strategy", "Blog Writing", "Social Media", "Email Marketing", "Content Calendar" ] }, { icon: BarChart3, title: "Digital Strategy Consulting", description: "Comprehensive digital marketing strategy development and implementation guidance.", features: [ "Market Analysis", "Competitor Research", "Strategy Planning", "Implementation", "Performance Review" ] }, { icon: Zap, title: "Conversion Optimization", description: "Optimize your website and campaigns for maximum conversions and revenue growth.", features: [ "A/B Testing", "Landing Pages", "User Experience", "Analytics Setup", "Performance Tracking" ] } ];
const testimonials = [ { name: "Randibagley", country: "🇺🇸 United States", text: "Moz helped me create high-quality backlinks and even found additional sites himself. Clear communication, super-fast delivery, and spot-on strategy — already seeing results!" }, { name: "Matt Fitch", country: "🇺🇸 United States", text: "Mozahidul consistently delivers fast, accurate, and technically strong work. His visual skills and attention to detail are excellent. We'll definitely work with him again." }, { name: "Googleauroin", country: "🇮🇳 India", text: "Very professional and always ahead of deadlines. We've worked together many times — he never disappoints. Highly recommended for ongoing digital projects." }, { name: "JimmyJim123476", country: "🇦🇺 Australia", text: "Absolutely phenomenal! Professional, respectful, and sharp. Moz took my business to the next level and exceeded my expectations every single time." }, { name: "Badmem0ry", country: "🇨🇦 Canada", text: "Outstanding work. He took time to understand my goals, delivered top-tier virtual assistant support, and nailed exactly what I needed. A+!" }, { name: "christiandoyle", country: "🇺🇸 United States", text: "This seller is very ethical and a hard worker. After doing initial work for me he even went and did more work I requested before even paying paid. He delivered faster than expected and I will use him again. I had him make me a spreadsheet of directory listings and the details of each. Thank you, again Rise_Fast!" } ];

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();
  const nextTestimonial = () => { setCurrentTestimonial((prev) => (prev + 1) % testimonials.length); };
  const prevTestimonial = () => { setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length); };
  const goToTestimonial = (index: number) => { setCurrentTestimonial(index); };
  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };

  return (
    <div className="min-h-screen bg-white text-[#334155]">
      <header className={`fixed top-0 left-0 right-0 z-[9999] shadow-lg transition-all duration-300 ${ isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/20' : 'bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/10' }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center"> <img src="/Logo Mozahidul e.jpeg" alt="Mozahidul Islam Logo" className="h-8 md:h-12 w-auto object-contain" /> </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/#about" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group"> About <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span> </a>
              <a href="/#services" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group"> Services <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span> </a>
              <a href="/portfolio" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group"> Portfolio <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span> </a>
              <Link to="/blog" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group"> Blog <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span> </Link>
              <a href="/#testimonials" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group"> Testimonials <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span> </a>
              <a href="/#contact" className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm lg:text-base"> Contact </a>
            </nav>
            <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-lg text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/10 transition-all duration-300 z-[10000] relative" aria-label="Toggle mobile menu"> {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/10 shadow-2xl z-[9998] animate-fade-in-up">
              <nav className="px-4 py-6 space-y-3">
                <a href="/#about" onClick={toggleMobileMenu} className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"> About </a>
                <a href="/#services" onClick={toggleMobileMenu} className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"> Services </a>
                <a href="/portfolio" onClick={toggleMobileMenu} className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"> Portfolio </a>
                <Link to="/blog" onClick={toggleMobileMenu} className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"> Blog </Link>
                <a href="/#testimonials" onClick={toggleMobileMenu} className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"> Testimonials </a>
                <a href="/#contact" onClick={toggleMobileMenu} className="block bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-6 py-3 rounded-xl font-semibold text-center mt-4 hover:shadow-lg transition-all duration-300"> Contact </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      <main>
          {/* All your page sections... */}
      </main>
      <footer>
          {/* Your footer... */}
      </footer>
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppChat phoneNumber="8801738170257" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/portfolio" element={<PortfolioPreview />} />
      </Routes>
    </>
  );
}

export default App;
