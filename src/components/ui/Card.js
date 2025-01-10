import Image from 'next/image';
import Button from './Button';

export default function Card({ 
  title, 
  description, 
  image, 
  tags = [], 
  links = [],
  className = '' 
}) {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      {image && (
        <figure className="relative h-48 md:h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </figure>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
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