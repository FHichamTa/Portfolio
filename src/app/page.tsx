'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon,
  Code,
  GraduationCap,
  Briefcase,
  Send,
  Github,
  Gitlab,
  Linkedin,
  Phone, 
  Mail
} from 'lucide-react';
import Image from 'next/image'
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

const SchoolLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-purple-400">
    <path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/>
  </svg>
);

const ProjectLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden p-2">
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="w-full h-full object-contain"
    />
  </div>
);

const skillCategories = [
  {
    title: 'Back-end',
    skills: [
      { name: 'Python', icon: '/python.svg', color: 'text-yellow-400' },
      { name: 'Java', icon: '/java.svg', color: 'text-red-500' },
      { name: 'PHP', icon: '/php.svg', color: 'text-indigo-400' },
      { name: 'VB.net', icon: '/vb.svg', color: 'text-blue-500' },
      { name: 'C#', icon: '/Csharp.svg', color: 'text-purple-500' },

    ]
  },
  {
    title: 'Front-end',
    skills: [
      { name: 'React', icon: '/react.svg', color: 'text-cyan-400' }, // Attention à la casse
      { name: 'HTML', icon: '/html.svg', color: 'text-orange-500' },
      { name: 'CSS', icon: '/css.svg', color: 'text-blue-400' },
      { name: 'JavaScript', icon: '/javascript.svg', color: 'text-yellow-400' },
      { name: 'TypeScript', icon: '/typescript.svg', color: 'text-blue-600' },
    ]
  },
  {
    title: 'Others',
    skills: [
      { name: 'SQL', icon: '/sql.svg', color: 'text-blue-300' },
      { name: 'Github', icon: '/github.svg', color: 'text-orange-600' },
      { name: 'Gitlab', icon: '/gitlab.svg', color: 'text-orange-600' },

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

      
      <section id="home" className="min-h-screen flex items-center pt-20">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2">
      <div className="relative w-80 h-80 mx-auto mb-8 md:mb-0">  
        <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse"></div>
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={320}
          height={320}
          className="rounded-full w-full h-full object-cover shadow-xl relative z-10"
          priority
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
                Looking for a work-study program: 1 week school / 3 weeks company from September 19th 2025.
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
                <a
    href="https://gitlab.com/Hicham29"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-purple-400 transition-colors"
  >
    <Gitlab size={32} />
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
      <Image
        src={skill.icon}
        alt={skill.name}
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />
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
    technologies: ['React', 'TypeScript', 'NextJS', 'Supabase', 'NodeJS'],
    logo: <ProjectLogo src="/codingcrew.jpg" alt="Coding Crew Logo" />
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
    technologies: ['PHP', 'AJAX', 'JavaScript'],
    logo: <ProjectLogo src="/icicartegrise.svg" alt="Icicartegrise Logo" />
  },
  {
    title: 'Apprenticeship at Fortil on assignment at Airbus',
    period: '20/01/2025 - 19/09/2025',
    type: 'Developper apprenticeship',
    description: 'Got secret defense missions',
    technologies: ['MySQL', 'C#', 'Visual Basic']
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

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-bold text-center mb-16">
      Contact<span className="text-purple-400">:</span>
    </h2>
    
    <div className="max-w-2xl mx-auto"> {}
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
      
    </div>
  </div>
</section>
<div className="text-center text-gray-400 text-sm mt-8">
          © 2025 Hicham Taafraouti. All rights reserved.
        </div>
    </main>
  );
}