"use client";


type Props = { url: string; ornate?: boolean; className?: string };

export default function WatchTrailer({ url, ornate = true, className = "" }: Props) {
  const { open } = useModal();
  return (
    <button
      type="button"
      onClick={() => open({ type: "video", src: url, title: "Blood Maiden Trailer" })}
      className={`cta ${ornate ? "cta--ornate" : "cta--simple"} ${className}`}
      aria-label="Watch the trailer"
    >
      WATCH THE TRAILER
    </button>
  );
}
function useModal(): { open: any; } {
  throw new Error("Function not implemented.");
}

