export interface Collaborator {
  name: string;
  avatar: string;
  linkedInUrl?: string;
}

export interface Technology {
  name: string;
  iconUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  collaborators: Collaborator[];
  backgroundColor: string;
  backgroundType: "gradient" | "solid";
  logo: string;
  logoClass?: string;
  description?: string;
  images?: string[];
  carouselLogoBackground?: string;
  carouselLogoClass?: string;
  technologies?: Technology[];
  responsibilities?: string[];
  achievements?: string[];
}

export const projects: Project[] = [
  {
    id: "boss-tech",
    title: "BOSS.Tech",
    category: "Frontend Engineer · San José, CR · Dec 2024 – Present",
    description:
      "BOSS.Tech is the first Business SuperApp. Unlike tools that only connect apps, it brings them together into one easy-to-use platform and gives you actionable insights to run your business.",
    collaborators: [],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/BTLogoDark.png",
    responsibilities: [
      "Built and maintained the business automation platform for SMB customers, integrating contact management, real-time chat, AI-powered features, and financial tools into a unified experience.",
      "Architected and developed the MiniApp platform, enabling modular application functionality so new features can be added within the core ecosystem without disrupting the main product.",
      "Developed and integrated RESTful APIs to connect third-party services, enabling seamless data synchronization across platforms for customers.",
      "Partnered with engineering teams to establish secure authentication protocols, implement scalable architecture patterns, and maintain code quality standards across the codebase.",
    ],
    technologies: [
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },
      { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react" },
      { name: "Expo", iconUrl: "https://cdn.simpleicons.org/expo/white" },
      { name: "Redux", iconUrl: "https://cdn.simpleicons.org/redux" },
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python" },
      { name: "Git", iconUrl: "https://cdn.simpleicons.org/git" },
      { name: "GitLab", iconUrl: "https://cdn.simpleicons.org/gitlab" },
      { name: "Figma", iconUrl: "https://cdn.simpleicons.org/figma/white" },
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
      "MySelf is a web application designed to support and monitor individuals' holistic health, addressing the physical and mental challenges brought about by the COVID-19 pandemic.",
    responsibilities: [
      "Developed the web application for users to track their mental and physical health and wellness.",
      "Built a backend structure allowing users to manage their mental and physical health and wellness data.",
    ],
    images: [
      "/assets/images/projects/Myself.svg",
      "1000024456_u4qjvk",
      "1000007351_jkcla4",
    ],
    technologies: [
      { name: "HTML", iconUrl: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", iconUrl: "https://cdn.simpleicons.org/css" },
      { name: "SCSS", iconUrl: "https://cdn.simpleicons.org/sass" },
      { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript" },
      { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/node.js" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express/white" },
      { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb" },
      {
        name: "Android Studio",
        iconUrl: "https://cdn.simpleicons.org/android",
      },
      { name: "Git", iconUrl: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/white" },
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
    achievements: ["1st place in the Expotec 2022 Science Fair"],
  },
  {
    id: "wall-it",
    title: "WALL-IT",
    category: "Mobile and Web Development",
    description:
      "Groundbreaking FinTech project aimed at helping young adults enhance their financial well-being and boost their financial knowledge.",
    responsibilities: [
      "Developed the web, desktop, and mobile applications based on the most essential features for good financial health.",
      "Built a backend structure allowing users to manage their financial and goal-related data.",
    ],
    technologies: [
      { name: "React", iconUrl: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },
      { name: "Expo", iconUrl: "https://cdn.simpleicons.org/expo/white" },
      { name: "Electron", iconUrl: "https://cdn.simpleicons.org/electron" },
      {
        name: "Tailwind CSS",
        iconUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
      { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/node.js" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express/white" },
      { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb" },
    ],
    achievements: [
      "2nd place in the Expotec 2023 Science Fair",
      "Best idea with business potential at the Expotec 2023 Science Fair",
      "Special participation in the Maker Fair 2024 with Universidad Cenfotec",
      "Selected for a special collaboration with the Contraloría General de la República, through Universidad Cenfotec.",
    ],
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
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/WALL-IT.svg",
    images: [
      "/assets/images/projects/WALL-IT.svg",
      "Photo8_jjcxvq",
      "IMG_8899_kchjbr",
      "IMG_8586_hnotoj",
      "edcea2a5-48fc-4968-a99c-6c04639e5e4a_2_z9pzs5",
      "Photo15_nfqkmk",
      "Photo1_pqk84i",
      "IMG_4322_ugpej8",
      "480584151_657550379948718_3774104364415340793_n_v5gl4w",
    ],
  },
  {
    id: "koired",
    title: "Koired",
    category: "Web Development",
    description:
      "Platform designed to empower businesses and professionals of all sizes. With an advanced enterprise resource planning (ERP) and customer relationship management (CRM) tools, Koired simplifies organization, optimizes processes, and minimizes operational errors.",
    achievements: [
      "Special participation in the Maker Fair 2025 with Universidad Cenfotec",
    ],
    responsibilities: [
      "Developed the web application, creating a responsive and user-friendly interface for users to manage their business and professional data according to their needs, providing the most personalized experience.",
      "Built, in collaboration with the backend team, a system where entrepreneurs and company owners can organize and optimize their operations, increasing productivity and efficiency.",
    ],
    technologies: [
      { name: "React", iconUrl: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },
      { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/next.js/white" },
      {
        name: "Tailwind CSS",
        iconUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
    ],
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
        name: "Gabriel Cabezas",
        avatar: "",
      },
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/koired.svg",
    images: [
      "/assets/images/projects/koired.svg",
      "Untitled_design_4_v4unrk",
      "Untitled_design_3_dqq2fk",
      "KOIRED_iwnxed",
    ],
  },
  {
    id: "turik",
    title: "Turik",
    category: "Mobile Development - Mentor",
    description:
      "Digital directory that promotes local Costa Rican businesses and culture. Turik helps balance international tourism and local development by giving merchants visibility and letting travelers discover authentic experiences, interactive maps, and educational content on flora, fauna, and culture.",
    responsibilities: [
      "Mentored a team of students by providing guidance and support in the development of a software project using different organizational strategies and best practices.",
      "Provided technical support when developing the mobile application, helping with the implementation of features and the resolution of issues.",
    ],
    achievements: [
      "1st place in the Expotec 2025 Science Fair",
      "Collaboration with businesses and local organizations to promote the project and local culture.",
    ],
    technologies: [
      { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },
      { name: "Expo", iconUrl: "https://cdn.simpleicons.org/expo/white" },
      {
        name: "Tailwind CSS",
        iconUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
      { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/node.js" },
      {
        name: "Supabase",
        iconUrl: "https://cdn.simpleicons.org/supabase",
      },
      { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/white" },
      { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql" },
    ],
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Josué Azofeifa ",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQGQCMbcdHw_2A/profile-displayphoto-scale_400_400/B4EZqeB.3FKoAk-/0/1763587911926?e=1771459200&v=beta&t=meg2Y1jvVTi8RxPv4z_9k7BdG7c7l3uOPAmEnYGT1bY",
        linkedInUrl: "https://www.linkedin.com/in/josue-azofeifa-947986395",
      },
      {
        name: "Andrés Sandí Chinchilla",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQGPVPC4RyKhRw/profile-displayphoto-scale_400_400/B4EZkN2xuJIkAk-/0/1756874089028?e=1771459200&v=beta&t=6TzkbB9NbAZbEd7Rr4DAqgGYKW02L_AQUF8qoY11tDI",
        linkedInUrl:
          "https://www.linkedin.com/in/andr%C3%A9s-sand%C3%AD-85055320b/",
      },
    ],
    backgroundColor: "#04724D",
    backgroundType: "solid",
    logo: "/assets/images/projects/TurikLogo.png",
    carouselLogoBackground: "#04724D",
    images: [
      "/assets/images/projects/TurikLogo.png",
      "iPhone_16_ankkgr",
      "WhatsApp_Image_2026-01-28_at_17.35.53_dvxkbg",
    ],
  },
  {
    id: "startup-supernovas",
    title: "Startup Supernovas",
    category: "Entrepreneurship Organization",
    description:
      "An entrepreneurship organization fostering student innovation through mentorship, collaboration, real business creation, and community building to develop the next generation of founders.",
    collaborators: [],
    responsibilities: [
      "Fostered student innovation through mentorship, collaboration, real business creation, and community building to develop the next generation of founders.",
      "Participated in different entrepreneurship events and workshops to learn and share knowledge with other entrepreneurs and students.",
    ],
    achievements: ["Led the club as president from Q1 2025 to Q3 2025."],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/supernovas.jpeg",
    images: [
      "/assets/images/projects/supernovas.jpeg",
      "Photo2_hjcda4",
      "515bbf84-4c6d-4299-b68e-3e52dfa73f27_2_aooral",
      "2026sts_killr4",
    ],
  },
  {
    id: "b-world",
    title: "B-World",
    category: "Video Game Development & Entrepreneurship",
    description:
      "Free, gamified educational video game where users learn to entrepreneur by playing. A life and business simulator where players build a digital venture, make decisions, learn marketing, sales, and finance, and join a global virtual world with other entrepreneurs.",
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Hillary Corrales",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQFWNo-qHea2fg/profile-displayphoto-scale_200_200/B4EZuLgvf_HUAY-/0/1767572175875?e=1771459200&v=beta&t=nt_-21QMg4lMgYKfD-C4u-pey4h8kZSiUtHSYvWaQ7Y",
        linkedInUrl: "https://www.linkedin.com/in/hillary-corrales-b462411b7",
      },
    ],
    responsibilities: [
      "Designed and architected a video game with a digital solution to help students learn about entrepreneurship, business management, and financial literacy.",
      "Developed the video game considering real-world business challenges and financial scenarios.",
      "Pitched the game to different investors to secure funding and support to continue developing the game.",
    ],
    achievements: ["2nd place in the Technovation 2025 II Edition"],
    technologies: [
      { name: "Unity", iconUrl: "https://cdn.simpleicons.org/unity" },
      { name: "Blender", iconUrl: "https://cdn.simpleicons.org/blender" },
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/0.png",
    images: [
      "/assets/images/projects/0.png",
      "Screenshot_2026-01-30_at_2.16.11_AM_qyloaj",
      "Screenshot_2026-01-30_at_2.18.59_AM_w47cqu",
    ],
  },
  {
    id: "brandnest",
    title: "BrandNest",
    category: "Entrepreneurship & Web Development",
    description:
      "BrandNest is a platform that helps entrepreneurs and small businesses create and manage their brands. A place where your brand comes to life, your business starts to grow, and customers can search for products in a more personalized way.",
    responsibilities: [
      "Integrated AI tools to help entrepreneurs and small businesses create and manage their brands and help customers find the products they need in a more personalized way.",
      "Architected a site for entrepreneurs, small businesses, and customers where they could both benefit from the platform and have the opportunity to have a more centralized place to find and list products.",
    ],
    achievements: [
      "Participation in the Technovation 2025 I Edition",
      "Awarded a non-refundable grant from AUGE",
    ],
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Sara Guilá",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4D03AQEUMTXgvNaQsw/profile-displayphoto-scale_200_200/B4DZhe1uXdGkAY-/0/1753937799608?e=1771459200&v=beta&t=vJgzX5CmlZEnCuZBFRSiVkrikXskb3gfWhJ8_S9Dats",
        linkedInUrl:
          "https://www.linkedin.com/in/sara-priscilla-guil%C3%A1-coto-65b146378",
      },
      {
        name: "Diego Macero",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQFRy12sx5rb2Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707445303784?e=1771459200&v=beta&t=EYu5gajilaQRmZosrhJnKrb_0t03IMbCXXL5bm-lrt4",
        linkedInUrl:
          "https://www.linkedin.com/in/diego-macero-moreno-828237263",
      },
      {
        name: "Ignacio Duran",
        avatar:
          "https://instagram.fsjo10-1.fna.fbcdn.net/v/t51.2885-19/475225136_17948849501926262_2300310262896681524_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fsjo10-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QE9pEMv1_tAbRIwttXopcPcXh4WmWZIEIDwHGPLD994tQ30ViPswzdtn-5CSjxHfDU&_nc_ohc=NQEsMOpDj6EQ7kNvwF6hbt8&_nc_gid=lU-I3ucltNypKIGbEFsmpA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afr08ka67AnnYF2LJhY2IDoYTZ2l9a6FVoZJk1UrSMDXMg&oe=6982BE4E&_nc_sid=7a9f4b",
        linkedInUrl: "https://www.linkedin.com/in/ignacio-duran-93b811227/",
      },
    ],
    technologies: [
      { name: "React", iconUrl: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },
      { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/next.js/white" },
      {
        name: "Tailwind CSS",
        iconUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
      { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/node.js" },
      { name: "Supabase", iconUrl: "https://cdn.simpleicons.org/supabase" },
      { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/white" },
      { name: "Claude", iconUrl: "https://cdn.simpleicons.org/claude" },
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/Brandnest.png",
    images: [
      "/assets/images/projects/Brandnest.png",
      "BrandNest_-_Pitch_y6zg5z",
      "BrandNest_-_Pitch_1_qr8pwb",
    ],
  },
  {
    id: "f1-in-schools",
    title: "F1 In Schools - Nintai Nexus",
    category: "STEAM Education & Project Management",
    description:
      "An international Formula 1 competition featuring a team that introduces students to the principles of science, technology, engineering, and mathematics (STEM). We developed a scuderia and a whole team structure to compete in the competition, including the development of a model car considering aerodynamics and physics in order to be competitive with other teams and cars.",
    responsibilities: [
      "Team leader of the project, responsible for the overall direction and management.",
      "Project manager who developed strategies to achieve the best results in the competition by integrating Agile methodologies and project management techniques to ensure the project's success.",
    ],
    achievements: [
      "STEM Challenge Champion 2024 Development Class",
      "Best Enterprise Portfolio",
      "Best Design and Engineering Portfolio",
      "Most similar to a real Formula 1 car design",
      "Special mention in the F1 In Schools 2025 International Finals",
    ],
    collaborators: [
      {
        name: "Santiago Lobo",
        avatar: "https://avatars.githubusercontent.com/u/84209448?v=4",
        linkedInUrl: "https://www.linkedin.com/in/santiago-lobo-ulloa",
      },
      {
        name: "Jeisson Cordoba",
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
        name: "Joel Vargas Alemán",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQFDdNk1srBKnA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708565512715?e=1771459200&v=beta&t=jwsPnri3VoieTnYMqF9fZOYA355W3lo2ZjBkl1q6TqA",
        linkedInUrl: "https://www.linkedin.com/in/ignacio-duran-93b811227/",
      },
      {
        name: "Luis Ángel Sánchez",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4D03AQGUDvInuAyaIQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718211500194?e=1771459200&v=beta&t=dzqDL9W3ujG_vlTypxDPRsj5EGF7P0LV2GGLnKu055k",
        linkedInUrl:
          "https://www.linkedin.com/in/luis-%C3%A1ngel-s%C3%A1nchez-badilla/",
      },
      {
        name: "Amanda Cordero Trejos",
        avatar:
          "https://media.licdn.com/dms/image/v2/D5603AQH_86jHfHbv5A/profile-displayphoto-shrink_200_200/B56ZRS0Pb2GsAY-/0/1736556215537?e=1771459200&v=beta&t=jSJU6WCY6HUpu_WVG7QyP6s2PljCC1U9_nBTtpDE6wo",
        linkedInUrl:
          "https://www.linkedin.com/in/amanda-cordero-trejos-2b2a76312/",
      },
      {
        name: "María Curcó",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E03AQFZO7jgPblriQ/profile-displayphoto-shrink_400_400/B4EZYqiDlTHgAg-/0/1744470293631?e=1771459200&v=beta&t=lpMnVel7-5tPnSd72oOdqNRVLgmr2suPLbxXAcMNR4k",
        linkedInUrl:
          "https://www.linkedin.com/in/mar%C3%ADa-curc%C3%B3-0966b5299/",
      },
    ],
    images: [
      "/assets/images/projects/F1_in_Schools.png",
      "Photo14_sagrtm",
      "Photo10_j9unv8",
      "Photo11_ozulfy",
      "Photo9_ufmcac",
      "0140b70b-87a1-4e67-b5f2-3fa5dcf17a8b_2_f1kw4a",
      "IMG_9773_l6popj",
      "Photo7_xnyis3",
    ],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/F1_in_Schools.png",
  },
  {
    id: "skemclub",
    title: "SKEMClub",
    category: "Innovation",
    description:
      "SKEMClub is an incubator and accelerator of student projects and ideas, trying to take them to the real world by providing them with the resources and support they need to succeed, focusing on working in different areas like leadership, engineering, science, art, and communication.",
    responsibilities: [
      "Led the club as president during 2024.",
      "Participated as an active member of the club, helping with the organization of papers, events, and developing projects.",
      "Partnered with different organizations and companies to help with the development of ideas and bringing new opportunities to the students and their future.",
    ],
    achievements: [
      "Partnership with Microsoft",
      "Partnership with a special NASA program",
      "Attended the Multilingual Job Fair 2024 by CINDE",
    ],
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
          "https://media.licdn.com/dms/image/v2/D4E03AQGiiJ9V-RfRLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710272365620?e=1771459200&v=beta&t=0n3dX5_Kn_NA2EUOoS8IgVz_JTChNaELT1chmfiiHYk",
        linkedInUrl:
          "https://www.linkedin.com/in/leonora-mena-gonz%C3%A1lez-586b2a2b9",
      },
    ],
    backgroundColor: "bg-sky-400",
    backgroundType: "solid",
    logo: "/assets/images/projects/SKEM.svg",
    logoClass: "pl-6 pt-4",
    carouselLogoClass: "pl-6 pt-3",
    carouselLogoBackground: "bg-sky-400",
    images: [
      "/assets/images/projects/SKEM.svg",
      "Photo12_ksb437",
      "PHOTO-2024-03-11-17-05-56_zaffzi",
      "PHOTO-2024-03-11-17-45-39_ymxauw",
    ],
  },
  {
    id: "cedes-radio",
    title: "CEDES Radio",
    category: "Communication & Media",
    description:
      "Digital broadcasting medium for programs and special events at Don Bosco Technical High School where we built a whole community of students and teachers who created social media content and videos for the whole community.",
    responsibilities: [
      "Coordinated the alumni who were part of CEDES Radio and wanted to continue working with the club.",
      "Participated in programs as a host and reporter.",
      "Mentored new members in the club to help them develop their skills in talking to the camera and addressing an audience in a live broadcast.",
      "Created new content ideas and programs to keep the community engaged.",
    ],
    achievements: [
      "Hosted the Festival de la Luz 2024.",
      "Abroad experience to Guatemala to cover the tour of the CEDES Don Bosco Band.",
    ],
    collaborators: [],
    backgroundColor: "bg-white",
    backgroundType: "solid",
    logo: "/assets/images/projects/cedesRadio.jpg",
    images: [
      "/assets/images/projects/cedesRadio.jpg",
      "Photo4_nwc662",
      "Photo3_hbhocp",
      "Screenshot_2026-01-30_at_1.53.56_AM_twgi6o",
      "IMG_4337_ov1nr8",
      "IMG_0187_ovboq4",
    ],
  },
];
