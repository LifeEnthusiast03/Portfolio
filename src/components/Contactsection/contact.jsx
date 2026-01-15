import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, FileText, ArrowRight, CheckCircle, Globe, Code, Coffee, Star } from 'lucide-react';

const ContactSection = ({ isVisible = true }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      subtitle: "Drop me a line",
      value: "sahasougata820@gmail.com",
      link: "mailto:sahasougata820@gmail.com",
      gradient: "from-blue-600 to-cyan-600",
      hoverGradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/10"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      subtitle: "Let's have a chat",
      value: "+91 6296824383",
      link: "tel:+91-6296824383",
      gradient: "from-indigo-600 to-purple-600",
      hoverGradient: "from-indigo-500 to-purple-500",
      shadowColor: "shadow-indigo-500/10"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      subtitle: "Based in India",
      value: "Midnapore, West Bengal",
      link: "#",
      gradient: "from-gray-600 to-gray-700",
      hoverGradient: "from-gray-500 to-gray-600",
      shadowColor: "shadow-gray-500/10"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="Contact" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0a0a0a]">
      {/* Dotted Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dotted patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:52px_52px] animate-pulse" style={{animationDuration: '4.5s'}}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
        
        {/* Ripple Effects */}
        <div className="ripple top-1/4 right-1/3 w-40 h-40 bg-blue-500/12" style={{animationDelay: '0s'}}></div>
        <div className="ripple bottom-1/3 left-1/4 w-48 h-48 bg-purple-500/10" style={{animationDelay: '1.5s'}}></div>
        <div className="ripple top-2/3 right-1/2 w-36 h-36 bg-cyan-500/12" style={{animationDelay: '3s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '6s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6 transition-all duration-1000 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">Ready for new projects</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 delay-200 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className={`text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Have a project in mind? I'm always interested in discussing new opportunities 
            and bringing innovative ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Cards */}
          <div className={`lg:col-span-1 space-y-4 transition-all duration-1000 delay-600 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group relative p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.2)] hover:bg-white/10`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-r ${hoveredCard === index ? info.hoverGradient : info.gradient} transition-all duration-300 shadow-lg`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-200 mb-1 group-hover:text-white transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2 group-hover:text-gray-400 transition-colors">
                      {info.subtitle}
                    </p>
                    <a
                      href={info.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center group/link text-sm"
                    >
                      <span className="mr-2">{info.value}</span>
                      <ArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
                
                {/* Subtle hover glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            ))}

            {/* Additional Info */}
            <div className="p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center space-x-3 mb-3">
                <Code className="w-4 h-4 text-blue-400" />
                <h3 className="text-base font-semibold text-gray-200">Quick Facts</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <Coffee className="w-3 h-3 text-blue-400" />
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-3 h-3 text-blue-400" />
                  <span>Open to remote collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-3 h-3 text-blue-400" />
                  <span>Available for freelance projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-800 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center mb-6">
                <div className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mr-3 shadow-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200">Send Message</h3>
                  <p className="text-gray-500 text-sm">Tell me about your project</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/50 rounded-lg focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 hover:border-gray-700/50"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/50 rounded-lg focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 hover:border-gray-700/50"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/50 rounded-lg focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 hover:border-gray-700/50"
                    placeholder="Project Discussion"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/50 rounded-lg focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 resize-none hover:border-gray-700/50"
                    placeholder="Tell me about your project ideas, requirements, or any questions you have. I'm excited to hear from you!"
                    required
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center justify-center ${
                    isSubmitted 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-green-500/20' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-3"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-3" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;