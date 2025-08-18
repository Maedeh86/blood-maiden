import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="g7-footer">
      <div className="g7-footer__top">
        <div className="g7-footer__features">
          <ul>
            <li>3D Roguelike | Speedrunner</li>
            <li>Combat Platformer</li>
            <li>Bloodbending Combat</li>
            <li>Gothic Aesthetic</li>
            <li>High-Difficulty Gameplay</li>
            <li>Female Protagonist</li>
          </ul>
        </div>

        <div className="g7-footer__ratings">
          <Image src="/icons/pegi.png" alt="PEGI 18" width={50} height={50} />
          <Image src="/icons/Fear.png" alt="Fear" width={50} height={50} />
          <Image src="/icons/badL.png" alt="Bad Language" width={50} height={50} />
          <Image src="/icons/violence.png" alt="Violence" width={50} height={50} />
          <Image src="/icons/pc.png" alt="Available on PC" width={50} height={50} />
        </div>
      </div>
      <div className="g7-footer__bottom">
        <div className="g7-footer__brand">
          <Image src="/icons/itchio.v.png" alt="itch.io" width={60} height={60} />
        </div>

        <div className="g7-footer__center">
          <span>© 2025 Group 7 Studios. All Rights Reserved.</span>
          <a href="/privacy">Privacy Policy</a>
          <span className="g7-footer__divider">|</span>
          <a href="/terms">Terms Of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
