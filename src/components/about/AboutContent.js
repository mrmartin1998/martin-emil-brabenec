import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import SkillsGrid from '@/components/skills/SkillsGrid';
import ResumeButton from '@/components/ui/ResumeButton';

export default function AboutContent() {
  const skills = [
    { 
      category: "Frontend", 
      items: ["Next.js", "React", "TailwindCSS", "DaisyUI", "TypeScript"] 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "MongoDB", "Mongoose", "JWT Auth", "REST APIs"] 
    },
    { 
      category: "Tools & Services", 
      items: ["Git", "Vercel", "Stripe", "ESLint", "API Integration"] 
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Developing modern web applications with Next.js, React, and MongoDB. Implementing secure authentication, payment processing, and responsive designs."
    }
  ];

  return (
    <>
      <Section className="bg-base-200 rounded-3xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="prose max-w-none">
            <p>
              I am a passionate full-stack developer dedicated to building efficient, scalable, and user-friendly web applications. 
              My focus lies in creating seamless digital experiences by integrating modern front-end design with robust back-end functionality.
            </p>
            
            <h3>Front-End Expertise</h3>
            <p>
              Proficient in React.js, Next.js, and Tailwind CSS for building responsive and dynamic user interfaces. 
              Skilled in utilizing Daisy UI to streamline design workflows and ensure visually appealing user experiences. 
              Deep understanding of HTML, CSS, and JavaScript for crafting intuitive and accessible web applications.
            </p>

            <h3>Back-End Strength</h3>
            <p>
              Experienced in creating APIs using Next.js serverless functions, ensuring scalable and efficient back-end services. 
              Expertise in database management with MongoDB, leveraging Mongoose and MongoDB Atlas for seamless integration 
              and performance optimization. Proficient in secure authentication using JWT and developing RESTful APIs.
            </p>

            <h3>Why Work With Me?</h3>
            <ul>
              <li><strong>Continuous Learner:</strong> I stay updated with the latest technologies to bring modern solutions to the table.</li>
              <li><strong>Problem Solver:</strong> I thrive on tackling complex challenges and delivering innovative results.</li>
              <li><strong>Collaborative Spirit:</strong> I value teamwork and clear communication to ensure project success.</li>
            </ul>

            <p>
              I am eager to collaborate with forward-thinking organizations and individuals to create meaningful web applications. 
              My goal is to leverage my full-stack expertise to build software that makes a real-world impact. 
              Let&apos;s create something extraordinary together!
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <Button href="/contact">Get in Touch</Button>
            <ResumeButton />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-center mb-8">Skills & Expertise</h2>
        <SkillsGrid />
      </Section>

      <Section className="bg-base-200 rounded-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 last:mb-0 card bg-base-100 shadow-xl rounded-2xl"
            >
              <div className="card-body">
                <h3 className="card-title">{exp.title}</h3>
                <p className="text-sm text-base-content/70">{exp.company} • {exp.period}</p>
                <p className="mt-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
} 