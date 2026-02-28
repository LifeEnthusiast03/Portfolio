import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! 👋 I\'m here to answer questions about me. Feel free to ask anything!',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sample Q&A knowledge base - customize this with your information
  const knowledgeBase = {
    'skills': {
      keywords: ['skill', 'technology', 'tech stack', 'programming', 'languages', 'what can you do', 'expertise'],
      response: 'I have expertise in various technologies including React, JavaScript, Tailwind CSS, and modern web development. Check out the Skills section to see my complete tech stack!'
    },
    'projects': {
      keywords: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'showcase'],
      response: 'I\'ve worked on several exciting projects showcasing my development skills. You can explore them in detail in the Projects section of my portfolio!'
    },
    'education': {
      keywords: ['education', 'study', 'degree', 'university', 'college', 'school', 'learn'],
      response: 'You can find information about my educational background in the Education section. I\'m passionate about continuous learning and self-improvement!'
    },
    'contact': {
      keywords: ['contact', 'reach', 'email', 'hire', 'available', 'connect', 'get in touch'],
      response: 'I\'d love to hear from you! You can reach me through the Contact section at the bottom of the page. Feel free to send me a message!'
    },
    'experience': {
      keywords: ['experience', 'work experience', 'job', 'career', 'background'],
      response: 'I have experience in web development and creating modern, responsive applications. Check out my Projects section to see examples of my work!'
    },
    'about': {
      keywords: ['about', 'who are you', 'tell me', 'yourself', 'introduce'],
      response: 'I\'m a passionate developer focused on creating beautiful and functional web applications. Explore my portfolio to learn more about my work and skills!'
    },
    'hobby': {
      keywords: ['hobby', 'hobbies', 'interest', 'free time', 'fun', 'like to do'],
      response: 'When I\'m not coding, I enjoy exploring new technologies, working on side projects, and staying up to date with the latest web development trends!'
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings|good morning|good evening)/i)) {
      return 'Hello! 👋 How can I help you today? Feel free to ask about my skills, projects, education, or how to contact me!';
    }

    // Check knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Default response
    return 'That\'s an interesting question! You can explore different sections of my portfolio to learn more about me. Try asking about my skills, projects, education, or how to contact me!';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    
    const currentInput = inputValue;
    setInputValue('');

    // Add bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getBotResponse(currentInput),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 left-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-[0_8px_32px_0_rgba(147,51,234,0.4)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group backdrop-blur-xl border border-purple-500/30 ${
          isOpen ? 'rotate-0' : ''
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-8 z-50 w-96 h-[500px] bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] border border-gray-800 flex flex-col overflow-hidden animate-slideUp">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-semibold text-white">Ask Me Anything</h3>
                <p className="text-xs text-purple-100">Online</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-none'
                      : 'bg-gray-800 text-gray-100 rounded-bl-none border border-gray-700'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span className="text-[10px] opacity-60 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900/50 border-t border-gray-800 backdrop-blur-xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputValue.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
