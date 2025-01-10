import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the project and its key features.",
      image: "/images/projects/project1.jpg",
      tags: ["React", "Next.js", "Tailwind"],
      links: [
        { label: "View Project", href: "/projects/project-one" },
        { label: "GitHub", href: "https://github.com/username/project-one", variant: "outline" }
      ]
    },
    // Add more projects...
  ];

  return (
    <Section>
      <h2 className="text-center mb-12">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </Section>
  );
} 