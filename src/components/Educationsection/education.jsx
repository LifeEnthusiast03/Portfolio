import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, FileText, TrendingUp, School } from 'lucide-react';

const EducationSection = ({ isVisible = true }) => {
  const [activeTab, setActiveTab] = useState('education');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Always animate on mount
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Information Technology",
      institution: "Jadavpur University",
      location: "Salt Lake Bypass, Sector 3, Bidhannagar, Kolkata",
      duration: "2023 - 2027",
      score: "SGPA: 8.50",
      scoreDetail: "Up to 3rd Semester",
      type: "Pursuing",
      relevantCourses: [
        "Database Management Systems (DBMS)",
        "Data Structures and Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Computer Networks (CN)",
        "Software Engineering",
        "Object-Oriented Systems (OOS)"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      degree: "Higher Secondary Education",
      field: "Class 12",
      institution: "Ramakrishna Mission VidyaBhawan",
      location: "Midnapore",
      duration: "2022 - 2024",
      score: "95.00%",
      scoreDetail: "Percentage",
      type: "Completed",
      relevantCourses: [
        "Physics",
        "Chemistry",
        "Mathematics"
      ],
      icon: <School className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const certificationData = [
    {
      title: "Data Structures and Algorithms",
      platform: "Udemy",
      issuer: "Udemy",
      completionDate: "2024",
      credentialId: "UC-XXXXXXXX",
      skills: ["DSA", "Problem Solving", "Algorithms", "Data Structures"],
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const TabButton = ({ id, label, count, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? 'bg-white text-gray-900 shadow-lg'
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      {label}
      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
        isActive ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-gray-300'
      }`}>
        {count}
      </span>
    </button>
  );

  const EducationCard = ({ education, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (activeTab === 'education') {
        const timer = setTimeout(() => setIsVisible(true), index * 200 + 500);
        return () => clearTimeout(timer);
      }
    }, [activeTab, index]);

    return (
      <div className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:scale-[1.02] hover:shadow-2xl`}>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            education.type === 'Pursuing' 
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
              : 'bg-green-500/20 text-green-300 border border-green-500/30'
          }`}>
            {education.type}
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start mb-6">
          <div className={`p-3 bg-gradient-to-r ${education.gradient} bg-opacity-20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
            {education.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
              {education.degree}
            </h3>
            <p className="text-gray-300 mb-1">{education.field}</p>
            <p className="text-blue-400 font-medium">{education.institution}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
            <span>{education.duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm">{education.location}</span>
          </div>
          <div className="flex items-center md:col-span-2">
            <Award className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-white font-semibold">{education.score}</span>
            <span className="text-gray-400 ml-2">({education.scoreDetail})</span>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            Relevant Courses
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.relevantCourses.map((course, courseIndex) => (
              <span
                key={courseIndex}
                className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-gray-700/50 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CertificationCard = ({ certification, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (activeTab === 'certifications') {
        const timer = setTimeout(() => setIsVisible(true), index * 200 + 500);
        return () => clearTimeout(timer);
      }
    }, [activeTab, index]);

    return (
      <div className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:scale-[1.02] hover:shadow-2xl`}>
        
        {/* Header */}
        <div className="flex items-start mb-6">
          <div className={`p-3 bg-gradient-to-r ${certification.gradient} bg-opacity-20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
            {certification.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {certification.title}
            </h3>
            <p className="text-gray-300 mb-1">{certification.platform}</p>
            <p className="text-purple-400 font-medium">{certification.issuer}</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
            <span>Completed {certification.completionDate}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Award className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm">{certification.credentialId}</span>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Skills Gained
          </h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="education" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent transition-all duration-1000 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Education & Certifications
          </h2>
          <p className={`text-lg text-gray-400 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Academic achievements and professional certifications that shape my technical expertise
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-400 ${
          hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700">
            <TabButton
              id="education"
              label="Education"
              count={educationData.length}
              isActive={activeTab === 'education'}
              onClick={setActiveTab}
            />
            <TabButton
              id="certifications"
              label="Certifications"
              count={certificationData.length}
              isActive={activeTab === 'certifications'}
              onClick={setActiveTab}
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {educationData.map((education, index) => (
                <EducationCard key={index} education={education} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {certificationData.map((certification, index) => (
                <CertificationCard key={index} certification={certification} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${
          hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8.50</div>
              <div className="text-sm text-gray-400">Current SGPA</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-gray-400">Class 12 Score</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{certificationData.length}</div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;