import { notFound } from 'next/navigation';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { projects } from '@/data/projects';

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.id === params.id);
  if (!project) return {};

  return {
    title: `${project.title} | Martin Emil Brabenec`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={project.title}
        subtitle={project.description}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none mb-8">
            {project.longDescription.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, index) => (
              <span key={index} className="badge badge-outline">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.links.map((link, index) => (
              <Button
                key={index}
                href={link.href}
                variant={link.variant || 'primary'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
} 