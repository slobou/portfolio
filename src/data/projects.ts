interface Collaborator {
  name: string;
  avatar: string;
  linkedInUrl?: string;
}

/** Optional: icon URL (e.g. from devicons or simple-icons CDN) */
export interface Technology {
  name: string;
  iconUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  collaborators: Collaborator[];
  /** Tailwind class (e.g. "bg-white") or CSS color: hex (#000433), rgb(), rgba(), hsl(), hsla() */
  backgroundColor: string;
  backgroundType: "gradient" | "solid";
  /** Logo URL or Cloudinary public ID (e.g. "portfolio/projects/myself-logo") */
  logo: string;
  logoClass?: string;
  /** Long-form project description for the modal (optional) */
  description?: string;
  /** Gallery images for the modal, up to ~4. Each entry can be a URL (http or /) or a Cloudinary public ID (e.g. "portfolio/projects/myself-1"). Falls back to [logo] if absent. */
  images?: string[];
  /** Tech stack for the modal (optional) */
  technologies?: Technology[];
  /** What you did / your responsibilities (optional). If length matches gallery slides, one is shown per dot; otherwise all are shown as a list. */
  responsibilities?: string[];
}

export const projects: Project[] = [
  {
    id: "boss-tech",
    title: "BOSS.Tech",
    category: "Frontend Engineer · San José, CR · Dec 2024 – Present",
    description:
      "BOSS.Tech is the first Business SuperApp. Unlike tools that only connect apps, but brings them together into one easy-to-use platform, and gives you actionable insights to run your business.",
    collaborators: [],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/BTLogoDark.png",
    responsibilities: [
      "React Native SuperApp (TypeScript, Expo): contacts, chat, AI, financial tools; worked with design on dashboards and UX.",
      "Architected MiniApp platform: improved performance via memoization and component structure.",
      "Backend (intern): REST APIs, third-party integrations, automation, and auth with engineering teams.",
    ],
    technologies: [
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },

      {
        name: "React Native",
        iconUrl: "https://cdn.simpleicons.org/react",
      },
      {
        name: "Expo",
        iconUrl: "https://cdn.simpleicons.org/expo/white",
      },
      { name: "Redux", iconUrl: "https://cdn.simpleicons.org/redux" },
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python" },
      { name: "Git", iconUrl: "https://cdn.simpleicons.org/git" },
      {
        name: "GitLab",
        iconUrl: "https://cdn.simpleicons.org/gitlab",
      },
      {
        name: "Figma",
        iconUrl: "https://cdn.simpleicons.org/figma/white",
      },
    ],
    images: [
      "/assets/images/projects/BTLogoDark.png",
      "IMG_9395_ic1cin",
      "Photo5_bfswlp",
    ],
  },
  {
    id: "myself",
    title: "MySelf",
    category: "Mobile and Web Development",
    description:
      "MySelf is a mobile and web application focused on personal growth and self-tracking. Built with a cross-functional team, it combines technical expertise with a passion for empowering users.",
    images: [
      "/assets/images/projects/Myself.svg",
      "https://avatars.githubusercontent.com/u/84209448?v=4",
    ],
    technologies: [
      { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },
    ],
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Santiago Villarreal Arley",
        avatar: "https://avatars.githubusercontent.com/u/115122095?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiagovillarrealarley",
      },
      {
        name: "Andrés Meléndez Carvajal",
        avatar: "https://avatars.githubusercontent.com/u/112191984?v=4",
        linkedInUrl: "https://www.linkedin.com/in/andres-melendez-carvajal",
      },
      {
        name: "Joseth Gamboa Guzmán",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQG_a-YAYlVqjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707603073452?e=1770854400&v=beta&t=1_LGQCg627XYSQjtMFmCbsYVSvaK43GlnW65-G_YZz0",
        linkedInUrl: "https://www.linkedin.com/in/josethgamboa",
      },
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/Myself.svg",
  },
  {
    id: "wall-it",
    title: "WALL-IT",
    category: "Mobile and Web Development",
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Alejandro Quesada Ruiz",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4D03AQGLgc4i40aEUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710272375936?e=1770854400&v=beta&t=ssBu7VL9QjG_0qb61PhQe6vijI-bN4EAKe4DKxPPrSk",
        linkedInUrl:
          "https://www.linkedin.com/in/alejandro-quesada-ruiz-b5a3a62ba",
      },
      {
        name: "Sofía Ardila Salguero",
        avatar:
          "https://media.licdn.com/dms/image/v2/D5603AQFYYUoFuNz_4g/profile-displayphoto-shrink_200_200/B56ZRzW5NnGQAY-/0/1737102170572?e=1770854400&v=beta&t=JBC_v3-zz-rW5ihOPYiY7a5PMsTFbBMtIKJkNUys3OY",
        linkedInUrl:
          "https://www.linkedin.com/in/sof%C3%ADa-ardila-salguero-1971a52ba",
      },
      {
        name: "Jonder Mora Azofeifa",
        avatar: "/assets/images/projects/jonderpfp.JPG",
        linkedInUrl: "https://www.linkedin.com/in/jonderma",
      },
      // Example of 5th collaborator - will show as "+1"
      // {
      //   name: "Gabriel Cabezas",
      //   avatar: "...",
      //   linkedInUrl: "...",
      // },
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/WALL-IT.svg",
  },
  {
    id: "koired",
    title: "Koired",
    category: "Web Development",
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Alejandro Quesada Ruiz",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4D03AQGLgc4i40aEUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710272375936?e=1770854400&v=beta&t=ssBu7VL9QjG_0qb61PhQe6vijI-bN4EAKe4DKxPPrSk",
        linkedInUrl:
          "https://www.linkedin.com/in/alejandro-quesada-ruiz-b5a3a62ba",
      },
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/koired.svg",
  },
  {
    id: "skemclub",
    title: "SKEMClub",
    category: "Innovation",
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Jeisson Cordoba ",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQFk8IHwzGhluw/profile-displayphoto-scale_200_200/B4EZvt1jbVIEAY-/0/1769221799445?e=1770854400&v=beta&t=0H52E6vdbct2d8gqrIevK7OJGUkGdjoaf4RR3-Fugfk",
        linkedInUrl: "https://www.linkedin.com/in/jeisson-cordoba-2a042536a",
      },
      {
        name: "Santiago Villarreal Arley",
        avatar: "https://avatars.githubusercontent.com/u/115122095?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiagovillarrealarley",
      },
      {
        name: "Sofía Cerdas",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQHcoPeRNBPkbg/profile-displayphoto-scale_200_200/B4EZvoR5YaGoAY-/0/1769128565406?e=1770854400&v=beta&t=oRtLCLW-fV-q2spcPz5mVjNiIBAG7giK2Kt1DRau_XI",
        linkedInUrl: "https://www.linkedin.com/in/sofia-cerdas",
      },
      {
        name: "Jonder Mora Azofeifa",
        avatar: "/assets/images/projects/jonderpfp.JPG",
        linkedInUrl: "https://www.linkedin.com/in/jonderma",
      },
      {
        name: "Leonora Mena",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQGiiJ9V-RfRLg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710272365620?e=1763596800&v=beta&t=EVahatXZ4TLGiQYxIzz1M4xGncz2SelKHwzhb2IaWxY",
        linkedInUrl:
          "https://www.linkedin.com/in/leonora-mena-gonz%C3%A1lez-586b2a2b9",
      },
    ],
    backgroundColor: "bg-sky-400",
    backgroundType: "solid",
    logo: "/assets/images/projects/SKEM.svg",
    logoClass: "pl-6 pt-4",
  },
];
