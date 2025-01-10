'use client';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with Next.js and TailwindCSS.",
      image: "/projects/project1.jpg",
      tags: ["React", "Next.js", "Tailwind"],
      category: "web",
      links: [
        { label: "View Live", href: "https://project-one.com" },
        { label: "GitHub", href: "https://github.com/username/project-one", variant: "outline" }
      ]
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with real-time updates.",
      image: "/projects/project2.jpg",
      tags: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      links: [
        { label: "Case Study", href: "/projects/project-two" },
        { label: "GitHub", href: "https://github.com/username/project-two", variant: "outline" }
      ]
    },
    // Add more projects...
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Backend', value: 'backend' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`btn btn-sm ${
              activeFilter === filter.value 
                ? 'btn-primary' 
                : 'btn-ghost'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            {...project}
            className="transform transition-all hover:scale-[1.02]"
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-base-content/70">No projects found in this category.</p>
        </div>
      )}
    </Section>
  );
} 