import type { ProfileData, SocialLinks } from "@/features/portofolio";

type ExtendedProfileData = ProfileData & {
  resumePdfUrl: string;
};

export const profile = {
  name: "Chandra Arcychan Azfar",
  title: "Software Developer",
  location: "Indonesia, GMT +7",
  based: "Based in Bandung",
  bio: "Software Developer",
  status: "Available for hire",
  statusLocation: "Remote / Bandung",
  yearsExperience: "2+",
  resumePdfUrl: "/resume.pdf",
  experience: [
    {
      title: "Software Developer",
      company: "PT. Saka Sakti Inovasi",
      year: "Apr 2025 - Oct 2026",
    },
    {
      title: "Junior Developer",
      company: "PT. Saka Sakti Inovasi",
      year: "Oct 2024 - Apr 2025",
    },
    {
      title: "Software Developer",
      company: "PT. Kunci Transformasi Digital",
      year: "May 2024 - Mar 2025",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/chandra-arcychan-azfar/",
    github: "https://github.com/Arcaz22",
    email: "mailto:chandraarcychan@gmail.com",
    medium: "https://medium.com/@chandraarcychan",
  } as SocialLinks,
} satisfies ExtendedProfileData;
