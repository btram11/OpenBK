export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full py-4 flex flex-col items-center gap-8 min-h-screen">
      {children}
    </div>
  );
}
