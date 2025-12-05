import { 
  Zap, 
  ShieldCheck, 
  Briefcase, 
  Settings
} from 'lucide-react';
import { ExperienceItem, ServiceItem, PortfolioItem, TestimonialItem, AchievementItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const CV_LINK = "https://drive.google.com/"; // Placeholder for actual CV link

export const ASSETS = {
  LOGO: "/assets/logo.png",
  HERO_BG: "/assets/hero-bg.jpg",
  PROFILE: "/assets/profile.jpg",
  TESTIMONIALS: [
    "/assets/client-1.jpg",
    "/assets/client-2.jpg",
    "/assets/client-3.jpg",
    "/assets/client-4.jpg"
  ]
};

export const HERO_DATA = {
  name: "I'm Christopher Nwosu",
  title: "Electrical Engineer | Solid Control Specialist",
  tagline: "I help companies, businesses, brands, and individuals with driving safe, efficient, and reliable electrical engineering solutions tailored to their needs."
};

export const ABOUT_DATA = [
  "I am an Electrical Engineer and Solid Control Specialist with a deep track record in the oil and gas industry. My unique background allows me to bridge technical engineering with hands-on operational execution, ensuring systems run efficiently both onshore and offshore.",
  "Beyond technical repairs, I focus on leadership and prevention. I mentor teams, optimize equipment layouts, and enforce strict HSE standards to reduce downtime and ensure safety. I don't just fix problems; I implement strategies to prevent them.",
  "I am committed to staying ahead of industry trends and emerging technologies. If you need a partner dedicated to precision, reliability, and project success, I am ready to deliver results."
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Solid Control Operations",
    description: "Supervision of solid control equipment, including decanter centrifuges, vertical dryers, shakers, augers, and conveyors. Skilled in rig-up, rig-down, installation, and optimisation of waste management systems to improve efficiency and recovery rates.",
    icon: Settings
  },
  {
    title: "Electrical Maintenance",
    description: "Comprehensive maintenance strategies for industrial equipment. Skilled in troubleshooting, rig-up, rig-down, installation, and optimisation of systems to ensure peak operational performance.",
    icon: Zap
  },
  {
    title: "Risk Management",
    description: "Strong background in health, safety, and environmental practices. Experienced in conducting toolbox talks, emergency drills, and enforcing BOSIET/OSP standards to maintain safe working environments.",
    icon: ShieldCheck
  },
  {
    title: "Project Support",
    description: "Technical supervision and project execution support. From installation to optimization, ensuring waste management and electrical systems meet project timelines and efficiency targets.",
    icon: Briefcase
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Dentonite Oil Field",
    period: "2022 – Present",
    achievements: [
      "Achieved a 25% reduction in downtime by implementing preventive maintenance programmes.",
      "Improved spares and consumables management, reducing stock-out incidents by 30%.",
      "Led daily toolbox talks and enforced HSE protocols to maintain a safe, compliant work environment."
    ]
  },
  {
    company: "Mosab Marine",
    period: "2019 – 2021",
    achievements: [
      "Enhanced solid control efficiency, achieving a 15% improvement in cuttings recovery through optimised equipment layouts.",
      "Reduced repeat equipment faults by 20% through systematic root-cause analyses and corrective actions."
    ]
  },
  {
    company: "Wastefree Offspring",
    period: "2015 – 2019",
    achievements: [
      "Successfully commissioned solid control and conveyance systems across multiple rigs.",
      "Delivered zero lost-time incidents while executing equipment repairs and installations."
    ]
  },
  {
    company: "Montego Oil & Gas",
    period: "2013 – 2015",
    achievements: [
      "Streamlined spare-parts reorder processes, reducing lead times by 20%.",
      "Ensured equipment reliability through routine inspections and compliance monitoring."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    title: "Certificate of Competence – Electrical Installation Work",
    institution: "Federal Ministry of Labour & Productivity"
  },
  {
    title: "Basic Offshore Safety Induction & Emergency Training (BOSIET)",
    institution: "Industry Standard Certification"
  },
  {
    title: "Offshore Safety Permit (OSP)",
    institution: "Department of Petroleum Resources"
  },
  {
    title: "Drill Waste Management & Treatment",
    institution: "C.S.I. Training"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    title: "Troubleshooting And Resolving a Major Electrical Fault On The Rig",
    summary: "An unexpected electrical fault developed in an oil rig and threatened production. I identified the root cause where others failed.",
    fullDetails: {
      problem: "During an oil drilling exercise, the rig experienced a sudden ground fault with heavy leakage that threatened to shut down the entire power distribution line. The situation was critical for safe operations.",
      diagnosis: [
        "Initiated systematic troubleshooting, shutting down equipments one by one.",
        "Performed megger insulation test on supply cable (confirmed intact).",
        "Traced circuit precisely to discover a main breaker terminal was in contact with the panel body."
      ],
      solution: [
        "Identified the root cause.",
        "Requested replacement breaker.",
        "Changed breaker, reconnected system, and restored power."
      ],
      outcome: [
        "Electrical fault successfully rectified.",
        "Power distribution stabilized.",
        "Full operations resumed without further interruption."
      ],
      businessImpact: [
        "Avoided costly downtime and potential rig shutdown.",
        "Saved expenses associated with equipment replacement.",
        "Safeguarded safety and continuity of operations."
      ]
    }
  },
  {
    title: "Machine Shutdown Caused By Hydraulic Hose Failure",
    summary: "A critical machine shutdown caused by hydraulic hose failure was rapidly diagnosed and resolved through systematic troubleshooting.",
    fullDetails: {
      problem: "A critical machine suddenly tripped and shut down via its protection mechanism. Essential to ongoing operations, quick restoration was required.",
      diagnosis: [
        "Identified pressure switch activation cutting power to main drive.",
        "Further checks revealed a burst hydraulic hose line leading to pressure drop.",
        "Pressure switch correctly triggered shutdown to prevent damage."
      ],
      solution: [
        "Replaced damaged hydraulic hose.",
        "Secured hydraulic linkage for proper sealing.",
        "Reset pressure switch and verified electrical connections."
      ],
      outcome: [
        "Machine restored to full working order.",
        "Shutdown protection feature validated.",
        "Fault resolved with minimal downtime."
      ],
      businessImpact: [
        "Avoided extended machine outage.",
        "Protected equipment from potential motor/drive failures.",
        "Reduced safety risks from hydraulic leaks."
      ]
    }
  },
  {
    title: "Restoring A Motor Failure Caused by Cooling Fan Damage",
    summary: "A motor tripped due to an overload condition triggered by overheating. Troubleshooting identified a missing cooling fan as the root cause.",
    fullDetails: {
      problem: "One of the motors on site suddenly tripped due to an overload condition, suggesting overheating. Immediate action was needed to prevent permanent damage.",
      diagnosis: [
        "Carried out step-by-step troubleshooting.",
        "Discovered the rear cooling fan was missing its blades.",
        "Lack of ventilation caused overheating, triggering overload protection."
      ],
      solution: [
        "Sourced and installed replacement cooling fan.",
        "Reset overload relay.",
        "Tested motor under load to confirm safe operating temperatures."
      ],
      outcome: [
        "Motor successfully restored.",
        "Cooling system re-established.",
        "Operations resumed without delay."
      ],
      businessImpact: [
        "Avoided costly motor replacement.",
        "Minimised production downtime.",
        "Extended motor service life."
      ]
    }
  },
  {
    title: "Resolving A Faulty Limit Switch On An Alfa Laval D1000",
    summary: "A recurring shutdown of an Alfa Laval D1000 centrifuge was traced to a loose terminal on a limit switch.",
    fullDetails: {
      problem: "Alfa Laval D1000 centrifuge shut down unexpectedly. In-house checks found no fault, but the machine could not restart.",
      diagnosis: [
        "Conducted detailed inspection of external components.",
        "Noticed abnormal vibration affecting the back-drive cover limit switch.",
        "Discovered a loose terminal screw causing intermittent 'open' signals."
      ],
      solution: [
        "Secured faulty terminal by tightening the screw.",
        "Inspected wiring connections.",
        "Re-ran machine monitoring vibration."
      ],
      outcome: [
        "Centrifuge restored to stable operation.",
        "False shutdown signals eliminated.",
        "Operations resumed."
      ],
      businessImpact: [
        "Specialist intervention saved critical downtime.",
        "Operational reliability restored.",
        "Highlighted importance of checking mechanical-electrical interfaces."
      ]
    }
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  { value: 10, label: "Years Experience", suffix: "+" },
  { value: 1352, label: "Completed Tasks", suffix: "+" },
  { value: 294, label: "Happy Clients", suffix: "+" }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "Christopher is reliable, professional, and very detail-oriented. He ensures every project runs smoothly, prioritising safety and efficiency.",
    name: "Ben Lewis",
    role: "Managing Director",
    image: ASSETS.TESTIMONIALS[0]
  },
  {
    quote: "We appreciated Christopher’s expertise and calm approach under pressure. He solved challenges quickly, guided our team effectively, and delivered excellent results.",
    name: "Eze Richard",
    role: "CEO",
    image: ASSETS.TESTIMONIALS[1]
  },
  {
    quote: "Christopher combines technical knowledge with genuine teamwork. His guidance improved our operations significantly, reducing downtime and keeping everything safe.",
    name: "Roselyn Nwala",
    role: "Contractor",
    image: ASSETS.TESTIMONIALS[2]
  },
  {
    quote: "Christopher’s dedication and professionalism impressed us. He managed complex equipment flawlessly, improved reliability, and trained our staff effectively.",
    name: "Mike Gideon",
    role: "Hotel Manager",
    image: ASSETS.TESTIMONIALS[3]
  }
];

export const CONTACT_INFO = {
  email: "nwosuchristopher111@gmail.com",
  phone: "+2347038499784",
  address: "Port Harcourt, NG",
  mapQuery: "Port Harcourt, Nigeria"
};