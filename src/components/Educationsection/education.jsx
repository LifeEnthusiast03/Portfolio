import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';

const EducationSection = ({ isVisible }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Only animate once when first visible
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Information Technology",
      institution: "Jadavpur University",
      location: "Salt Lake Bypass, Sector 3, Bidhannagar, Kolkata",
      duration: "2024 - 2027",
      score: "SGPA: 8.50",
      scoreType: "Up to 3rd Semester",
      status: "Pursuing",
      relevantCourses: [
        "Database Management Systems (DBMS)",
        "Data Structures and Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Computer Networks (CN)",
        "Software Engineering",
        "Object-Oriented Systems (OOS)"
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600"
    }
  ];

  const CourseTag = ({ course, index, isParentVisible }) => (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300 transform hover:scale-105 ${
        isParentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      style={{ 
        transitionDelay: isParentVisible ? `${index * 100}ms` : '0ms'
      }}
    >
      {course}
    </div>
  );

  const EducationCard = ({ education, index }) => {
    const [isCardVisible, setIsCardVisible] = useState(false);

    useEffect(() => {
      if (hasAnimated && !isCardVisible) {
        const timer = setTimeout(() => {
          setIsCardVisible(true);
        }, index * 300);
        return () => clearTimeout(timer);
      }
    }, [hasAnimated, index, isCardVisible]);

    return (
      <div
        className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 transform ${
          isCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${hoveredCard === index ? 'scale-105' : 'scale-100'}`}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          boxShadow: hoveredCard === index ? '0 20px 40px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            education.status === 'Pursuing' 
              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
              : 'bg-green-500/20 text-green-400 border border-green-500/30'
          }`}>
            {education.status}
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start mb-6">
          <div className={`p-4 bg-gradient-to-r ${education.color} bg-opacity-20 rounded-xl mr-4 flex-shrink-0`}>
            {education.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
            <p className="text-lg text-gray-300 mb-1">{education.field}</p>
            <p className="text-blue-400 font-semibold">{education.institution}</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{education.duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{education.location}</span>
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-white font-semibold">{education.score}</span>
            <span className="text-gray-400 ml-2">({education.scoreType})</span>
          </div>
        </div>

        {/* Relevant Courses */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
            Relevant Courses
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {education.relevantCourses.map((course, courseIndex) => (
              <CourseTag key={courseIndex} course={course} index={courseIndex} isParentVisible={isCardVisible} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="Education" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-1000 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Education
          </h2>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Academic journey and foundational knowledge in technology
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-blue-500/20">
            <Award className="w-6 h-6 text-yellow-400" />
            <div className="text-left">
              <p className="text-white font-semibold">Academic Excellence</p>
              <p className="text-gray-400 text-sm">Maintaining high performance throughout educational journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;