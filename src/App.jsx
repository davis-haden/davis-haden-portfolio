import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

// Import the profile placeholder image. You can replace this with your own photo
// by placing it in the `src/assets` folder and updating this import.
import profileImg from './assets/profile-placeholder.png';

// Sample project data. Modify or extend this array to showcase your own work.
const projects = [
  {
    title: 'Spotify API & Student Scheduler Apps',
    description:
      'Developed both the back-end and front-end for a student scheduling app and a Spotify Wrapped–inspired application using Android Studio. Integrated Spotify’s Web API for dynamic user data visualization and employed Firebase for efficient data storage and retrieval. Led a team of six using Agile methodologies (Scrum, Trello) over a three-month project cycle.',
    tags: ['Android Studio', 'Firebase', 'Spotify API', 'Agile', 'Trello'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Robotics & AI Projects',
    description:
      'Implemented Kalman and Particle Filters to accurately localize moving objects, achieving over 90% accuracy in testing. Designed and applied A* search algorithms for optimal pathfinding and incorporated policy maps to enhance robot navigation. Utilized PID control for smooth autonomous corrections and integrated SLAM algorithms for robust multidimensional movement.',
    tags: ['Python', 'AI', 'Robotics', 'Kalman Filter', 'A* Search', 'SLAM'],
    demo: '#',
    code: '#',
  },
];

// List of skills displayed as tags.
const skills = [
  'Python',
  'Java',
  'JavaScript',
  'C',
  'SQL',
  'SQL Server',
  'HTML/CSS',
  'NumPy',
  'OpenCV',
  'SciPy',
  'pandas',
  'React.js',
  'React Native',
  'Android Studio',
  'Firebase',
  'Streamlit',
  'Trello',
  'Power BI',
  'Microsoft Fabric',
  'Medallion Architecture',
  'Pydantic',
  'OpenAI API (GPT-4/4o integration)',
  'Azure DevOps',
  'Data Pipelines & ETL',
  'Data Visualization',
  'Prompt Engineering',
  'Structured Document Parsing',
  'Git & Version Control',
  'Agile / Sprint-Based Workflow',
  'Data Structures',
  'Kalman Filters',
  'Particle Filters',
  'A* Search',
  'PID Control',
  'SLAM',
];

// Experience items. You can add more entries as needed.
const experience = [
  {
    title: 'IT Intern',
    company: 'SKANSKA — Charlotte, NC',
    duration: 'Summer 2025',
    description:
      'Designed and developed dynamic dashboards in <b>Power BI</b> to visualize key operational metrics, enabling more informed decision-making across departments. Built and optimized <b>SQL Server</b> pipelines to streamline data flow and automate reporting tasks. Contributed to <b>Microsoft Fabric</b> projects utilizing <b>Medallion Architecture</b> to structure lakehouse environments for scalable data analytics. Developed internal data science solutions using <b>Python</b>, <b>Streamlit</b>, and <b>OpenAI\'s API</b>, improving workflow efficiency and enabling conversational interfaces for data access. Engineered robust <b>Pydantic</b> models to generate structured outputs from unstructured documents via LLM-powered extraction, reducing manual compliance tasks. Collaborated cross-functionally with data engineers, analysts, and stakeholders to identify business needs and deliver technical solutions with real-world impact.'
  },
  {
    title: 'Intern',
    company: 'HelloPackage',
    duration: 'Summer 2023',
    description:
      'Created engaging social media content (<b>LinkedIn</b> posts, <b>TikTok</b> videos, <b>Instagram</b> graphics) using <b>Final Cut Pro X</b> and <b>Adobe InDesign</b>. Researched and implemented best practices that increased viewer interaction threefold. Designed over 10 templates and established streamlined workflows for company publicity.'
  },
  {
    title: 'Team Member/Sensei',
    company: 'Code Ninjas',
    duration: 'Summer 2022',
    description:
      'Taught coding classes and camps to 30+ children (ages 6–13) using <b>Unity</b>, <b>JavaScript</b>, <b>Java</b>, and <b>Python</b>. Developed interactive projects and engaging learning activities to foster interest in coding.'
  },
];

function App() {
  // Always enable dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="md:w-1/3 lg:w-1/4 flex flex-col justify-between p-6 sticky top-0 md:h-screen backdrop-blur-xl bg-white/5 dark:bg-white/10 border-r border-white/10">
        <div className="flex flex-col items-center space-y-5">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-white/20 shadow-inner">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold">R. Davis Haden</h1>
            <p className="text-sm opacity-80">CS Student @ Georgia Tech</p>
            <p className="text-sm opacity-70">
              AI & Information Internetworks | Graduation: May 2027 | GPA: 3.87/4.0
            </p>
            <p className="text-xs opacity-60">
              Honors: Faculty Honors (4.0 GPA, 2024), Dean’s List (Fall 2023), Cum Laude Society, National Honors Society, Yale Book Award, Engineering Award, Burke Whitman Service Award
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/davis-haden"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/roland-haden-7923191b0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/davishaden_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Dark mode toggle removed */}
      </aside>
      {/* Main content */}
      <main className="flex-1 h-screen overflow-y-auto p-6 space-y-16">
        {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/10"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Demo/Code buttons hidden for now */}
              </div>
            ))}
          </div>
        </section>
        {/* Skills */}
        <section id="skills">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-blue-500/40 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        {/* Experience */}
        <section id="experience">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm opacity-80">{exp.duration}</span>
                </div>
                <p className="text-sm font-medium mb-1">{exp.company}</p>
                <p className="text-sm opacity-80" dangerouslySetInnerHTML={{ __html: exp.description }} />
                {exp.skills && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="pb-20">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="rounded-xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/10 space-y-4">
            <p className="text-sm opacity-80">
              I’d love to hear from you! Feel free to reach out via email:
            </p>
            <a
              href="mailto:rhaden8@gatech.edu"
              className="inline-block text-blue-400 underline hover:text-blue-300"
            >
              rhaden8@gatech.edu
            </a>
            <a
              href="mailto:davis.haden@gmail.com"
              className="inline-block text-blue-400 underline hover:text-blue-300 ml-4"
            >
              davis.haden@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;