import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Star, Tag, MapPin, Menu, X, Linkedin } from 'lucide-react';
import WhatsAppChat from './WhatsAppChat';
import ScrollToTop from './ScrollToTop';

interface PortfolioItem {
  id: number;
  title: string;
  summary: string;
  coverImage: string;
  category: string;
  dateRange: string;
  results: string[];
  client: string;
  location: string;
  rating: number;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Google Ads Campaign Optimization",
    summary: "Transformed a struggling Shopify store's advertising performance through strategic campaign restructuring, advanced audience targeting, and conversion optimization. Achieved 340% ROAS improvement within 90 days.",
    coverImage: "🛍️",
    category: "Google Ads",
    dateRange: "Dec 5 2024 – Feb 28 2025",
    results: [
      "340% increase in ROAS",
      "65% reduction in cost per acquisition",
      "280% boost in monthly revenue",
      "45% improvement in conversion rate"
    ],
    client: "TrendVista Fashions",
    location: "Los Angeles • USA",
    rating: 5,
    tags: ["Google Ads", "E-commerce", "Shopify", "Conversion Optimization"]
  },
  {
    id: 2,
    title: "Complete SEO Overhaul for Local Service Business",
    summary: "Conducted comprehensive SEO audit and implementation for a local HVAC company. Focused on technical SEO, local optimization, and content strategy to dominate local search results.",
    coverImage: "📈",
    category: "SEO",
    dateRange: "Aug 15 – Nov 30 2024",
    results: [
      "280% increase in organic traffic",
      "First page ranking for 15+ keywords",
      "450% boost in local leads",
      "85% improvement in site speed"
    ],
    client: "CoolBreeze Heating & Air",
    location: "Austin • USA",
    rating: 5,
    tags: ["SEO", "Local SEO", "Technical SEO", "Content Strategy"]
  },
  {
    id: 3,
    title: "Custom WordPress E-commerce Development",
    summary: "Built a high-performance WordPress e-commerce site with custom features, mobile optimization, and integrated payment systems. Focused on user experience and conversion optimization.",
    coverImage: "💻",
    category: "WordPress",
    dateRange: "Jul 1 – Oct 10 2024",
    results: [
      "95+ PageSpeed score",
      "60% increase in mobile conversions",
      "Custom checkout optimization",
      "Integrated inventory management"
    ],
    client: "Aurora Artisan Jewelry",
    location: "Brighton • UK",
    rating: 5,
    tags: ["WordPress", "E-commerce", "Custom Development", "UX Design"]
  },
  {
    id: 4,
    title: "Multi-Location Local SEO Strategy",
    summary: "Developed and executed a comprehensive local SEO strategy for a restaurant chain with 8 locations. Optimized Google My Business profiles, local citations, and location-specific content.",
    coverImage: "📍",
    category: "Local SEO",
    dateRange: "Jun 10 – Sep 25 2024",
    results: [
      "#1 ranking for primary keywords",
      "320% increase in local calls",
      "180% boost in foot traffic",
      "Consistent 4.8+ star ratings"
    ],
    client: "SpiceRoute Dining Group",
    location: "Singapore (8 locations)",
    rating: 5,
    tags: ["Local SEO", "Google My Business", "Multi-location", "Reputation Management"]
  },
  {
    id: 5,
    title: "Content Marketing & Lead Generation Campaign",
    summary: "Created and executed a comprehensive content marketing strategy including blog content, social media, and email campaigns. Generated high-quality leads through valuable, educational content.",
    coverImage: "✍️",
    category: "Content Marketing",
    dateRange: "Apr 1 – Aug 15 2024",
    results: [
      "500+ qualified leads generated",
      "250% increase in email subscribers",
      "180% boost in social engagement",
      "40% improvement in lead quality"
    ],
    client: "NexaCore Software",
    location: "Toronto • Canada",
    rating: 5,
    tags: ["Content Marketing", "Lead Generation", "Email Marketing", "Social Media"]
  },
  {
    id: 6,
    title: "WordPress Speed & Performance Optimization",
    summary: "Optimized a slow-loading WordPress site through technical improvements, image optimization, caching implementation, and code cleanup. Achieved dramatic performance improvements.",
    coverImage: "⚡",
    category: "WordPress",
    dateRange: "May 1 – Jul 20 2024",
    results: [
      "85% reduction in load time",
      "95+ Google PageSpeed score",
      "60% decrease in bounce rate",
      "40% increase in page views"
    ],
    client: "BrightPath Consulting Group",
    location: "Sydney • Australia",
    rating: 5,
    tags: ["WordPress", "Performance", "Speed Optimization", "Technical SEO"]
  }
];

