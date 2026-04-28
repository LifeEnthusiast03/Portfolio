import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, User, FileText, ArrowRight, CheckCircle, Globe, Code, Coffee, Star } from 'lucide-react';
import Particles from '../Particles';

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  value: string;
  link: string;
  gradient: string;
  hoverGradient: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      subtitle: 'Drop me a line',
      value: 'sahasougata820@gmail.com',
      link: 'mailto:sahasougata820@gmail.com',
      gradient: 'from-blue-600 to-cyan-600',
      hoverGradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      subtitle: 'Based in India',
      value: 'Midnapore, West Bengal',
      link: '#',
      gradient: 'from-gray-600 to-gray-700',
      hoverGradient: 'from-gray-500 to-gray-600',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json() as { success: boolean; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong.');
      }
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-violet-600/8 blur-[120px]" />
      </div>
      <Particles />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-gray-800/70 mb-6 hover:border-blue-600/30 transition-all"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">Ready for new projects</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? I'm always interested in discussing new opportunities
            and bringing innovative ideas to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative p-5 rounded-xl bg-black/50 backdrop-blur-xl border border-gray-800/70 hover:border-blue-500/40 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.2)] hover:bg-black/60"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-r ${hoveredCard === index ? info.hoverGradient : info.gradient} transition-all duration-300 shadow-lg`}>
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-200 mb-1 group-hover:text-white transition-colors">{info.title}</h3>
                    <p className="text-gray-500 text-sm mb-2 group-hover:text-gray-400 transition-colors">{info.subtitle}</p>
                    <a href={info.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center group/link text-sm">
                      <span className="mr-2">{info.value}</span>
                      <ArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            ))}

            <div className="p-5 rounded-xl bg-black/50 backdrop-blur-xl border border-gray-800/70 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <Code className="w-4 h-4 text-blue-400" />
                <h3 className="text-base font-semibold text-gray-200">Quick Facts</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-3"><Coffee className="w-3 h-3 text-blue-400" /><span>Usually responds within 24 hours</span></div>
                <div className="flex items-center space-x-3"><Globe className="w-3 h-3 text-blue-400" /><span>Open to remote collaborations</span></div>
                <div className="flex items-center space-x-3"><Star className="w-3 h-3 text-blue-400" /><span>Available for freelance projects</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 rounded-xl bg-black/50 backdrop-blur-xl border border-gray-800/70">
              <div className="flex items-center mb-6">
                <div className="p-2.5 bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg mr-3 shadow-lg">
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
                      <User className="w-4 h-4 inline mr-2" />Full Name
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/70 rounded-lg focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 hover:border-gray-700/70"
                      placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />Email Address
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/70 rounded-lg focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 hover:border-gray-700/70"
                      placeholder="john@example.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />Subject
                  </label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/70 rounded-lg focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 hover:border-gray-700/70"
                    placeholder="Project Discussion" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />Message
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4}
                    className="w-full px-3 py-2.5 bg-black/50 border border-gray-800/70 rounded-lg focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-gray-200 placeholder-gray-600 transition-all duration-300 resize-none hover:border-gray-700/70"
                    placeholder="Tell me about your project ideas..." required />
                </div>
                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    <span>⚠️</span><span>{error}</span>
                  </div>
                )}
                <button
                  type="button" onClick={handleSubmit} disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center justify-center ${
                    isSubmitted ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-blue-700 to-blue-600'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'}`}
                >
                  {isSubmitting ? (
                    <><div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-3" />Sending...</>
                  ) : isSubmitted ? (
                    <><CheckCircle className="w-4 h-4 mr-3" />Message Sent! Check your inbox ✉️</>
                  ) : (
                    <><Send className="w-4 h-4 mr-3" />Send Message</>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
