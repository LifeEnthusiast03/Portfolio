import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, FileText, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

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
      icon: <Mail className="w-7 h-7" />,
      title: "Email",
      subtitle: "Drop me a line",
      value: "sahasougata820@gmail.com",
      link: "mailto:sahasougata820@gmail.com",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Phone",
      subtitle: "Let's talk",
      value: "+91 6296824383",
      link: "tel:+91-6296824383",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Location",
      subtitle: "Find me here",
      value: "Midnapore, West Bengal",
      link: "#",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-500/10 via-indigo-500/10 to-purple-500/10"
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

  const ContactCard = ({ info, index }) => (
    <div
      className={`group relative bg-gradient-to-br ${info.bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
        hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
      
      {/* Floating icon */}
      <div className={`relative p-4 bg-gradient-to-br ${info.gradient} rounded-2xl mb-6 inline-block shadow-2xl transform transition-all duration-500 ${hoveredCard === index ? 'rotate-6 scale-110' : ''}`}>
        <div className="text-white">
          {info.icon}
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
          {info.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
          {info.subtitle}
        </p>
        <a
          href={info.link}
          className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group/link"
        >
          <span className="mr-2">{info.value}</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${info.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
    </div>
  );

  return (
    <section id="Contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent transition-all duration-1000 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Let's Connect
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-8 transition-all duration-1000 delay-200 ${
            hasAnimated ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`} />
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Ready to bring your ideas to life? I'm here to help you create something extraordinary. Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} index={index} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-600 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Send Message</h3>
                  <p className="text-gray-400">Tell me about your project</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-white/20"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-white/20"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-white placeholder-gray-400 transition-all duration-300 group-hover:border-white/20"
                    placeholder="Project Discussion"
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-white placeholder-gray-400 transition-all duration-300 resize-none group-hover:border-white/20"
                    placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you."
                    required
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-8 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500/20 flex items-center justify-center ${
                    isSubmitted 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                      : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-3" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
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