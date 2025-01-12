export const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring product management, cart functionality, and secure payments via Stripe.',
    longDescription: `
      A full-featured e-commerce solution that provides businesses with a modern, 
      scalable platform for online sales. Built with performance and user experience in mind.
      
      Key features include:
      - Product catalog with categories and search
      - Shopping cart and wishlist functionality
      - Secure payment processing with Stripe
      - Order management and tracking
      - Admin dashboard for product management
    `,
    image: '/images/projects/e-commerce-platform.jpg',
    tags: ['Next.js', 'React', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    links: [
      { label: 'Live Demo', href: 'https://e-commerce-platform.demo' },
      { label: 'GitHub', href: 'https://github.com/username/e-commerce-platform', variant: 'outline' }
    ],
    featured: true
  },
  {
    id: 'budget-buddy',
    title: 'Budget Buddy',
    description: 'Personal finance tracking application helping users manage expenses, set budgets, and achieve financial goals.',
    longDescription: `
      Budget Buddy is a comprehensive personal finance management tool that helps users
      take control of their finances. It provides intuitive visualization of spending
      patterns and helps users make informed financial decisions.
      
      Features include:
      - Expense tracking and categorization
      - Budget planning and monitoring
      - Financial goal setting
      - Expense analytics and reports
      - Bill payment reminders
    `,
    image: '/images/projects/budget-buddy.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Express'],
    category: 'web',
    links: [
      { label: 'Live Demo', href: 'https://budget-buddy.demo' },
      { label: 'GitHub', href: 'https://github.com/username/budget-buddy', variant: 'outline' }
    ],
    featured: true
  },
  {
    id: 'combat-gains',
    title: 'Combat Gains',
    description: 'Fitness tracking web application specifically designed for combat sports athletes and enthusiasts.',
    longDescription: `
      Combat Gains is a specialized fitness tracking platform tailored for combat sports
      practitioners. It helps athletes track their training, monitor progress, and optimize
      their performance.
      
      Key features include:
      - Workout tracking for different combat sports
      - Progress monitoring and statistics
      - Technique library and logging
      - Training plan creation
      - Performance analytics
    `,
    image: '/images/projects/combat-gains.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    category: 'web',
    links: [
      { label: 'Live Demo', href: 'https://combat-gains.demo' },
      { label: 'GitHub', href: 'https://github.com/username/combat-gains', variant: 'outline' }
    ],
    featured: true
  }
]; 