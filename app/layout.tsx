import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LoginModal from "./components/modals/LoginModal";
import ClientOnly from "./components/ClientOnly";
import ToastProvider from "./providers/ToastProvider";
import getCurrentUser from "./actions/getCurrentUser";
import RegisterModal from "./components/modals/RegisterModal";
import ViewingModal from "./components/modals/ViewingModal";
import SearchModal from "./components/modals/SearchModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOMR",
  description: "A Real Estate Web Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToastProvider />
          <Navbar currentUser={currentUser} />
          <LoginModal />
          <RegisterModal />
          <ViewingModal />
          <SearchModal />
        </ClientOnly>
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
