import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Import the profile placeholder image. You can replace this with your own photo
// by placing it in the `src/assets` folder and updating this import.
import profileImg from './assets/profile-placeholder.png';

// Sample project data. Modify or extend this array to showcase your own work.
const education = {
  school: 'Georgia Institute of Technology',
  location: 'Atlanta, Georgia',
  graduation: 'May 2027',
  degree:
    'Bachelor of Science in Computer Science, Concentrations: Intelligence & People, Minor in Industrial Design',
  gpa: '3.84/4.00',
  coursework: [
    'Data Structures & Algorithms',
    'Design & Analysis of Algorithms',
    'Machine Learning',
    'Artificial Intelligence',
    'Computer Organization & Programming',
    'Information Visualization',
    'Human-Centered Computing & UI Design',
    'Linear Algebra',
    'Probability & Statistics',
    'Discrete Mathematics',
  ],
  honors: [
    'Faculty Honors (2024, Fall 2025)',
    'Dean’s List (Fall 2023, Spring 2025)',
  ],
};

const projects = [
  {
    title:
      'Predictive Modeling for Sleep Apnea Therapy Compliance | Python',
    description:
      'Built models to predict CPAP therapy compliance using 800K+ nightly patient records. Engineered features for usage patterns and demographics, then trained Naive Bayes, Logistic Regression, and MLP models to flag patients needing intervention.',
    tags: ['Python', 'Naive Bayes', 'Logistic Regression', 'MLP'],
  },
  {
    title:
      'Interactive Visualizations for Trends in Video Game Consumerism | JavaScript, HTML/CSS, D3.js',
    description:
      'Built six D3.js visualizations and cleaned Kaggle datasets to highlight sales trends. Aggregated data to make insights easy to interpret and earned 3rd place course recognition.',
    tags: ['JavaScript', 'HTML/CSS', 'D3.js', 'Data Visualization'],
  },
];

// List of skills displayed as tags.
const skills = [
  'Python',
  'Java',
  'JavaScript',
  'SQL',
  'C#',
  'C++',
  'React',
  'React Native',
  'Unity',
  'HTML/CSS',
  'SQL Server',
  'Microsoft Fabric',
  'Power BI',
  'Streamlit',
  'Git/GitHub',
  'Pydantic',
  'OpenAI APIs',
  'scikit-learn',
  'Naive Bayes',
  'Logistic Regression',
  'MLPs',
  'Feature Engineering',
  'Model Evaluation',
];

// Experience items. You can add more entries as needed.
const experience = [
  {
    title: 'IT Data Management/Engineering Intern',
    company: 'SKANSKA — Charlotte, NC',
    duration: 'Jun 2025 – Jul 2025',
    description:
      'Designed <b>Power BI</b> dashboards, optimized <b>SQL Server</b> pipelines, and contributed to <b>Microsoft Fabric</b> lakehouse projects. Built Python/Streamlit apps with <b>OpenAI APIs</b> and <b>Pydantic</b> to automate LLM-driven extraction, improving reporting and compliance workflows.',
  },
  {
    title: 'Intern',
    company: 'HelloPackage — Atlanta, GA',
    duration: 'May 2023 – Aug 2023',
    description:
      'Created social media content (LinkedIn posts, TikTok videos, Instagram graphics) using <b>Final Cut Pro X</b> and <b>Adobe InDesign</b>. Researched best practices that increased viewer interaction threefold and designed 10+ templates for streamlined publicity.',
  },
];

