export type NavMenuItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: { label: string; href: string; ariaLabel: string }[];
};

const CONTACT = {
  linkedIn: "https://www.linkedin.com/in/santiago-lobo-ulloa",
  github: "https://github.com/slobou",
  email: "slobo.coding@gmail.com",
} as const;

const CARD_COLORS = {
  about: { bg: "#19362d", text: "#fff" },
  experience: { bg: "#154134FF", text: "#fff" },
  contact: { bg: "#234D40FF", text: "#fff" },
} as const;

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  {
    label: "About",
    bgColor: CARD_COLORS.about.bg,
    textColor: CARD_COLORS.about.text,
    links: [
      {
        label: "Who is Santiago Lobo?",
        href: "#about",
        ariaLabel: "Go to About section",
      },
    ],
  },
  {
    label: "Experience",
    bgColor: CARD_COLORS.experience.bg,
    textColor: CARD_COLORS.experience.text,
    links: [
      {
        label: "Projects",
        href: "#projects",
        ariaLabel: "Go to Projects section",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: CARD_COLORS.contact.bg,
    textColor: CARD_COLORS.contact.text,
    links: [
      {
        label: "LinkedIn",
        href: CONTACT.linkedIn,
        ariaLabel: "Open LinkedIn profile",
      },
      {
        label: "GitHub",
        href: CONTACT.github,
        ariaLabel: "Open GitHub profile",
      },
      {
        label: "Email",
        href: CONTACT.email,
        ariaLabel: "Send email",
      },
    ],
  },
];
