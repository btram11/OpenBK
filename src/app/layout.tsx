import "./globals.css";
import Providers from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ModalProvider } from "@/context/ModalContext";
import ModalManager from "@/components/modals/modalManager";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ModalProvider>
            <ModalManager />
            <Navbar />
            {children}
            <Footer />
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}
