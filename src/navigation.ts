import { createSharedPathnamesNavigation } from "next-intl/navigation";
import locales from "@/constants/languages";

export type Locale = (typeof locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });