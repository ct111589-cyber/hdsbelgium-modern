import { getTranslations } from "next-intl/server";
export default async function Contact({ params }: { params: { locale: "en" | "fr" | "de" } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "contact" });
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
      <p className="mt-3 max-w-3xl text-zinc-600">{t("intro")}</p>
      <div className="mt-10 rounded-2xl border bg-zinc-50 p-6">
        <div className="font-semibold">{t("company")}</div>
        <div className="mt-2 text-zinc-700">{t("emailLabel")}: info@hdsbelgium.com</div>
        <div className="text-zinc-700">{t("worldwide")}</div>
      </div>
    </main>
  );
}
