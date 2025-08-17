"use client";

import Image from "next/image";

type Item = { src: string; title: string };

type Props = {
  items: ReadonlyArray<Item>;
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
};

export default function MasonryGrid({
  items,
  columns = 3,
  gap = 20,
}: Props) {
  return (
    <div
      className="masonry"
      style={
        {
          "--cols": columns,
          "--gap": `${gap}px`,
        } as React.CSSProperties
      }
    >
      {items.map((it) => (
        <figure key={it.src} className="masonry__item">
          <div className="masonry__frame">
            <Image
              src={it.src}
              alt={it.title}
              width={500}
              height={500}
              className="masonry__img"
            />
          </div>
          <figcaption className="masonry__cap">{it.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
