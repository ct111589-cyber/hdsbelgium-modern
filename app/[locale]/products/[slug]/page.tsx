import { products } from "@/data/products";
import PdfDownloadButton from "@/components/PdfDownloadButton";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getTranslations } from "next-intl/server";

export default async function ProductPage({ params }: { params: { slug: string; locale: "en" | "fr" | "de" } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return null;
  const t = await getTranslations({ locale: params.locale, namespace: "products" });

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SeoJsonLd type="product" product={p} locale={params.locale} />
      <SeoJsonLd type="faq" faq={p.faq} />

      <p className="text-sm font-semibold text-brand-700">{p.category}</p>
      <h1 className="mt-2 text-4xl font-semibold">{p.name}</h1>
      <p className="mt-4 max-w-3xl text-zinc-600">{p.short}</p>

      <div className="mt-8 rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-semibold">{t("keySpecs")}</h2>
        <dl className="mt-4 grid gap-3">
          {p.specs.map((s) => (
            <div key={s.label} className="flex justify-between gap-4">
              <dt className="text-zinc-600">{s.label}</dt>
              <dd className="font-medium">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a className="rounded-xl bg-accent px-5 py-3 font-semibold text-white" href="/contact">{t("ctaQuote")}</a>
        <a className="rounded-xl border px-5 py-3 font-semibold" href="/contact">{t("ctaConditions")}</a>
        <PdfDownloadButton pdf={p.pdf} />
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t("faq")}</h2>
        <div className="mt-6 grid gap-4">
          {p.faq.map((f) => (
            <div key={f.q} className="rounded-2xl border p-6">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-zinc-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
