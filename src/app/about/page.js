import PageHeader from '@/components/ui/PageHeader';
import AboutContent from '@/components/about/AboutContent';

export const metadata = {
  title: 'About Me | Martin Emil Brabenec',
  description: 'Learn more about my experience, skills, and journey as a full-stack developer.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="Learn about my journey, skills, and what drives me as a developer."
      />
      <AboutContent />
    </>
  );
} 