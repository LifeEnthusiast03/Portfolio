import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, FileText, TrendingUp, School } from 'lucide-react';
import Particles from '../Particles';

interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreDetail: string;
  type: 'Pursuing' | 'Completed';
  relevantCourses: string[];
  icon: React.ReactElement;
  gradient: string;
}

interface Certification {
  title: string;
  platform: string;
  issuer: string;
  completionDate: string;
  credentialId: string;
  skills: string[];
  icon: React.ReactElement;
  gradient: string;
}

interface TabButtonProps {
  id: string;
  label: string;
  count: number;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface EducationCardProps {
  education: EducationEntry;
  index: number;
}

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

  const educationData: EducationEntry[] = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Information Technology',
      institution: 'Jadavpur University',
      location: 'Salt Lake Bypass, Sector 3, Bidhannagar, Kolkata',
      duration: '2023 - 2027',
      score: 'SGPA: 8.43',
      scoreDetail: 'Up to 5th Semester',
      type: 'Pursuing',
      relevantCourses: [
        'Database Management Systems (DBMS)',
        'Data Structures and Algorithms (DSA)',
        'Object-Oriented Programming (OOP)',
        'Computer Networks (CN)',
        'Software Engineering',
        'Object-Oriented Systems (OOS)',
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      degree: 'Higher Secondary Education',
      field: 'Class 12',
      institution: 'Ramakrishna Mission VidyaBhawan',
      location: 'Midnapore',
      duration: '2020 - 2022',
      score: '95.00%',
      scoreDetail: 'Percentage',
      type: 'Completed',
      relevantCourses: ['Physics', 'Chemistry', 'Mathematics'],
      icon: <School className="w-6 h-6" />,
      gradient: 'from-green-500 to-teal-600',
    },
  ];

  const certificationData: Certification[] = [
    {
      title: 'Data Structures and Algorithms',
      platform: 'Udemy',
      issuer: 'Udemy',
      completionDate: '2024',
      credentialId: 'UC-XXXXXXXX',
      skills: ['DSA', 'Problem Solving', 'Algorithms', 'Data Structures'],
      icon: <FileText className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const TabButton = ({ id, label, count, isActive, onClick }: TabButtonProps) => (
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

  const EducationCard = ({ education, index }: EducationCardProps) => (
    <motion.div
      className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/80 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.3)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="absolute top-4 right-4">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          education.type === 'Pursuing'
            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            : 'bg-green-500/20 text-green-300 border border-green-500/30'
        }`}>
          {education.type}
        </div>
      </div>
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
    </motion.div>
  );

  const CertificationCard = ({ certification, index }: CertificationCardProps) => (
    <motion.div
      className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/80 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.3)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
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
    </motion.div>
  );

  return (
    <section className="h-auto py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-violet-600/8 blur-[120px]" />
      </div>
      <Particles />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            Education &amp; Certifications
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            Academic achievements and professional certifications that shape my technical expertise
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="bg-black/50 backdrop-blur-xl rounded-xl p-1 border border-gray-800/80">
            <TabButton id="education" label="Education" count={educationData.length} isActive={activeTab === 'education'} onClick={(id) => setActiveTab(id as 'education' | 'certifications')} />
            <TabButton id="certifications" label="Certifications" count={certificationData.length} isActive={activeTab === 'certifications'} onClick={(id) => setActiveTab(id as 'education' | 'certifications')} />
          </div>
        </motion.div>

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

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-8 bg-black/50 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-800/80 hover:border-blue-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8.43</div>
              <div className="text-sm text-gray-400">SGPA (5th Sem)</div>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-gray-400">Class 12 Score</div>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{certificationData.length}</div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
