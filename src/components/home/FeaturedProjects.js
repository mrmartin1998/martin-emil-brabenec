import Section from '@/components/ui/Section';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <Section>
      <h2 className="text-center mb-12">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
} 