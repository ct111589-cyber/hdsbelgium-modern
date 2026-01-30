import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div><div className="text-lg font-semibold">HDS Belgium</div><div className="mt-2 text-sm text-zinc-400">Dredging Technology Experts</div></div>
          <div className="text-sm"><div className="font-semibold">Contact</div><div className="mt-2 text-zinc-400">info@hdsbelgium.com</div><div className="text-zinc-400">Belgium — Worldwide Projects</div></div>
          <div className="text-sm"><div className="font-semibold">Legal</div><div className="mt-2 text-zinc-400">{t("privacy")}</div><div className="text-zinc-400">{t("terms")}</div></div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">{t("copyright", { year })}</div>
    </footer>
  );
}
