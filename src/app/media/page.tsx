import Image from "next/image";

export const metadata = { title: "Media • Blood Maiden" };

export default function Page() {
  return (
    <main className="media">
   
      <section className="media-header">
        <div className="media-header__bg">
          <Image
            src="/background/mediaBG.png"
            alt=""
            fill
            priority
            className="media-header__bg-img"
            sizes="100vw"
          />
        </div>

        <div className="container">
          <div className="media-header__frame">
            <Image
              src="/frames/bloodframe.svg"
              alt=""
              fill
              priority
              className="media-header__frameOverlay"
              sizes="(max-width: 980px) 92vw, 960px"
            />

            <div className="media-header__posterWrap">
              <Image
                src="/media/Catacombs.png"
                alt="Blood Maiden trailer poster"
                fill
                priority
                className="media-header__poster"
                sizes="(max-width: 980px) 92vw, 960px"
              />

              <button className="media-header__play" aria-label="Play trailer" type="button">
                <span>▶</span>
              </button>
              <a
                className="media-header__itch"
                href="https://itch.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on <span className="media-header__itch-badge">itch.io</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="media-body">
        <div className="container">
          <div className="media-intro">
            <h2 className="media-tagline">Time hunts you. Blood fuels you</h2>
            <p className="media-lede">
              Play as a resurrected maiden in a cursed world—dashing, slashing, and bleeding
              through haunted ruins to chase the immortal king.
              <br />
              You won’t win. Not yet.
              <br />
              But you’ll die trying.
            </p>
          </div>
          <div className="media-plaque" aria-hidden="true">
            <div className="media-plaque__panel" />
            <span className="media-plaque__text">MEDIA</span>
          </div>
          <Image src="/frames/goldframe.png" alt="" fill className="media-plaque__img" />

          <div className="media-levels">
            <article className="level-card">
              <div className="level-imgWrap">
                <Image src="/media/Graveyard.png" alt="Level 1" fill className="level-img" />
                <div className="level-overlay">
                  <div className="level-title">LEVEL 1.</div>
                  <a href="/media/gallery#level1" className="level-btn">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </article>

            <article className="level-card">
              <div className="level-imgWrap">
                <Image src="/media/Forest-1.png" alt="Level 2" fill className="level-img" />
                <div className="level-overlay">
                  <div className="level-title">LEVEL 2.</div>
                  <a href="/media/gallery#level2" className="level-btn">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </article>
          </div>
          <nav className="media-links">
            <a className="media-link" href="/media/gallery#assets">
              <span>ENVIRONMENTAL ASSETS</span>
              <span className="arrow">›</span>
            </a>
            <a className="media-link" href="/media/gallery#monsters">
              <span>MONSTERS CODEX</span>
              <span className="arrow">›</span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
}
