export default function BeforeLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      Before Login Layout
      {children}
    </main>
  );
}
