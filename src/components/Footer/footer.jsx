import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';

const SOCIAL = [
  { name: "GitHub",      icon: Github,         url: "https://github.com/LifeEnthusiast03",                color: "hover:text-white" },
  { name: "LinkedIn",   icon: Linkedin,        url: "https://www.linkedin.com/in/sougatasaha/",           color: "hover:text-blue-400" },
  { name: "LeetCode",   icon: SiLeetcode,      url: "https://leetcode.com/u/sougata820/",                 color: "hover:text-orange-400" },
  { name: "GFG",        icon: SiGeeksforgeeks, url: "https://www.geeksforgeeks.org/profile/sahasoug21zk", color: "hover:text-green-400" },
  { name: "Codeforces", icon: SiCodeforces,    url: "https://codeforces.com/profile/Sougatasaha",         color: "hover:text-sky-400" },
  { name: "Email",      icon: Mail,            url: "mailto:sahasougata820@gmail.com",                    color: "hover:text-cyan-400" },
];

const Footer = () => (
  <footer className="bg-[#030712] border-t border-gray-800/40">
    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

      {/* Copyright */}
      <p className="text-gray-600 text-xs flex items-center gap-1.5 order-2 sm:order-1">
        © {new Date().getFullYear()} Sougata Saha · Made with
        <Heart size={11} className="text-red-500 fill-red-500" />
        and code
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-1 order-1 sm:order-2">
        {SOCIAL.map(s => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className={`p-2 rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-800/40 ${s.color}`}
          >
            <s.icon size={14} />
          </a>
        ))}
      </div>

    </div>
  </footer>
);

export default Footer;