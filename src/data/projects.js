export const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern, full-featured e-commerce platform built with Next.js 15, featuring a responsive design, secure authentication, and comprehensive shopping features.',
    longDescription: `
      A robust e-commerce solution built with Next.js and MongoDB, offering a complete shopping experience 
      with both customer and admin functionalities. The platform emphasizes user experience, security, 
      and modern design practices.
  
      Key features include:
      - Secure user authentication with JWT
      - Responsive product catalog with grid/list views
      - Real-time shopping cart management
      - Secure checkout with Stripe integration
      - User profile with address management
      - Order tracking and history
      - Comprehensive admin dashboard
      - Product inventory management
      - Responsive design with DaisyUI components
    `,
    image: '/images/projects/e-commerce-platform.jpg',
    tags: [
      'Next.js 15',
      'React 19',
      'MongoDB',
      'Mongoose',
      'Stripe',
      'TailwindCSS',
      'DaisyUI',
      'JWT'
    ],
    category: 'web',
    links: [
      // Note: Update these URLs with actual project links
      { label: 'Live Demo', href: 'https://e-commerce-platform.demo' },
      { label: 'GitHub', href: 'https://github.com/username/e-commerce-platform', variant: 'outline' }
    ],
    featured: true,
    techDetails: {
      frontend: [
        'Next.js 15.0.3',
        'React 19',
        'TailwindCSS',
        'DaisyUI'
      ],
      backend: [
        'Next.js API Routes',
        'MongoDB with Mongoose',
        'JWT Authentication'
      ],
      payment: [
        'Stripe Integration'
      ]
    }
  },
  {
    id: 'budget-buddy',
    title: 'Budget Buddy',
    description: 'A modern personal finance management application built with Next.js, featuring responsive design, secure authentication, and comprehensive financial tracking features.',
    longDescription: `
      A comprehensive financial management solution built with Next.js and MongoDB, offering complete 
      expense tracking and budgeting capabilities. The platform emphasizes user experience, data 
      visualization, and financial insights.
  
      Key features include:
      - Secure user authentication with JWT
      - Multi-account management system
      - Real-time transaction tracking
      - Category-based budget management
      - Interactive financial dashboards
      - Expense analytics and reporting
      - Cash flow visualization
      - Custom category management
      - Responsive design with DaisyUI components
    `,
    image: '/images/projects/budget-buddy.jpg',
    tags: [
      'Next.js 14',
      'React 18',
      'MongoDB',
      'Mongoose',
      'TailwindCSS',
      'DaisyUI',
      'JWT',
      'Stripe'
    ],
    category: 'web',
    links: [
      { label: 'Live Demo', href: 'https://budget-buddy-demo.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/yourusername/budget-buddy', variant: 'outline' }
    ],
    featured: true,
    techDetails: {
      frontend: [
        'Next.js 14.2.14',
        'React 18',
        'TailwindCSS',
        'DaisyUI'
      ],
      backend: [
        'Next.js API Routes',
        'MongoDB with Mongoose',
        'JWT Authentication'
      ],
      payment: [
        'Stripe Integration'
      ]
    }
  },
  {
    id: 'combat-gains',
    title: 'Combat Gains',
    description: 'A comprehensive fitness tracking web application crafted for combat sports athletes and enthusiasts, offering tailored workout tracking and performance optimization tools.',
    longDescription: `
      Combat Gains is a cutting-edge fitness tracking platform designed specifically for combat sports practitioners. It provides athletes with the tools to meticulously track their training routines, monitor progress, and optimize performance through data-driven insights.
  
      Key features include:
      - Detailed workout tracking for various combat sports disciplines
      - Comprehensive progress monitoring with advanced statistics
      - Extensive technique library with logging capabilities
      - Customizable training plan creation
      - In-depth performance analytics to enhance athletic outcomes
    `,
    image: '/images/projects/combat-gains.jpg',
    tags: [
      'Next.js',
      'React',
      'MongoDB',
      'TailwindCSS',
      'DaisyUI'
    ],
    category: 'web',
    links: [
      { label: 'Live Demo', href: 'https://combat-gains.demo' },
      { label: 'GitHub', href: 'https://github.com/username/combat-gains', variant: 'outline' }
    ],
    featured: true,
    techDetails: {
      frontend: [
        'Next.js',
        'React',
        'TailwindCSS',
        'DaisyUI'
      ],
      backend: [
        'Next.js API Routes',
        'MongoDB with Mongoose'
      ]
    }
  }
]; 