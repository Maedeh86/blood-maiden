import MediaGrid, { MediaItem } from "@/components/MediaGrid";

export const metadata = { title: "Gallery • Blood Maiden" };

// LEVEL 1 
const level1: MediaItem[] = [
  { src: "/media/Graveyard.png", title: "SANCTUARY HOLLOW", ratio: "1/1" },
  { src: "/Gallery/Graveyard-1.png", title: "BLACKVEIL CEMETERY", ratio: "5/3" },
  { src: "/Gallery/Coffin.png", title: "THE WAITING CASKET", ratio: "3/3" },
];

// LEVEL 2
const level2: MediaItem[] = [
  { src: "/Gallery/Dark-forest-7.png", title: "THE MOSSBOUND VEIN", ratio: "14/10" },
  { src: "/Gallery/Dark-forest-6.png", title: "MOONFEN HOLLOW", ratio: "2/3" },
  { src: "/Gallery/Dark-forest-5.png", title: "LANTERNBEACH GROVE", ratio: "2/3" },
];

// LEVEL 3
const level3: MediaItem[] = [
  { src: "/Gallery/Misty.city.png", title: "THE VEILED HOUR SQUARE", ratio: "16/9" },
  { src: "/Gallery/Castle.png", title: "CROWNREACH WHARF", ratio: "3/4" },
  { src: "/Gallery/Gothic.png", title: "FOGSPIRE ROAD", ratio: "16/9" },
];

// LEVEL 4 
const level4: MediaItem[] = [
  { src: "/Gallery/Golden-hall.png", title: "HALL OF THE BLOOD CROWN", ratio: "16/9" },
  { src: "/Gallery/Lost-Steps.png", title: "SANCTUM OF THE LOST STEPS", ratio: "3/4" },
  { src: "/Gallery/Hall.stairs.png", title: "SANCTUM OF ECHOES", ratio: "16/9" },
];

// ENVIRONMENTAL ASSETS 
const assets: MediaItem[] = [
  { src: "/Gallery/Save.point.png", title: "THE LUMINOUS WELL • SAFE POINT", ratio: "8/5" },
  { src: "/Gallery/Tombstone.png", title: "OBSIDIAN CROSS", ratio: "5/6" },
  { src: "/Gallery/Lamppost.png", title: "LAMP OF THE VEIL", ratio: "5/6" },
];

//  MONSTERS CODEX 
const monsters: MediaItem[] = [
  { src: "/characters/yami.chan.png", title: "YAMI-CHAN", ratio: "3/4" },
  { src: "/characters/krvnak.png", title: "KRVNAK", ratio: "3/4" },
  { src: "/characters/joker.png", title: "THE JOKER", ratio: "3/4" },
  { src: "/characters/thorned.png", title: "THORNED BLASPHEMER", ratio: "3/4" },
  { src: "/characters/warden.png", title: "THE BLACK WARDEN", ratio: "3/4" },
  { src: "/characters/wendigo.png", title: "WENDIGO", ratio: "3/4" },
  { src: "/characters/golem.png", title: "GOLEM", ratio: "3/4" },
  { src: "/characters/lycan.png", title: "LYCAN", ratio: "3/4" },
];

export default function GalleryPage() {
  return (
    <main className="gallery">
      <div className="container">
        <div className="g-plaque" aria-hidden="true"></div>

        <h2 className="g-sec">LEVEL ENVIRONMENTS</h2>

        <h3 className="g-sub">LEVEL 1. CEMETERY OF SHADOWS</h3>
        <MediaGrid items={level1} columns={3} />
        <div className="g-divider" />

        <h3 className="g-sub">LEVEL 2. NIGHTROOT WOODS</h3>
        <MediaGrid items={level2} columns={3} />
        <div className="g-divider" />

        <h3 className="g-sub">LEVEL 3. UMBRAFALL — LONDON</h3>
        <MediaGrid items={level3} columns={3} />
        <div className="g-divider" />

        <h3 className="g-sub">LEVEL 4. THE GREAT HALLS</h3>
        <MediaGrid items={level4} columns={3} />
        <div className="g-divider" />

        <h2 className="g-sec">ENVIRONMENTAL ASSETS</h2>
        <MediaGrid items={assets} columns={3} />
        <div className="g-divider" />

        <h2 className="g-sec">MONSTERS CODEX</h2>
        <MediaGrid items={monsters} columns={4} />
      </div>
    </main>
  );
}
