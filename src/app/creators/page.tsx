import React from "react";
import { CATEGORIES, Category, Person } from "@/Data/creators";

const LiIcon: React.FC = () => (
  <svg className="li" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.98 3.5c0 1.38-1.12 2.5-2.48 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05C12.55 8.56 14.26 7.5 16.7 7.5 21.2 7.5 23 10.42 23 15.02V23h-4v-6.77c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.6 1.76-2.6 3.58V23h-4V8z"/>
  </svg>
);

function Group({ cat }: { cat: Category }) {
  return (
    <div className="col">
      <h3 className="group">{cat.title}</h3>
      <ul className="list">
        {cat.people.map((p: Person) => (
          <li key={cat.title + p.name} className="item">
            <div className="who">
              <span className="name">{p.name}</span>
              <span className="dash"> – </span>
              <span className="role">{p.role}</span>
            </div>
            {p.linkedin && (
              <div className="meta">
                <LiIcon />
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                  {p.name} | LinkedIn
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  const gd   = CATEGORIES.find(c => c.title === "GAME DESIGN & PRODUCTION")!;
  const art  = CATEGORIES.find(c => c.title === "ART & ANIMATION")!;
  const prog = CATEGORIES.find(c => c.title === "PROGRAMMING")!;

  return (
    <main className="creators">
   <h2 className="title">CONTENT CREATORS</h2>

      <div className="wrap">
        <div className="grid figma-layout">
          <div className="area a-gd"><Group cat={gd} /></div>
          <div className="area a-art"><Group cat={art} /></div>
          <div className="area a-prog"><Group cat={prog} /></div>
        </div>
      </div>
    </main>
  );
}
