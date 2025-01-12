export default function SkillCard({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm text-base-content/70">{level}%</span>
      </div>
      <div className="w-full bg-base-200 rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
} 