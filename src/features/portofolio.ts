export interface Experience {
  title: string;
  company: string;
  year: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  based: string;
  bio: string;
  status: string;
  statusLocation: string;
  yearsExperience: number;
  experience: Experience[];
  social: SocialLinks;
}

export interface CaseStudy {
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string[];
  description: string;
  year: string;
  caseStudy: CaseStudy;
  image?: string;
  link?: string;
}

export interface CarouselState {
  currentIndex: number;
  selectedPortfolio: PortfolioProject;
  isModalOpen: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: PortfolioProject;
}
