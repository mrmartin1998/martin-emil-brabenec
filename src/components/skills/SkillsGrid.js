import SkillCard from './SkillCard';

export default function SkillsGrid() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 90 },
        { name: "TailwindCSS", level: 95 },
        { name: "DaisyUI", level: 85 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "Mongoose", level: 85 },
        { name: "Next.js API Routes", level: 90 },
        { name: "JWT Auth", level: 85 }
      ]
    },
    {
      category: "Tools & Services",
      items: [
        { name: "Git", level: 90 },
        { name: "Vercel", level: 85 },
        { name: "Stripe", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "ESLint", level: 85 }
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