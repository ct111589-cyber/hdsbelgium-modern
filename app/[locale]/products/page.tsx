import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { products } from "@/data/products";

export default async function ProductsPage({ params }: { params: { locale: "en" | "fr" | "de" } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "products" });
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{t("listingTitle")}</h1>
      <p className="mt-3 max-w-3xl text-zinc-600">{t("listingIntro")}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-2xl border bg-white p-5 hover:shadow-sm">
            <div className="text-xs font-semibold text-brand-700">{p.category}</div>
            <div className="mt-1 text-lg font-semibold">{p.name}</div>
            <div className="mt-2 text-sm text-zinc-600">{p.short}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
