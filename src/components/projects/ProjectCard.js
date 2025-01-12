'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ProjectCard({ 
  id,
  title, 
  description, 
  image, 
  tags = [], 
  links = [],
  className = '' 
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`card bg-base-100 shadow-xl hover-lift transition-all duration-300 ${className}`}>
      <figure className="relative h-48 md:h-64">
        <Image
          src={imgError ? "/images/placeholder.jpg" : image}
          alt={title}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          <Link href={`/projects/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-base-content/70">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="badge badge-outline">{tag}</span>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className="card-actions justify-end mt-4">
            {links.map((link, index) => (
              <Button
                key={index}
                href={link.href}
                variant={link.variant || 'ghost'}
                className="text-sm"
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 