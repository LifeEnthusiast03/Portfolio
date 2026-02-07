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
      score: "SGPA: 8.44",
      scoreDetail: "Up to 4th Semester",
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
      duration: "2020 - 2022",
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
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_8px_32px_0_rgba(59,130,246,0.4)]'
          : 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
      }`}
    >
      {label}
      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
        isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400'
      }`}>
        {count}
      </span>
    </button>
  );

  const EducationCard = ({ education, index, activeTab }) => {
    const [isCardVisible, setIsCardVisible] = useState(false);

    useEffect(() => {
      if (activeTab === 'education') {
        const timer = setTimeout(() => setIsCardVisible(true), index * 200 + 500);
        return () => clearTimeout(timer);
      } else {
        setIsCardVisible(false);
      }
    }, [activeTab, index]);

    return (
      <div className={`group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/80 hover:border-blue-500/40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:scale-[1.02] hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.3)]`}>
        
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
                className="bg-gray-800/70 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-700/50 hover:bg-gray-700/70 hover:border-blue-500/30 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CertificationCard = ({ certification, index, activeTab }) => {
    const [isCardVisible, setIsCardVisible] = useState(false);

    useEffect(() => {
      if (activeTab === 'certifications') {
        const timer = setTimeout(() => setIsCardVisible(true), index * 200 + 500);
        return () => clearTimeout(timer);
      } else {
        setIsCardVisible(false);
      }
    }, [activeTab, index]);

    return (
      <div className={`group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/80 hover:border-blue-500/40 transition-all duration-500 transform ${
        isCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:scale-[1.02] hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.3)]`}>
        
        {/* Header */}
        <div className="flex items-start mb-6">
          <div className={`p-3 bg-gradient-to-r ${certification.gradient} bg-opacity-20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
            {certification.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
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
    <section id="Education" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] relative">
      {/* Dotted Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12)_1px,transparent_1px)] bg-[size:38px_38px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:58px_58px] animate-pulse" style={{animationDuration: '5.5s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-transparent to-blue-900/5"></div>
        
        {/* Ripple Effects */}
        <div className="ripple top-1/3 left-1/4 w-40 h-40 bg-blue-500/10" style={{animationDelay: '0.3s'}}></div>
        <div className="ripple bottom-1/4 right-1/3 w-36 h-36 bg-blue-600/10" style={{animationDelay: '2.2s'}}></div>
        <div className="ripple top-2/3 right-2/3 w-32 h-32 bg-blue-700/10" style={{animationDelay: '3.8s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
          <div className="bg-black/50 backdrop-blur-xl rounded-xl p-1 border border-gray-800/80">
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
                <EducationCard key={index} education={education} index={index} activeTab={activeTab} />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {certificationData.map((certification, index) => (
                <CertificationCard key={index} certification={certification} index={index} activeTab={activeTab} />
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${
          hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-8 bg-black/50 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-800/80 hover:border-blue-500/30 transition-all duration-300">
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