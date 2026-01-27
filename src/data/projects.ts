interface Collaborator {
  name: string;
  avatar: string;
  linkedInUrl?: string;
}

interface Project {
  title: string;
  category: string;
  collaborators: Collaborator[];
  backgroundColor: string;
  backgroundType: "gradient" | "solid";
  logo: string;
  logoClass?: string;
}

export const projects: Project[] = [
  {
    title: "MySelf",
    category: "Mobile and Web Development",
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
        avatar: "assets/images/projects/jonderpfp.JPG",
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
    backgroundColor: "bg-sky-300",
    backgroundType: "solid",
    logo: "/assets/images/projects/SKEM.svg",
    logoClass: "pl-6 pt-4",
  },
];
