import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import SkillsGrid from '@/components/skills/SkillsGrid';
import ResumeButton from '@/components/ui/ResumeButton';

export default function AboutContent() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of web applications using modern technologies."
    },
    // Add more experiences...
  ];

  return (
    <>
      <Section className="bg-base-200 rounded-3xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              I&apos;m a full-stack developer with a passion for building modern web applications.
              With over X years of experience in software development, I specialize in
              creating responsive, user-friendly applications using cutting-edge technologies.
            </p>
            <p>
              My approach combines technical expertise with a strong focus on user experience
              and business objectives. I believe in writing clean, maintainable code and
              following best practices in software development.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <Button href="/contact">Get in Touch</Button>
            <ResumeButton />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-center mb-12">Skills & Expertise</h2>
        <SkillsGrid />
      </Section>

      <Section className="bg-base-200 rounded-3xl">
        <h2 className="text-center mb-12">Experience</h2>
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