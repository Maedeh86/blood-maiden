"use client";
import Image from "next/image";

type Props = {
  bg?: string;
  logo?: string;
  tagline?: string;
  trailerUrl?: string;
};

export default function HeroHome({
  bg = "/background/hero.png",
  logo = "/media/logo.png",
  tagline = "Cursed by daylight. Fed by blood. Bound for revenge. Uncover her truth.",
  trailerUrl = "https://www.youtube.com/embed/XXXXXXXX?autoplay=1",
}: Props) {
  return (
    <section className="hero hero--simple">
      
      <div className="hero__bg-img" aria-hidden>
        <Image
          src={bg}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 39%" }}
        />
      </div>

    
      <div className="hero__overlay" aria-hidden />

      <div className="container hero__leftcol">
        <Image
          src={logo}
          alt="Blood Maiden"
          width={360}
          height={220}
          priority
          className="hero__logo"
        />
        <p className="hero__tagline">{tagline}</p>

        <div className="hero__actions">
          <a
            href={trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta cta--ornate"
            aria-label="Watch the trailer"
          >
            <span>WATCH THE TRAILER</span>
          </a>
        </div>
      </div>
    </section>
  );
}
