"use client";

type ModalContentProps = {
  children: React.ReactNode;
  onClose?: () => void;
  showClose?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
};

const sizeMap: Record<NonNullable<ModalContentProps["size"]>, string> = {
  sm: "min(92vw, 480px)",
  md: "min(92vw, 720px)",
  lg: "min(96vw, 980px)",
  xl: "min(96vw, 1200px)",
  full: "min(98vw, 1600px)",
};

export default function ModalContent({
  children,
  onClose,
  showClose = true,
  size = "lg",
  padding = false,
}: ModalContentProps) {
  return (
    <div
      style={{
        width: sizeMap[size],
        maxHeight: "90vh",
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "#000",
      }}
    >
      {showClose && (
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      )}
      <div style={{ padding: padding ? 16 : 0 }}>{children}</div>
    </div>
  );
}
