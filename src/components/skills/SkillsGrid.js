import SkillCard from './SkillCard';

export default function SkillsGrid() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Testing", level: 80 }
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {skills.map((category) => (
        <div
          key={category.category}
          className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl"
        >
          <div className="card-body">
            <h3 className="card-title mb-6">{category.category}</h3>
            {category.items.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 