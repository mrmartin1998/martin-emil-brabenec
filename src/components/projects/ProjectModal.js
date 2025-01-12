'use client';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-4xl">
        <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        
        <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="font-bold text-2xl mb-4">{project.title}</h3>
        
        <div className="prose max-w-none mb-6">
          {project.longDescription.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="badge badge-outline">{tag}</span>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          {project.links.map((link, index) => (
            <Button
              key={index}
              href={link.href}
              variant={link.variant || 'ghost'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
} 