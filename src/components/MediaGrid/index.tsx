"use client";

import Image from "next/image";
import s from "./styles.module.css";

export type MediaItem = {
  src: string;
  title: string;
  ratio?: `${number}/${number}`; 
};

type Props = {
  items: ReadonlyArray<MediaItem>;
  columns?: 1 | 2 | 3 | 4;
  defaultRatio?: `${number}/${number}`;
};

export default function MediaGrid({
  items,
  columns = 3,
  defaultRatio = "20/14",
}: Props) {
  if (items.length === 0) return null;

  const colClass =
    columns === 1 ? s.c1 :
    columns === 2 ? s.c2 :
    columns === 3 ? s.c3 : s.c4;

  return (
    <ul className={`${s.grid} ${colClass}`}>
      {items.map((it) => (
        <li key={it.src} className={s.card}>
          <div
            className={s.frame}
            style={{ aspectRatio: it.ratio ?? defaultRatio }}
          >
            <Image
            src={it.src}
            alt={it.title}
            fill
            className={s.img}
           sizes="(max-width: 700px) 100vw,
           (max-width: 1024px) 80vw,1120px"
           />
          </div>
          <p className={s.caption}>{it.title}</p>
        </li>
      ))}
    </ul>
  );
}
