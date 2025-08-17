"use client";
import Image from "next/image";

export default function SectionFeatures() {
  return (
    <section className="home2">
      
      <div className="home2__bg" aria-hidden>
        <Image
          src="/background/About.bg2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 35%" }}
        />
      </div>

      <div className="container home2__inner">
     
        <div className="home2__top">
          <p className="home2__pitch">
            THE PAST ISN’T DEAD — IT THIRST FOR REVENGE.<br />
            SLAY MONSTERS. KILL THE KING’S MEN.<br />
            UNCOVER FORBIDDEN POWER. BECOME A LEGEND.
          </p>
          <p className="home2__download">DOWNLOAD NOW ON</p>
          <a
            className="home2__itch"
            href="https://futuregames.itch.io/blood-maiden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/itchio.png" alt="itch.io" width={150} height={50} />
          </a>
        </div>

        <div className="home2__grid">
          {/* LEFT */}
          <div className="home2__panel">
            <div className="home2__pelican" aria-hidden="true">
              <Image src="/icons/flash.png" alt="" width={220} height={140} />
            </div>

            <h3 className="home2__heading">GAME FEATURES</h3>
            <ul className="home2__list">
              <li><strong>Blood Bending Mechanic</strong>Morph blood into deadly weapon forms—blades, whips, projectiles, and more.</li>
              <li><strong>High-Difficulty Combat Platforming</strong>Designed for fast reflexes and precise movement—every mistake is lethal.</li>
              <li><strong>Speedrun-Oriented Levels</strong>Time-limited stages that demand quick thinking.</li>
              <li><strong>Rogue-Like Progression</strong>Die, learn, return stronger. Revenge requires resilience.</li>
              <li><strong>Powerful Protagonist</strong>Fast, fierce female with blood magic—unlock unstoppable abilities.</li>
              <li><strong>Stylized Checkpoints</strong>Save at fountains—brief relief in a relentless journey.</li>
              <li><strong>Modular Environment Props</strong>Streetlamps, gravestones, and interactive elements shape a gothic world.</li>
            </ul>
          </div>

          {/* CENTER SEAL */}
          <div className="home2__sealWrapper" aria-hidden="true">
            <Image
              className="home2__sealCenter"
              src="/icons/stamp.png"
              alt=""
              width={128}
              height={128}
              priority
            />
          </div>

          {/* RIGHT */}
          <div className="home2__panel">

            {/* pelican above WHAT IS */}
            <div className="home2__pelican home2__pelican--mirror" aria-hidden="true">
              <Image src="/icons/flash.png" alt="" width={220} height={140} />
            </div>

            <h3 className="home2__heading">WHAT IS<br />BLOOD MAIDEN?</h3>
            <ul className="home2__bullets">
              <li>Bloodbending, revenge, combat.</li>
              <li>Slay monsters, master time-based levels.</li>
            </ul>

            {/* pelican above CONTROL SETTINGS */}
            <div className="home2__pelican home2__pelican--mirror" aria-hidden="true">
              <Image src="/icons/flash.png" alt="" width={220} height={140} />
            </div>

            <h4 className="home2__sub">CONTROL SETTINGS</h4>
            <div className="home2__controls home2__controlsRow">
              <div>
                <p className="home2__label">Keyboard:</p>
                <ul>
                  <li><strong>Movement:</strong> A/D</li>
                  <li><strong>Jump:</strong> Spacebar</li>
                  <li><strong>Dagger:</strong> Left Mouse</li>
                  <li><strong>Blood Gun:</strong> Right Mouse</li>
                  <li><strong>Dash:</strong> Shift</li>
                  <li><strong>Hook:</strong> E</li>
                  <li><strong>Switch:</strong> Q</li>
                </ul>
              </div>
              <div>
                <p className="home2__label">Controller:</p>
                <ul>
                  <li><strong>Movement:</strong> Thumb Stick</li>
                  <li><strong>Jump:</strong> (A / ✕)</li>
                  <li><strong>Dagger:</strong> (B / ○)</li>
                  <li><strong>Blood Gun:</strong> LT</li>
                  <li><strong>Dash:</strong> (RB / R1)</li>
                  <li><strong>Switch:</strong> (△ / Y)</li>
                  <li><strong>Hook:</strong> RB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
