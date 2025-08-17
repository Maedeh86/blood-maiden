export type Person = {
  name: string;
  role: string;
  linkedin?: string;
};

export type Category = {
  title: string;
  people: Person[];
};

export const CATEGORIES: Category[] = [
  {
    title: "GAME DESIGN & PRODUCTION",
    people: [
      {
        name: "Daniella Nahmias Scruggs",
        role: "Game Producer",
        linkedin: "https://linkedin.com/in/daniella-nahmias-scruggs"
      },
      {
        name: "Sheila Aliaga",
        role: "Project Manager • Web Manager",
        linkedin: "https://linkedin.com/in/sheila-aliaga"
      },
      {
        name: "Simon Stening",
        role: "Release Manager",
        linkedin: "https://linkedin.com/in/simon-stening"
      },
      {
        name: "Victor Chéronet",
        role: "Product Owner, Gameplay, Level Design",
        linkedin: "https://linkedin.com/in/victor-cheronet"
      },
      {
        name: "Tatiana Tretilova",
        role: "Narrative, Level Design",
        linkedin: "https://linkedin.com/in/tatiana-tretilova"
      },
      {
        name: "Jeremy Morales Vergara",
        role: "Gameplay, UX/UI",
        linkedin: "https://linkedin.com/in/jeremy-morales"
      },
      {
        name: "David Johansson",
        role: "Gameplay, QA, Sound",
        linkedin: "https://linkedin.com/in/david-johansson"
      }
    ]
  },
  {
    title: "ART & ANIMATION",
    people: [
      {
        name: "Andreas Johansson",
        role: "Artistic Director, Environment Artist",
        linkedin: "https://linkedin.com/in/andreas-johansson"
      },
      {
        name: "Linnea Norman",
        role: "Animation",
        linkedin: "https://linkedin.com/in/linnea-norman"
      },
      {
        name: "Johanna Fransson",
        role: "VFX Artist",
        linkedin: "https://linkedin.com/in/johanna-fransson"
      },
      {
        name: "Paloma Muñoz Inostroza",
        role: "Web Designer, UX/UI Designer",
        linkedin: "https://linkedin.com/in/paloma-munoz-inostroza"
      },
      {
        name: "Marcus Swensån",
        role: "Character Artist",
        linkedin: "https://linkedin.com/in/marcus-swensån"
      },
      {
        name: "Árpád Pinter",
        role: "Prop Artist",
        linkedin: "https://linkedin.com/in/arpad-pinter"
      }
    ]
  },
  {
    title: "PROGRAMMING",
    people: [
      {
        name: "Halldór Kristmundsson",
        role: "Game Programmer",
        linkedin: "https://linkedin.com/in/halldor-kristmundsson"
      },
      {
        name: "Tobias Kjernell",
        role: "Front-end Developer",
        linkedin: "https://linkedin.com/in/tobias-kjernell"
      },
      {
        name: "Simon Landin",
        role: "Game Programmer",
        linkedin: "https://linkedin.com/in/simon-landin"
      },
      {
        name: "Oskar Norberg",
        role: "Game Programmer",
        linkedin: "https://linkedin.com/in/oskar-norberg"
      },
      {
        name: "Elliot Coffell",
        role: "Game Programmer",
        linkedin: "https://linkedin.com/in/elliot-coffell"
      }
    ]
  }
];
