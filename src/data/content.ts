export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface ProblemItem {
  title: string;
  theme: "blue" | "purple" | "green";
  icon: string;
  challenges: string[];
}

export interface SolutionStep {
  step: number;
  title: string;
  desc: string;
  icon: string;
}

export interface ProcessItem {
  step: number;
  label: string;
  sub: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  heading: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

export interface PartnershipTier {
  tier: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  isHiring?: boolean;
}

export const SITE_DATA = {
  brand: {
    name: "ADMYRA",
    fullName: "Digitally Enabled Real Employment",
    tagline: "Learn. Grow. Earn. Build Your Career.",
    statement: "Empowering Students. Building Careers. Creating Opportunities.",
    email: "info@admyra.in",
    phone: "+91 81014 25431",
    whatsapp: "918101425431",
    location: "Pan-India Operations",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    badge: "Digitally Enabled Real Employment",
    title: "Bridging the Gap Between",
    highlight: "Education & Employment",
    subtitle:
      "At ADMYRA, our mission is not just to provide training — it is to transform students into industry-ready professionals and connect them with real employment opportunities.",
    primaryCta: "Partner With Us",
    secondaryCta: "Learn More",
    videoCta: "Watch How It Works",
  },
  stats: [
    { number: 0, suffix: "+", label: "College & University Partners", icon: "Building2" },
    { number: 0, suffix: "+", label: "Students Impacted", icon: "Users" },
    { number: 0, suffix: "+", label: "Hiring Companies", icon: "Briefcase" },
    { number: 0, suffix: "%", label: "Placement Support Rate", icon: "Target" },
  ],
  problems: [
    {
      title: "For Students",
      theme: "blue",
      icon: "GraduationCap",
      challenges: [
        "Limited job opportunities after graduation",
        "Lack of industry-relevant and applied skills",
        "Poor interview readiness and resume quality",
        "Limited placement support from institutions",
        "Unclear career direction and guidance",
      ],
    },
    {
      title: "For Companies",
      theme: "purple",
      icon: "Building",
      challenges: [
        "High training costs for inexperienced freshers",
        "Longer onboarding periods before productivity",
        "Difficulty filtering and finding job-ready talent",
        "Slower and resource-intensive hiring cycles",
        "Skill gap between education and industry needs",
      ],
    },
    {
      title: "For Colleges & Universities",
      theme: "green",
      icon: "School",
      challenges: [
        "Intense pressure to improve placement records",
        "Limited corporate recruiter networks",
        "Growing student & parent employability concerns",
        "Need for quantifiable student career outcomes",
        "Requirement for structured training partnerships",
      ],
    },
  ],
  solutionSteps: [
    {
      step: 1,
      title: "Student Assessment",
      desc: "Evaluate skills, strengths, interests, and career goals to build personal pathways.",
      icon: "Search",
    },
    {
      step: 2,
      title: "Industry Training",
      desc: "Practical hands-on training modules aligned directly with modern employer expectations.",
      icon: "BookOpen",
    },
    {
      step: 3,
      title: "Soft Skills Development",
      desc: "Workplace communication, personality development, teamwork, and interview readiness.",
      icon: "MessageSquare",
    },
    {
      step: 4,
      title: "Corporate Connect",
      desc: "Direct recruitment engagement with our active corporate hiring partner network.",
      icon: "Handshake",
    },
    {
      step: 5,
      title: "Placement Support",
      desc: "Resume screening, interview rounds, and end-to-end guidance until final onboarding.",
      icon: "CheckCircle2",
    },
  ],
  processTimeline: [
    { step: 1, label: "Enroll", sub: "Register with ADMYRA", icon: "FileText" },
    { step: 2, label: "Assess", sub: "Diagnostic testing", icon: "Activity" },
    { step: 3, label: "Train", sub: "Applied industry skills", icon: "BookOpen" },
    { step: 4, label: "Prepare", sub: "Mocks & soft skills", icon: "UserCheck" },
    { step: 5, label: "Interview", sub: "Recruiter drives", icon: "Briefcase" },
    { step: 6, label: "Get Hired", sub: "Delivering Employment", icon: "Award" },
  ],
  services: [
    {
      id: "colleges",
      title: "For Universities",
      heading: "[University Program Heading]",
      description:
        "[Program description and institutional partnership details will be added here.]",
      features: [
        "[Key Deliverable 01]",
        "[Key Deliverable 02]",
        "[Key Deliverable 03]",
        "[Key Deliverable 04]",
        "[Key Deliverable 05]",
        "[Key Deliverable 06]",
      ],
      ctaText: "Inquire / Partner",
      ctaLink: "/services#universities",
    },
    {
      id: "students",
      title: "For Students",
      heading: "[Student Program Heading]",
      description:
        "[Program description and student career pathway details will be added here.]",
      features: [
        "[Key Deliverable 01]",
        "[Key Deliverable 02]",
        "[Key Deliverable 03]",
        "[Key Deliverable 04]",
        "[Key Deliverable 05]",
        "[Key Deliverable 06]",
      ],
      ctaText: "Inquire / Enroll",
      ctaLink: "/services#students",
    },
    {
      id: "companies",
      title: "For Employers",
      heading: "[Employer Program Heading]",
      description:
        "[Program description and corporate hiring details will be added here.]",
      features: [
        "[Key Deliverable 01]",
        "[Key Deliverable 02]",
        "[Key Deliverable 03]",
        "[Key Deliverable 04]",
        "[Key Deliverable 05]",
        "[Key Deliverable 06]",
      ],
      ctaText: "Inquire / Partner",
      ctaLink: "/services#companies",
    },
  ],
  benefits: [
    {
      title: "Industry-Oriented Training",
      description: "Designed according to real enterprise requirements, ensuring students learn modern tech stacks.",
      icon: "Zap",
    },
    {
      title: "Corporate Network",
      description: "Access to a growing network of 120+ active corporate hiring partners ready to hire fresh talent.",
      icon: "Globe",
    },
    {
      title: "Placement-Focused Approach",
      description: "End-to-end commitment from skill mapping all the way to final interview scheduling.",
      icon: "Target",
    },
    {
      title: "Reduced Hiring Costs",
      description: "Employers receive pre-trained, job-ready candidates, drastically cutting onboarding expense.",
      icon: "TrendingDown",
    },
    {
      title: "Better Placement Records",
      description: "Colleges and universities demonstrate superior placement statistics, boosting institutional ranking.",
      icon: "TrendingUp",
    },
    {
      title: "Scalable Partnership Model",
      description: "Flexible engagement solutions crafted for regional institutions, autonomous campuses, and universities.",
      icon: "Layers",
    },
  ],
  testimonials: [
    {
      quote: "ADMYRA's training and interview preparation helped me secure my first job within weeks of graduation. The mentorship was truly life-changing.",
      name: "Priya Sharma",
      role: "Software Developer",
      initials: "PS",
      rating: 5,
    },
    {
      quote: "The placement support and mentoring sessions gave me the confidence to crack multiple technical interviews. ADMYRA changed my perspective on career readiness.",
      name: "Rahul Verma",
      role: "Business Analyst",
      initials: "RV",
      rating: 5,
    },
    {
      quote: "Partnering with ADMYRA significantly improved our campus placement outcomes. Their structured methodology and recruiter connect are unmatched.",
      name: "Placement Cell Coordinator",
      role: "Partner Engineering Campus",
      initials: "PC",
      rating: 5,
    },
    {
      quote: "The soft skills and personality development workshops transformed my communication. I felt completely prepared when facing corporate panels.",
      name: "Ananya Patel",
      role: "HR Executive",
      initials: "AP",
      rating: 5,
    },
    {
      quote: "ADMYRA provided pre-trained candidates with hands-on exposure to our tools. We cut onboarding time by half and hired high-performing freshers.",
      name: "Kiran Mehta",
      role: "HR Manager, TechCorp",
      initials: "KM",
      rating: 5,
    },
    {
      quote: "Our students are now placed in reputed firms with strong packages within 3 months of completion. ADMYRA's ecosystem delivered on every promise.",
      name: "Dr. Suresh Kumar",
      role: "Dean, Technical University",
      initials: "SK",
      rating: 5,
    },
  ],
  partnerships: [
    {
      tier: "Foundation",
      title: "Foundation Partner",
      description: "Perfect for institutions taking their first step toward structured employability support.",
      features: [
        "Employability Workshops",
        "Career Guidance Sessions",
        "Student Diagnostic Assessments",
      ],
      cta: "Start With Foundation",
    },
    {
      tier: "Growth",
      title: "Growth Partner",
      popular: true,
      description: "Everything in Foundation, plus active placement assistance and corporate interaction.",
      features: [
        "Everything in Foundation",
        "Dedicated Placement Support",
        "Industry Interaction Sessions",
        "Mock Interview Preparation",
      ],
      cta: "Choose Growth",
    },
    {
      tier: "Elite",
      title: "Elite Partner",
      description: "The complete suite for institutions committed to industry-leading placement outcomes.",
      features: [
        "Everything in Growth",
        "Dedicated Placement Assistance",
        "Corporate Hiring Connect",
        "Recruitment Drives on Campus",
        "Placement Analytics & Reporting",
      ],
      cta: "Become an Elite Partner",
    },
  ],
  faqs: [
    {
      question: "What training programs does ADMYRA provide?",
      answer: "ADMYRA offers comprehensive employability training, corporate communication, soft skills development, interview preparation, resume building, and job-oriented skill programs tailored directly to current corporate hiring demands.",
    },
    {
      question: "Who can join ADMYRA programs?",
      answer: "Students seeking job-readiness, colleges aiming to elevate campus recruitment statistics, and corporate employers looking for pre-trained freshers can all join and benefit from ADMYRA's ecosystem.",
    },
    {
      question: "Are internship opportunities available?",
      answer: "Yes, internship and apprenticeship opportunities are regularly facilitated through our corporate hiring partner network, allowing students to gain critical hands-on enterprise experience before graduation.",
    },
  ],
  team: [
    {
      name: "Founder",
      role: "Chief Executive Officer",
      bio: "Visionary executive driving ADMYRA's national mission to bridge higher education and enterprise hiring through digital scale and student transformation.",
    },
    {
      name: "Co-Founder",
      role: "Chief Operations Officer",
      bio: "Operations and delivery strategist spearheading academic partnerships, campus integration, and high-impact curriculum execution nationwide.",
    },
    {
      name: "Join Our Team",
      role: "We're Hiring",
      bio: "Passionate about education, skilling, and youth empowerment? We are actively hiring across curriculum, partnership management, and tech.",
      isHiring: true,
    },
  ],
};
