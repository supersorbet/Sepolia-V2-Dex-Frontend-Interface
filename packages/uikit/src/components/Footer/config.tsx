import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "",
    items: [
      {
        label: "",
        href: "https://rxqueen.neocities.org/ac/newhorizons",
      },
    ],
  },
  {
    label: "...",
    items: [
      {
        label: "",
        href: "https://rxqueen.neocities.org/ac/newhorizons",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/PepePalOfficial",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/PepePalOfficial",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/PepePalOfficial",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/PepePalOfficial",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/PepePalOfficial/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/PepePalOfficial",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
