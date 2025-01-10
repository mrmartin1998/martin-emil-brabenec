export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-8 md:mb-12 animate-slide-down">
      <h1 className="mb-4">{title}</h1>
      {subtitle && (
        <p className="text-lg sm:text-xl text-base-content/80 max-w-2xl mx-auto animate-fade-in delay-200">
          {subtitle}
        </p>
      )}
    </div>
  );
} 