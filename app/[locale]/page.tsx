import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { products } from "@/data/products";
import SeoJsonLd from "@/components/SeoJsonLd";

export default async function Home({ params }: { params: { locale: "en" | "fr" | "de" } }) {
  const tHero = await getTranslations({ locale: params.locale, namespace: "hero" });
  const tSections = await getTranslations({ locale: params.locale, namespace: "sections" });

  return (
    <main>
      <SeoJsonLd type="organization" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,58,102,.78),rgba(11,58,102,.78))]"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {tHero("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">{tHero("subtitle")}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="rounded-xl bg-accent px-5 py-3 font-semibold text-white" href="/contact">
              {tHero("ctaPrimary")}
            </Link>
            <Link className="rounded-xl border border-white/30 bg-white/5 px-5 py-3 font-semibold text-white" href="/products">
              {tHero("ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">{tSections("productsTitle")}</h2>
        <p className="mt-2 max-w-3xl text-zinc-600">{tSections("productsIntro")}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-2xl border bg-white p-5 hover:shadow-sm">
              <div className="text-xs font-semibold text-brand-700">{p.category}</div>
              <div className="mt-1 text-lg font-semibold">{p.name}</div>
              <div className="mt-2 text-sm text-zinc-600">{p.short}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
