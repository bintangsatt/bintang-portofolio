// ============================================================
// Portfolio Data - Bintang Satrio
// ============================================================

export const personal = {
  name: 'Bintang Satrio Aji',
  title: 'Full-Stack Developer',
  subtitle: 'Microservice Enthusiast',
  tagline: 'I build scalable web systems using microservice architecture and modern web technologies.',
  email: 'bintangsatrioa@email.com',
  github: 'https://github.com/bintangsatt',
  linkedin: 'https://linkedin.com/in/bintang-satrio-aji',
  photoUrl: '' as string,
  cvUrl: '/cv-bintang-satrio-aji.pdf',
}

export const skills = [
  {
    category: 'Backend',
    color: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'border-blue-500/30',
    items: ['PHP', 'Laravel', 'Node.js', 'Express.js'],
  },
  {
    category: 'Frontend',
    color: 'from-purple-500/20 to-purple-600/5',
    borderColor: 'border-purple-500/30',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Progressive Web App (PWA)'],
  },
  {
    category: 'Architecture & Concepts',
    color: 'from-cyan-500/20 to-cyan-600/5',
    borderColor: 'border-cyan-500/30',
    items: ['Microservices', 'Domain-Driven Design (DDD)', 'REST API', 'MVC Pattern', 'API Gateway Concept'],
  },
  {
    category: 'Database',
    color: 'from-emerald-500/20 to-emerald-600/5',
    borderColor: 'border-emerald-500/30',
    items: ['MySQL', 'PostgreSQL'],
  },
]

export const projects = [
  {
    id: 'microservice-platform',
    title: 'Online Course Microservice Platform',
    tagline: 'Scalable e-learning with independently deployed services',
    screenshots: [
      '/images/projects/course-1.png',
      '/images/projects/course-2.png',
      '/images/projects/course-3.png',
    ], 

    description:
      'A scalable online learning platform built using microservice architecture where each service is independently deployed and managed. Designed from the ground up to handle high-traffic and complex domain logic.',
    architecture: [
      { name: 'User Service', desc: 'Auth, registration, JWT token management' },
      { name: 'Course Service', desc: 'Course catalog, enrollment, content structure' },
      { name: 'Media Service', desc: 'Video upload and streaming (Express.js)' },
      { name: 'Order & Payment Service', desc: 'Payment gateway, access gating logic' },
    ],
    features: [
      'User authentication with JWT across services',
      'Course enrollment with payment gating',
      'Media streaming for course content',
      'Admin management panel',
      'Independent database per service',
    ],
    techStack: ['Laravel', 'Express.js', 'React', 'REST API', 'MySQL (per service)'],
    challenges: [
      'Service communication & data consistency',
      'Authentication propagation across services',
      'Payment gating logic integration',
    ],
    solutions: [
      'Token-based auth with shared secret validation',
      'Clear service boundaries via API contracts',
      'Independent DB per service for loose coupling',
    ],
    whyMicroservice:
      'Monoliths become bottlenecks at scale. By separating concerns into independent services, each domain (media, payments, courses) can scale independently, be deployed separately, and fail without cascading system-wide. This architecture also enables team autonomy and faster iteration per service.',
    color: 'blue',
    gradient: 'from-blue-600/20 via-transparent to-transparent',
  },
  {
    id: 'dance-platform',
    title: 'Subscription-Based Traditional Dance Learning Platform',
    tagline: 'PKM Project — Preserving culture through technology',
    screenshots: [] as string[],

    description:
      'A web platform developed as a PKM (Program Kreativitas Mahasiswa) project that allows traditional dance studios to upload performance videos and monetize their content through a subscription model.',
    architecture: [
      { name: 'Studio Portal', desc: 'Video upload, content management' },
      { name: 'Subscriber Portal', desc: 'Content access based on active subscription' },
      { name: 'Payment Integration', desc: 'Subscription billing and management' },
      { name: 'Admin Dashboard', desc: 'User and content moderation' },
    ],
    features: [
      'Video upload system for dance studios',
      'Subscription payment model',
      'Role-based access control (admin, studio, subscriber)',
      'Content access restriction by subscription status',
      'User and studio dashboards',
    ],
    techStack: ['Laravel', 'React', 'MySQL', 'REST API', 'Tailwind CSS'],
    challenges: [
      'Content access control based on subscription status',
      'Video storage and delivery at scale',
      'Multi-role permission system',
    ],
    solutions: [
      'Middleware-based access guard per route',
      'Chunked video upload with storage abstraction',
      'Policy-based authorization per role',
    ],
    whyMicroservice: null,
    color: 'purple',
    gradient: 'from-purple-600/20 via-transparent to-transparent',
  },
]

export const experiences = [
  {
    title: 'Assistant Lecturer',
    company: 'Informatics Engineering Department',
    period: '2023 – 2024',
    type: 'Academic',
    description:
      'Assisted in delivering lab sessions for programming and web development courses. Mentored students through hands-on projects, reviewed and graded assignments, and provided structured feedback to help students grasp core concepts in algorithms, OOP, and web technologies.',
    highlights: ['Lab session facilitation', 'Student mentoring', 'Assignment review', 'Code review sessions'],
  },
  {
    title: 'Web Developer Intern',
    company: 'Independent',
    period: '2024',
    type: 'Internship',
    description:
      'Built  web applications for internship regostrstion for high school student at Ungu Store adn Ungu Studio.',
    highlights: ['Full-stack development', 'Client requirements gathering', 'Deployment & maintenance', 'REST API design'],
  },
]


