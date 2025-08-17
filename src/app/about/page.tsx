
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <Image
            src="/background/About.bg.png"
            alt=""
            fill
            priority
            className="about-hero__bgImg"
            sizes="100vw"
          />
        </div>
        <div className="about-hero__content">
          <p className="about-hero__title">
            Betrayed By Blood, She Rises.<br />
            A Daughter Reborn To End The King Who Sacrificed Her.<br />
            His Empire Was Built On Fear — Now, It Will Fall To Vengeance.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__text">
              <h2 className="about-h2">Blood Maiden</h2>
              <p>
                They buried her in silence, hoping the grave would forget. But the blood remembered.
              </p>
              <p>
                They say she rose from a grave that never should’ve been found. Pale as ash. Eyes like
                dying stars. A maiden carved from sorrow and vengeance—driven by blood that is not her own.
                She walks the shadows of a broken London, where monstrous things roam the fog—
                abominations born of alchemy and bone, magic and madness.
              </p>
              <p>
                Soldiers and beasts each one more grotesque than the last. She does not eat. She does not
                sleep. By night, she moves with terrifying grace—absorbing the blood of what she slays.
              </p>
              <p>
                By day, the blood within her turns against her, a ticking curse she must outwit. The sun is
                her executioner.
              </p>
              <p>
                She does not hunt to live. She hunts to end it. Not just the beasts. Not just the curse.
                She’s searching for the one who created them all. The king. Her father.
              </p>
            </div>
            <div className="about-portrait">
              <Image
                src="/characters/Dead.Henrietta.png"
                alt="Henrietta"
                fill
                className="about-portrait__img"
                sizes="(max-width: 980px) 60vw, 360px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOUSE plaque */}
      <div className="about-plaque" aria-hidden="true">
        <span className="about-plaque__text">HOUSE</span>
      </div>

      <section className="about-house">
        <div className="container">
          <div className="about-house__grid">
            {[
              {
                name: "Henrietta",
                img: "/characters/henrietta.png",
                desc:
                  "Murdered by her father in a ritual of treachery… She returns as a spectral force, hunting the tyrant who stole her life.",
              },
              {
                name: "Queen Elizabeth",
                img: "/characters/queen.E.png",
                desc:
                  "By 1735, Elizabeth extended her life through dark sciences to preserve her ruthless son, Prince Henry, from taking the throne.",
              },
              {
                name: "Prince Henry",
                img: "/characters/prince.Henry.png",
                desc:
                  "Twisted by ambition and rejection, Henry embraced occult alchemy. His reign forged an empire of sorrow and fear.",
              },
            ].map((p) => (
              <article className="about-card" key={p.name}>
                <div className="about-card__oval">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="about-card__img"
                    sizes="(max-width: 980px) 60vw, 300px"
                  />
                </div>
                <h3 className="about-card__name">{p.name}</h3>
                <p className="about-card__desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__skull" aria-hidden="true" />
        <a
          className="about-cta__btn"
          href="https://itch.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD GAME
          <Image
            src="/icons/itchio.v.png"
            alt="itch.io"
            width={18}
            height={18}
            className="about-cta__icon"
            priority
          />
        </a>
      </section>
    </main>
  );
}
