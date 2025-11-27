type SocialLinkLabel = "facebook" | "instagram" | "whatsapp" | "phone" | "email" | "telegram" | "viber";

export interface ISocItem {
  id: number;
  href: string;
  label: SocialLinkLabel;
  iconSrc: string;
  value?: string | number;
}

export const SOCIAL_LINKS: ISocItem[] = [
  {
    id: 1,
    href: "https://www.facebook.com/",
    label: "facebook",
    iconSrc: "/icons/facebook.svg",
  },
  {
    id: 2,
    href: "https://www.instagram.com/aurea.ge/",
    label: "instagram",
    iconSrc: "/icons/instagram.svg",
  },
  {
    id: 3,
    href: "https://www.whatsapp.com/",
    label: "whatsapp",
    iconSrc: "/icons/media/whatsapp.svg",
  },
  {
    id: 4,
    href: "tel:+995511555530",
    value: "+995 511 55 55 30",
    label: "phone",
    iconSrc: "/icons/media/whatsapp.svg",
  },
  {
    id: 5,
    href: "mailto:info@aurea.io",
    value: "info@aurea.io",
    label: "email",
    iconSrc: "/icons/media/E-mail.svg",
  },
  {
    id: 5,
    href: "viber://chat?number=995577777777",
    value: "viber",
    label: "viber",
    iconSrc: "/icons/media/viber.svg",
  },
  {
    id: 6,
    href: "telegram://chat?number=995577777777",
    value: "telegram",
    label: "telegram",
    iconSrc: "/icons/media/telegram.svg",
  },
];


export const getSocial = (label: SocialLinkLabel): ISocItem | undefined => {
  return SOCIAL_LINKS.find((item) => item.label === label);
}

export const getSocialFilteredArr = (labels?: SocialLinkLabel[]): ISocItem[] => {
  if (!labels) return SOCIAL_LINKS;

  return SOCIAL_LINKS
      .filter((item) => labels.includes(item.label))
      .sort((a, b) => labels.indexOf(a.label) - labels.indexOf(b.label));
};