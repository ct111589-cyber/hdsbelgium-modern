// app/[locale]/layout.tsx
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Params is a Promise in Next 15
}) {
  const { locale } = await params; // You MUST await this

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