const leadership = [
  {
    title: 'Executive Recruitment Chair',
    company: 'Theta Chi Fraternity',
    duration: 'Aug 2024 – Aug 2025',
    description:
      'Led recruitment strategy at Georgia Tech, driving the successful recruitment of 30+ new members. Organized events, formal rush activities, and maintained detailed records.',
  },
  {
    title: 'Student Programming Lead',
    company: 'Vertically Integrated Project — Current Crisis',
    duration: 'Aug 2025 – Present',
    description:
      'Modeled wildfire behavior for a large-scale Unity city simulation and built scalable, modular C# systems for real-time simulation, state management, and player decision logging. Conducted code reviews, mentored junior developers, and managed sprint planning.',
  },
  {
    title: 'Project Manager',
    company: 'GT WebDev',
    duration: 'Jan 2026 – Present',
    description:
      'Leading a semester-long effort to design and build a React website and mobile app for a nonprofit (Praying for the Next Generation — PFTNG).',
  },
  {
    title: 'Team Member',
    company: 'TOM — Tikkun Olam Makers',
    duration: 'Aug 2025 – Present',
    description:
      'Collaborated with engineers, designers, and clinicians to develop open-source assistive technologies. Led materials research for an assistive bath chair project.',
  },
];

const additional = {
  languages: 'Spanish (Basic)',
  fineArts: 'Piano (Received Superior+ from Musicians Guild in 2023)',
  interests:
    'Baking, Rock Climbing, Tennis, Hiking, Reading, Science Fiction, Live Jazz, Traveling',
};

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
              AI & Information Internetworks | Graduation: May 2027
            </p>
            <p className="text-sm opacity-70">GPA: 3.84/4.00</p>
            <p className="text-xs opacity-60">
              Honors: Faculty Honors (2024, Fall 2025), Dean’s List (Fall 2023,
              Spring 2025)
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
              href="https://www.linkedin.com/in/davis-haden"
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
        {/* Education */}
        <section id="education">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="rounded-xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/10 space-y-4">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">
                  {education.school}
                </h3>
                <p className="text-sm opacity-80">{education.location}</p>
              </div>
              <div className="text-sm opacity-80">
                {education.graduation}
              </div>
            </div>
            <p className="text-sm opacity-80">{education.degree}</p>
            <p className="text-sm opacity-80">GPA: {education.gpa}</p>
            <div>
              <p className="text-sm font-semibold mb-2">
                Relevant Coursework
              </p>
              <ul className="grid gap-1 text-sm opacity-80 sm:grid-cols-2">
                {education.coursework.map((course) => (
                  <li key={course}>• {course}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">Honors</p>
              <ul className="grid gap-1 text-sm opacity-80 sm:grid-cols-2">
                {education.honors.map((honor) => (
                  <li key={honor}>• {honor}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
        {/* Additional Skills & Interests */}
        <section id="additional">
          <h2 className="text-3xl font-bold mb-8">
            Additional Skills &amp; Interests
          </h2>
          <div className="rounded-xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/10 space-y-3 text-sm opacity-80">
            <p>
              <span className="font-semibold">Languages:</span>{' '}
              {additional.languages}
            </p>
            <p>
              <span className="font-semibold">Fine Arts:</span>{' '}
              {additional.fineArts}
            </p>
            <p>
              <span className="font-semibold">Interests:</span>{' '}
              {additional.interests}
            </p>
          </div>
        </section>
        {/* Work Experience */}
        <section id="experience">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
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
        {/* Leadership & Community */}
        <section id="leadership">
          <h2 className="text-3xl font-bold mb-8">
            Leadership &amp; Community
          </h2>
          <div className="space-y-6">
            {leadership.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm opacity-80">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm font-medium mb-1">
                  {item.company}
                </p>
                <p className="text-sm opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="pb-20">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="rounded-xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/10 space-y-4">
            <p className="text-sm opacity-80">
              I’d love to hear from you! Feel free to reach out:
            </p>
            <a
              href="mailto:rhaden8@gatech.edu"
              className="inline-block text-blue-400 underline hover:text-blue-300"
            >
              rhaden8@gatech.edu
            </a>
            <div className="text-sm opacity-80">
              (678) 772-1370
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://www.linkedin.com/in/davis-haden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                linkedin.com/in/davis-haden
              </a>
              <a
                href="https://github.com/davis-haden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                github.com/davis-haden
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
