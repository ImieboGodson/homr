import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import ClientOnly from "./components/ClientOnly";
import ToastProvider from "./providers/ToastProvider";
import getCurrentUser from "./actions/getCurrentUser";
import RegisterModal from "./components/modals/RegisterModal";
import DisclaimerModal from "./components/modals/DisclaimerModal";
import ViewingModal from "./components/modals/ViewingModal";

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
          <DisclaimerModal />
          <ViewingModal />
        </ClientOnly>
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
