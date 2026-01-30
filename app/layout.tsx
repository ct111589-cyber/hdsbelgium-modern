// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // This layout just passes children down to the [locale] layout
  return children;
}
