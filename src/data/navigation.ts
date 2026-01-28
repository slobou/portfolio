/** Shape compatible with CardNavItem; kept in data layer to avoid coupling to components. */
export type NavMenuItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: { label: string; href: string; ariaLabel: string }[];
};

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  { label: "About", bgColor: "#000", textColor: "#fff", links: [] },
  { label: "Projects", bgColor: "#000", textColor: "#fff", links: [] },
  { label: "Contact", bgColor: "#000", textColor: "#fff", links: [] },
];
