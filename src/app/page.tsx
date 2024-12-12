'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon,
  Code,
  GraduationCap,
  Briefcase,
  Send,
  Github,
  Linkedin,
  Phone, 
  Mail
} from 'lucide-react';
import Image from 'next/image'
// Animated Background Component
const LocalAnimatedBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    speed: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 50 }, (_, index) => ({
        id: index,
        size: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        speed: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] bg-black"
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-purple-500/20 blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            opacity: bubble.opacity,
            animation: `bubble ${bubble.speed}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes bubble {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, -50px) scale(1.2);
          }
          50% {
            transform: translate(50px, 50px) scale(0.8);
          }
          75% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

const HtmlLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#E44D26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
  </svg>
);

const PhpLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#777BB4" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"/>
  </svg>
);

const VbLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#004482" d="M 23 4.866 V 19.134 L 12.134 23 L 1.866 19.134 V 4.866 L 12.134 1 Z"/>
    <path fill="white" d="M 18.527 15.722 L 15.687 7.596 H 13.668 L 10.027 13.818 L 6.367 7.596 H 4.31 L 7.978 15.722 H 10.535 L 14.195 9.462 L 16.989 15.722 Z"/>
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#EA2D2E" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .551.346 1.321.646-4.699 2.013-10.633-.117-6.943-1.149m-.406-1.826s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m14.312 3.248s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 15.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118"/>
    <path fill="#EA2D2E" d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639"/>
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12">
    <circle r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);
const JavascriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
  </svg>
);
const SchoolLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-purple-400">
    <path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/>
  </svg>
);

const TypescriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
  </svg>
);
const PythonLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <g>
      <path fill="#366994" d="M12.042 6.136c-3.489 0-3.274 1.514-3.274 1.514l.004 1.567h3.332v.47H7.046s-2.246-.254-2.246 3.287c0 3.542 1.961 3.419 1.961 3.419h1.17v-1.644s-.096-1.961 1.928-1.961h3.325s1.866.029 1.866-1.806v-3.039s.291-1.807-2.988-1.807zM9.205 7.116c.332 0 .599.267.599.6 0 .332-.267.599-.599.599a.598.598 0 0 1-.599-.599c0-.333.267-.6.599-.6z"/>
      <path fill="#FFD43B" d="M11.956 17.867c3.489 0 3.274-1.514 3.274-1.514l-.004-1.567h-3.332v-.47h5.058s2.246.254 2.246-3.287c0-3.542-1.961-3.419-1.961-3.419h-1.17v1.644s.096 1.961-1.928 1.961h-3.325s-1.866-.029-1.866 1.806v3.039s-.291 1.807 2.988 1.807zm2.837-1.02a.598.598 0 0 1-.599-.599c0-.332.267-.6.599-.6.332 0 .599.268.599.6 0 .332-.267.599-.599.599z"/>
    </g>
  </svg>
);

const SqlLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#00618A" d="M12 0C5.4 0 0 2.7 0 6v12c0 3.3 5.4 6 12 6s12-2.7 12-6V6c0-3.3-5.4-6-12-6zM12 2c5.5 0 10 2.2 10 4s-4.5 4-10 4S2 7.8 2 6s4.5-4 10-4zM2 8.2C3.9 9.4 7.6 10 12 10s8.1-.6 10-1.8V12c0 1.8-4.5 4-10 4S2 13.8 2 12V8.2zm0 6C3.9 15.4 7.6 16 12 16s8.1-.6 10-1.8V18c0 1.8-4.5 4-10 4S2 19.8 2 18v-3.8z"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
  </svg>
);

const skillCategories = [
  {
    title: 'Back-end',
    skills: [
      { name: 'Python', icon: <PythonLogo />, color: 'text-yellow-400' },
      { name: 'Java', icon: <JavaLogo />, color: 'text-red-500' },
      { name: 'PHP', icon: <PhpLogo />, color: 'text-indigo-400' },
      { name: 'VB.net', icon: <VbLogo />, color: 'text-blue-500' },
    ]
  },
  {
    title: 'Front-end',
    skills: [
      { name: 'React', icon: <ReactLogo />, color: 'text-cyan-400' },
      { name: 'HTML', icon: <HtmlLogo />, color: 'text-orange-500' },
      { name: 'CSS', icon: <CssLogo />, color: 'text-blue-400' },
      { name: 'JavaScript', icon: <JavascriptLogo />, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: <TypescriptLogo />, color: 'text-blue-600' },
    ]
  },
  {
    title: 'Others',
    skills: [
      { name: 'SQL', icon: <SqlLogo />, color: 'text-blue-300' },
      { name: 'Git', icon: <GitLogo />, color: 'text-orange-600' },
    ]
  }
];
// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const navigationItems = [
    { id: 'home', icon: <HomeIcon size={24} />, label: 'Home' },
    { id: 'skills', icon: <Code size={24} />, label: 'Skills' },
    { id: 'education', icon: <GraduationCap size={24} />, label: 'Education' },
    { id: 'projects', icon: <Briefcase size={24} />, label: 'Projects' },
    { id: 'contact', icon: <Send size={24} />, label: 'Contact' }
  ];

  return (
    <main className="min-h-screen text-white relative">
      <LocalAnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#1E1B2C]/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-400">
            Hicham TAAFRAOUTI
          </div>
          <div className="flex space-x-6 items-center">
            
            {navigationItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 transition-colors
                  ${activeSection === item.id 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-purple-400'
                  }`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
  <div className="relative w-96 h-96 mx-auto mb-8 md:mb-0">  {/* Changé de w-64 h-64 à w-96 h-96 */}
    <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse"></div>
    <Image 
      src="/profile.jpg"
      alt="Profile"
      className="rounded-full w-full h-full object-cover shadow-xl relative z-10"
      style={{color: 'transparent'}}
    />
  </div>
</div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Hello, I&apos;m Hicham TAAFRAOUTI
            </h1>
            <p className="text-xl mb-6 text-gray-300">
              An IT Student passionate about development.
              BTS SIO SLAM graduate from Brest, France.
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                Looking for a work-study program: 1 week school / 3 weeks company
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://github.com/FHichamTa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Github size={32} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hicham-taafraouti-b392642a1/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-bold text-center mb-16">
      Skills<span className="text-purple-400">:</span>
    </h2>
    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="bg-[#1E1B2C] rounded-xl p-8 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-6">
            {category.title}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className={`w-16 h-8 ${skill.color}`}>
                  {skill.icon}
                </span>
                <span className={`text-lg ${skill.color}`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">
            Education<span className="text-purple-400">:</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
          {[
  {
    school: 'CESI School',
    location: 'Guipavas (29490)',
    degree: 'Bachelor CDA (Application Developer Designer)',
    period: '2024-2025',
    type: 'Work-study program'
  },
  {
    school: 'Charles de Foucauld High School',
    location: 'Brest (29200)',
    degree: 'BTS SIO Option SLAM',
    period: '2022-2024',
    type: 'Software Solutions and Business Applications',
    achievements: [ 'Voltaire Certificate: 708 R']
  },
  {
    school: 'Vauban High School',
    location: 'Brest (29200)',
    degree: 'STI2D SIN',
    period: '2020-2022',
    type: 'Science and Technology for Industry and Sustainable Development'
  }
].map((education) => (
  <div
    key={education.period}
    className="bg-[#1E1B2C] rounded-xl p-8 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-start gap-4">
        <SchoolLogo />
        <div>
          <h3 className="text-2xl font-semibold text-purple-400">{education.school}</h3>
          <p className="text-gray-400">{education.location}</p>
        </div>
      </div>
      <span className="text-gray-400">{education.period}</span>
    </div>
    <h4 className="text-xl text-white mb-2">{education.degree}</h4>
    <p className="text-gray-300">{education.type}</p>
    {education.achievements && (
      <ul className="mt-2 space-y-1">
        {education.achievements.map((achievement) => (
          <li key={achievement} className="text-green-400">• {achievement}</li>
        ))}
      </ul>
    )}
  </div>
))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">
            Projects<span className="text-purple-400">:</span>
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
  {
    title: 'E-commerce Website (Coding Crew)',
    period: '2024',
    type: 'Web Development Internship',
    description: 'Created a full-stack e-commerce website with associated database',
    tasks: [
      'Requirements analysis',
      'Development and quality testing',
      'Database modeling',
      'Planning and documentation'
    ],
    technologies: ['React', 'TypeScript', 'NextJS', 'Supabase', 'VueJS', 'NodeJS']
  },
  {
    title: 'Delivery Management App',
    period: '2022-2024',
    type: 'Web Development Project',
    description: 'Created a web application for managing driver orders and delivery schedules',
    technologies: ['HTML', 'CSS', 'PHP', 'VB.NET', 'ORACLE', 'MYSQL']
  },
  {
    title: 'PDF Export System (Icicartegrise)',
    period: '2023',
    type: 'Web Development Internship',
    description: 'Developed a system for exporting various certification forms to PDF',
    technologies: ['PHP', 'AJAX', 'NextJS', 'TypeScript']
  }
].map((project) => (
  <div
    key={project.title}
    className="bg-[#1E1B2C] rounded-xl p-8 backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-semibold text-purple-400">{project.title}</h3>
      </div>
      <span className="text-gray-400">{project.period}</span>
    </div>
                <p className="text-white mb-4">{project.type}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.tasks && (
                  <ul className="mb-4 space-y-1">
                    {project.tasks.map((task) => (
                      <li key={task} className="text-gray-300">• {task}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
<section id="contact" className="min-h-screen py-20 relative overflow-hidden">
  {/* Animated Background Bubbles */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, index) => (
      <div 
        key={index}
        className="absolute bg-purple-500/10 rounded-full animate-float"
        style={{
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 15}s`
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-bold text-center mb-16">
      Contact<span className="text-purple-400">:</span>
    </h2>
    
    <div className="max-w-2xl mx-auto"> {/* Centrer et élargir */}
  <div className="bg-[#2A2735]/70 backdrop-blur-md rounded-xl p-12 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
   <h3 className="text-2xl font-semibold mb-6 text-purple-400">Get in Touch</h3>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4 group">
            <Phone 
              size={32} 
              className="text-purple-400 group-hover:rotate-12 transition-transform"
            />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <a 
                href="tel:+33612345678" 
                className="text-white text-lg hover:text-purple-400 transition-colors"
              >
                +33 6 52 67 11 04
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 group">
            <Mail 
              size={32} 
              className="text-purple-400 group-hover:rotate-12 transition-transform"
            />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a 
                href="mailto:hicham.taafraouti@gmail.com" 
                className="text-white text-lg hover:text-purple-400 transition-colors"
              >
                htaafraouti@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 group">
            <Linkedin 
              size={32} 
              className="text-purple-400 group-hover:rotate-12 transition-transform"
            />
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/hicham-taafraouti-b392642a1/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-purple-400 transition-colors"
              >
                Hicham TAAFRAOUTI
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      
    </div>
  </div>
</section>
<div className="text-center text-gray-400 text-sm mt-8">
          © 2024 Hicham Taafraouti. All rights reserved.
        </div>
    </main>
  );
}