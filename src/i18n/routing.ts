import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["de","en", "es","fr","it","ru","uk"], // Define in this line the possible languages for translation
  defaultLocale: "en", // Define in this line the default language to be shown
  pathnames: {
    en: '/',
    de: '/de',
    es: '/es',
    fr: '/fr',
    it: '/it',
    ru: '/ru',
    uk: '/uk',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);