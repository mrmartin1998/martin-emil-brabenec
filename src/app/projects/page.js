import PageHeader from '@/components/ui/PageHeader';
import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata = {
  title: 'Projects | Martin Emil Brabenec',
  description: 'Explore my portfolio of web development projects, including full-stack applications, mobile apps, and more.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="My Projects"
        subtitle="A collection of my work, side projects, and experiments."
      />
      <ProjectGrid />
    </>
  );
} 