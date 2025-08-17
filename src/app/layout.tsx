"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Crimson_Text, Crimson_Pro } from "next/font/google";
import { ModalProvider, useModal } from "@/components/Modal/content";
import Modal from "@/components/Modal/modal";
import ModalContent from "@/components/Modal/ModalContent";
import Image from "next/image";
import { usePathname } from "next/navigation";   

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-crimson-text",
  display: "swap"
});
const crimsonPro  = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-crimson-pro",
  display: "swap"
});

function GlobalModal() {
  const { content, isOpen, close } = useModal();
  if (!isOpen || !content) return null;

  return (
    <Modal open={isOpen} onClose={close}>
      <ModalContent onClose={close} size="xl">
        {content.type === "image" ? (
          <Image
            src={content.src}
            alt={content.alt ?? ""}
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <>
            <video
              src={content.src}
              controls
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {"title" in content && content.title && (
              <div style={{ marginTop: 8, textAlign: "center", color: "#fff" }}>
                {content.title}
              </div>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

// Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideChrome =
    pathname?.startsWith("/media/gallery") || false;

  return (
    <html lang="en" className={`${crimsonText.variable} ${crimsonPro.variable}`}>
      <body className={hideChrome ? "is-gallery" : undefined}>
        <ModalProvider>
          {!hideChrome && <Navbar />}   
          {children}
          {!hideChrome && <Footer />}
          <GlobalModal />
        </ModalProvider>
      </body>
    </html>
  );
}
