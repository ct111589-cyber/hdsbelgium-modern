import { useLocale, useTranslations } from "next-intl";

type Props = { pdf: { en: string; fr: string; de: string } };

export default function PdfDownloadButton({ pdf }: Props) {
  const locale = useLocale() as "en" | "fr" | "de";
  const t = useTranslations("products");
  const file = pdf?.[locale];
  if (!file) return null;

  return (
    <a
      href={`/pdfs/${file}`}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold hover:bg-zinc-50"
    >
      📄 {t("pdf")}
    </a>
  );
}
