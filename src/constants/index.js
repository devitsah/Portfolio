import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML & Deep Learning",
    icon: backend,
  },
  {
    title: "Researcher",
    icon: mobile,
  },
  
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student-Mentor",
    company_name: "Creative Computing Society",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - June 2025",
    points: [
      "Developed and deployed 10+ web applications using modern stacks on Render and Vercel.",
      "Collaborated with cross-functional teams to mentor 1,200+ participants during HackTU 5.0.",
      "Guided teams in project building, deployment workflows, and best coding practices.",
      "Participated in code reviews and provided technical mentorship to enhance project quality.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "TIET",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Project",
    company_name: "TIET",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Designed and implemented a GATformer-PPO model to enhance blockchain sharding efficiency, improving accuracy by 23% and embedding diversity by 18%.",
      "Built a custom Ethereum simulation with 30,000+ transactions across 1,000+ accounts for realistic testing.",
      "Achieved a 27% reduction in cross-shard transactions and 14% lower shard load variance, optimizing scalability and network balance.",
      "Applied deep reinforcement learning and graph attention networks for dynamic shard migration and improved blockchain performance.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Interview Simulator",
    description:
      "Built a Flask-based platform for real-time face detection, emotion analysis, and speech processing, supporting 200+ sessions with interactive feedback. Integrated OpenCV and DeepFace to achieve over 95% accuracy in facial and emotion recognition for detailed behavior analysis, and used YOLOv8 to detect multiple persons, mobile phones, and tab-switch violations, reducing incidents by 30%.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/devitsah/AI_Interview_Simulator",
  },
  {
    name: "Video Conferencing App",
    description:
    "Built a secure real-time video conferencing platform with Clerk authentication, enabling seamless meeting management, scheduling, recording, and screen sharing—offering instant sessions, participant controls, and low-latency communication with full privacy. Enhanced collaboration through real-time interactions and integrated feedback features.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/devitsah/Video_Calling_Web_APP",
  },
  {
    name: "Event Management System",
    description:
      "Developed a shopping cart system with real-time ticket updates, reducing booking errors by 35%. Integrated Stripe for secure online payments, processing 500+ transactions, and built an admin dashboard to manage 1,000+ bookings, improving workflow efficiency by 40%.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/devitsah/Advanced_Event_Management_System",
  },
];

export { services, technologies, experiences, testimonials, projects };