const categories = ["All", "Google Ads", "SEO", "WordPress", "Local SEO", "Content Marketing"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // SEO Meta Tags for Portfolio Page
  useEffect(() => {
    // Update page title
    document.title = "Portfolio & Case Studies - Mozahidul Islam | Digital Marketing Expert";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore detailed case studies and portfolio of Mozahidul Islam\'s successful digital marketing projects. See real results from Google Ads, SEO, and WordPress development work.');
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Portfolio & Case Studies - Mozahidul Islam | Digital Marketing Expert');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Explore detailed case studies and portfolio of Mozahidul Islam\'s successful digital marketing projects. See real results from Google Ads, SEO, and WordPress development work.');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://mozahidul.online/portfolio');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://mozahidul.online/portfolio');

    // Cleanup function to restore original meta tags when component unmounts
    return () => {
      document.title = "Mozahidul Islam – Digital Marketing Expert";
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Mozahidul Islam is a digital marketing freelancer specializing in SEO, Google Ads, and WordPress. Let\'s grow your business together.');
      }
      if (ogTitle) {
        ogTitle.setAttribute('content', 'Mozahidul Islam – Digital Marketing Expert');
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', 'Mozahidul Islam is a digital marketing freelancer specializing in SEO, Google Ads, and WordPress. Let\'s grow your business together.');
      }
      if (ogUrl) {
        ogUrl.setAttribute('content', 'https://mozahidul.online/');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Professional Header with Better Visibility */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/10 z-[9999] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Back Button & Logo with Better Contrast */}
            <div className="flex items-center gap-6">
              <a 
                href="/"
                className="flex items-center gap-2 md:gap-3 text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold group text-sm md:text-base"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </a>
              <div className="hidden sm:block w-px h-8 bg-[#1E40AF]/20"></div>
              <img 
                src="/Logo Mozahidul e.jpeg" 
                alt="Mozahidul Islam Logo" 
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation with Better Contrast */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/#about" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/#services" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/#testimonials" className="text-[#0F172A] hover:text-[#1E40AF] transition-all duration-300 font-semibold text-base lg:text-lg relative group">
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/#contact" className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm lg:text-base">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button with Better Contrast */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/10 transition-all duration-300 z-[10000] relative"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation with Better Contrast */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-[#1E40AF]/10 shadow-2xl z-[9998] animate-fade-in-up">
              <nav className="px-4 py-6 space-y-3">
                <a 
                  href="/#about" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                >
                  About
                </a>
                <a 
                  href="/#services" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                >
                  Services
                </a>
                <a 
                  href="/#testimonials" 
                  onClick={toggleMobileMenu} 
                  className="block text-[#0F172A] hover:text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                >
                  Testimonials
                </a>
                <a 
                  href="/#contact" 
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

      {/* Enhanced Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FACC15]/20 to-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-white/10 to-[#FACC15]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Portfolio & Case Studies
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Detailed breakdowns of successful digital marketing projects and their measurable results
            </p>
            
            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#FACC15] text-[#0F172A] shadow-xl scale-105'
                      : 'bg-white/20 text-white border-2 border-white/30 hover:border-[#FACC15] hover:text-[#FACC15] hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {filteredItems.map((item, index) => (
              <article 
                key={item.id}
                className={`bg-gradient-to-br from-[#F3F4F6] to-white rounded-3xl shadow-lg border border-[#1E40AF]/10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex group`}
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                {/* Enhanced Cover Image/Icon */}
                <div className="md:w-1/3 bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] flex items-center justify-center p-16 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FACC15]/20 to-transparent"></div>
                  <div className="text-9xl relative z-10 group-hover:scale-110 transition-transform duration-500">{item.coverImage}</div>
                </div>

                {/* Enhanced Content */}
                <div className="md:w-2/3 p-10 md:p-12">
                  {/* Enhanced Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-[#334155] text-sm font-medium">
                      <Calendar size={16} />
                      <time dateTime={item.dateRange}>{item.dateRange}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-[#FACC15] text-[#FACC15]" />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 leading-tight" itemProp="name">
                    {item.title}
                  </h2>

                  {/* Enhanced Summary */}
                  <p className="text-[#334155] mb-8 leading-relaxed text-lg" itemProp="description">
                    {item.summary}
                  </p>

                  {/* Enhanced Results */}
                  <div className="mb-8">
                    <h3 className="font-bold text-[#0F172A] mb-4 text-xl">Key Results:</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {item.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[#334155] bg-white p-4 rounded-xl border border-[#1E40AF]/10">
                          <div className="w-3 h-3 bg-[#10B981] rounded-full flex-shrink-0"></div>
                          <span className="font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {item.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-white text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 border-2 border-[#1E40AF]/20 hover:border-[#1E40AF] transition-colors"
                        itemProp="keywords"
                      >
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Client & Location */}
                  <div className="text-sm text-[#334155] mb-8 space-y-2 bg-[#F3F4F6] p-6 rounded-xl">
                    <div className="flex items-center gap-2">
                      <strong className="text-[#0F172A] text-base">Client:</strong> 
                      <span className="text-base" itemProp="client">{item.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#1E40AF]" />
                      <span className="text-base" itemProp="locationCreated">{item.location}</span>
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://fiverr.com/rise_fast"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#1E40AF] to-[#1D4ED8] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    >
                      Get Similar Results
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href="https://wa.me/8801738170257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-[#1E40AF] text-[#1E40AF] px-8 py-4 rounded-xl font-bold hover:bg-[#1E40AF] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    >
                      Discuss Your Project
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Enhanced Bottom CTA */}
          <div className="text-center mt-20 p-12 bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] rounded-3xl border border-[#1E40AF]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FACC15]/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss how I can help grow your business with proven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://fiverr.com/rise_fast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FACC15] text-[#0F172A] px-10 py-5 rounded-xl font-bold hover:bg-[#FACC15]/90 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                >
                  Start Your Project
                  <ExternalLink size={20} />
                </a>
                <a 
                  href="https://wa.me/8801738170257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#FACC15] text-[#FACC15] px-10 py-5 rounded-xl font-bold hover:bg-[#FACC15] hover:text-[#0F172A] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                >
                  Chat on WhatsApp
                </a>
              </div>
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
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#FACC15]">Services</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="/#services" className="hover:text-[#FACC15] transition-colors">Google Ads Management</a></li>
                <li><a href="/#services" className="hover:text-[#FACC15] transition-colors">SEO Optimization</a></li>
                <li><a href="/#services" className="hover:text-[#FACC15] transition-colors">WordPress Development</a></li>
                <li><a href="/#services" className="hover:text-[#FACC15] transition-colors">Content Marketing</a></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#FACC15]">Quick Links</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="/#about" className="hover:text-[#FACC15] transition-colors">About Me</a></li>
                <li><a href="/" className="hover:text-[#FACC15] transition-colors">Home</a></li>
                <li><a href="/#testimonials" className="hover:text-[#FACC15] transition-colors">Testimonials</a></li>
                <li><a href="/#contact" className="hover:text-[#FACC15] transition-colors">Contact</a></li>
                <li>
                  <a 
                    href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=md-mozahidul-islam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-3 py-2 rounded-lg font-medium hover:bg-[#004182] transition-all duration-300 hover:scale-105 text-sm mt-2"
                  >
                    <Linkedin size={14} />
                    Follow on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 mb-4 md:mb-0">
              © 2025 Mozahidul Islam. All rights reserved.
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

      {/* Schema.org Structured Data for Portfolio */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Portfolio & Case Studies - Mozahidul Islam",
          "description": "Detailed case studies and portfolio of successful digital marketing projects by Mozahidul Islam, showcasing real results from Google Ads, SEO, and WordPress development work.",
          "url": "https://mozahidul.online/portfolio",
          "author": {
            "@type": "Person",
            "name": "Mozahidul Islam",
            "url": "https://mozahidul.online",
            "jobTitle": "Digital Marketing Expert",
            "sameAs": [
              "https://www.linkedin.com/in/md-mozahidul-islam/",
              "https://fiverr.com/rise_fast"
            ]
          },
          "mainEntity": portfolioItems.map(item => ({
            "@type": "CreativeWork",
            "name": item.title,
            "description": item.summary,
            "author": {
              "@type": "Person",
              "name": "Mozahidul Islam"
            },
            "dateCreated": item.dateRange,
            "keywords": item.tags.join(", "),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": item.rating,
              "bestRating": 5,
              "worstRating": 1,
              "ratingCount": 1
            }
          })),
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mozahidul.online"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Portfolio",
                "item": "https://mozahidul.online/portfolio"
              }
            ]
          }
        })
      }} />
    </div>
  );
}