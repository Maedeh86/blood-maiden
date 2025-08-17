"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";


const DOWNLOAD_URL = "https://futuregames.itch.io/blood-maiden";

type NavItem =
  | { href: string; label: string; external?: false }
  | { href: string; label: string; external: true; url: string };

const LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/creators", label: "Content Creators" },
  { href: "/download", label: "Download", external: true, url: DOWNLOAD_URL },
];

const LANGS = [
  { code: "en", label: "English" },
  { code: "sv", label: "Svenska" },
  { code: "fa", label: "فارسی" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [lang, setLang] = useState<string>(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("lang") || "en";
  });

  const langWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!langOpen) return;
      const target = e.target as HTMLElement | null;
      if (target && !langWrapRef.current?.contains(target)) setLangOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [langOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setLangOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`${s.nav} ${lang === "en" ? s["lang-en"] : ""}`}>
      <div className={s.inner}>
   
   
        <nav className={s.menuDesktop} aria-label="Primary">
          {LINKS.map((l) => {
            const isDownload = "external" in l && l.external;

            if (isDownload) {
              return (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.cta}`} 
                >
                  {l.label}
                </a>
              );
            }

            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={active ? s.active : undefined}
              >
                {l.label}
              </Link>
            );
          })}

          <div className={s.langWrap} ref={langWrapRef}>
            <button
              type="button"
              className={s.langBtn}
              aria-haspopup="menu"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
            >
              {LANGS.find((l) => l.code === lang)?.label ?? "English"}{" "}
              <span aria-hidden>▾</span>
            </button>

            {langOpen && (
              <ul role="menu" className={s.langMenu}>
                {LANGS.map((lg) => (
                  <li key={lg.code} role="none">
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setLang(lg.code);
                        setLangOpen(false);
                    
                      }}
                    >
                      {lg.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`${s.burger} ${open ? s.burgerOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <button
          className={s.backdrop}
          aria-label="Close"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`${s.drawer} ${open ? s.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button className={s.close} aria-label="Close menu" onClick={() => setOpen(false)}>
          <span /><span />
        </button>

        <div className={s.panel}>

          <Link href="/" onClick={() => setOpen(false)} className={s.logo}>
            <Image
              src="/icons/nav.Logo.png"
              alt="Blood Maiden"
              width={240}
              height={58}
              priority
              className={s.logoImg}
            />
          </Link>

          <nav className={s.menuMobile} aria-label="Mobile primary">
            {LINKS.map((l) => {
              if ("external" in l && l.external) {
                return (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={s.mCta}
                  >
                    <span>{l.label}</span>
                    <i aria-hidden="true" />
                  </a>
                );
              }

              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={active ? s.mActive : undefined}
                >
                  <span>{l.label}</span>
                  {active && <i aria-hidden="true" />}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </header>
  );
}
