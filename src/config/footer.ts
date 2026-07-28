import type { FooterLink, SocialLink } from "../components/Footer";

export const footerConfig = {
  aboutTitle: "About me",
  aboutText: "Backend developer who likes building in Python and Go.",

  links: [
    { label: "Home", href: "/" },
    {
      label: "Development",
      href: "https://github.com/rober0xf/notifier",
    },
    {
      label: "Releases",
      href: "https://github.com/rober0xf/notifier/releases",
    },
  ] satisfies FooterLink[],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/rober0xf",
      iconClass: "pi pi-github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/rober0xf",
      iconClass: "pi pi-linkedin",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/rober0xf",
      iconClass: "pi pi-twitter",
    },
  ] satisfies SocialLink[],

  copyright: "© 2026 rober0xf. Feel free to use this code.",
} as const;
