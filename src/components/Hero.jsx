import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

function Hero() {
  return (
    <main>
      <section className="hero">
        <HeroContent />
        <HeroTerminal />
      </section>
    </main>
  );
}

export default Hero;