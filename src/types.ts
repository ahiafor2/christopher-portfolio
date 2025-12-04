import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  role?: string; 
  period: string;
  achievements: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  title: string;
  summary: string;
  fullDetails: {
    problem: string;
    diagnosis: string[];
    solution: string[];
    outcome: string[];
    businessImpact: string[];
  };
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface AchievementItem {
  value: number;
  label: string;
  suffix?: string;
}