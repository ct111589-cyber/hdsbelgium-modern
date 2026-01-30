import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server"; // Added setRequestLocale
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Change: params is now a Promise
}) {
  // 1. Await the params to get the locale
  const { locale } = await params;

  // 2. Enable static rendering for this locale (Highly recommended for Next 15)
  setRequestLocale(locale);

  // 3. Get messages for the provider
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-zinc-900">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
