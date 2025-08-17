"use client";
import * as React from "react";

type ModalContent =
  | { type: "video"; src: string; title?: string }
  | { type: "image"; src: string; alt?: string }
  | null;

type ModalContextType = {
  open: (content: ModalContent) => void;
  close: () => void;
  content: ModalContent;
  isOpen: boolean;
};

const ModalContext = React.createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = React.useState<ModalContent>(null);
  const isOpen = content !== null;

  const open = (c: ModalContent) => setContent(c);
  const close = () => setContent(null);

  return (
    <ModalContext.Provider value={{ open, close, content, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextType {
  const ctx = React.useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
