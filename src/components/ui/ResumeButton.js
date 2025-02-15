import Button from '@/components/ui/Button';

export default function ResumeButton() {
  return (
    <Button
      href="/documents/martin-emil-brabenec-resume.pdf"
      download="martin-emil-brabenec-resume.pdf"
      variant="outline"
      className="gap-2"
    >
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      Download Resume
    </Button>
  );
} 