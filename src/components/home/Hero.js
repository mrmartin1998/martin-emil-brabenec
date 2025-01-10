import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-20 md:py-32">
      <h1 className="mb-6">
        Full-Stack Developer <br />
        Building Digital Experiences
      </h1>
      <p className="text-xl md:text-2xl text-base-content/70 max-w-2xl mb-8">
        I craft modern web applications with a focus on user experience, 
        performance, and scalability.
      </p>
      <div className="flex gap-4">
        <Button href="/projects">View Projects</Button>
        <Button href="/contact" variant="outline">Get in Touch</Button>
      </div>
    </div>
  );
} 