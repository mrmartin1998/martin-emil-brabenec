import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '',
  ...props 
}) {
  const baseStyles = "btn";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
} 