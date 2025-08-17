import HeroHome from "@/components/Hero/HeroHome";
import SectionFeatures from "@/components/Home/SectionFeatures";



export default function HomePage() {
  return (
    <main>
      <HeroHome
        bg="/background/hero.png"
        logo="/media/logo.png"
        trailerUrl="https://www.youtube.com/embed/XXXXXXXX?autoplay=1"
      />
      <SectionFeatures />
    </main>
  );
}
