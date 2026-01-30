import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const base = locale === "en" ? "" : `/${locale}`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`${base}/`} className="font-semibold tracking-tight">HDS Belgium</Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm font-medium text-zinc-700 hover:text-zinc-900" href={`${base}/products`}>{t("products")}</Link>
          <Link className="text-sm font-medium text-zinc-700 hover:text-zinc-900" href={`${base}/applications`}>{t("applications")}</Link>
          <Link className="text-sm font-medium text-zinc-700 hover:text-zinc-900" href={`${base}/contact`}>{t("contact")}</Link>
          <Link className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-95" href={`${base}/contact`}>{t("cta")}</Link>
        </nav>
      </div>
    </header>
  );
}
