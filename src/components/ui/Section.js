export default function Section({ children, className = '', id = '' }) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
} 