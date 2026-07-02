import HeroBadges from "./HeroBadges";
import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className="hero-content">
      <div className="availability">
        <span></span>
        AVAILABLE FOR WORK
      </div>

    <h1 className="hero-name">
      Nicolás Sebastián <span>Origlia</span>
    </h1>

     <div className="hero-roles">
       <h2>Engineer</h2>

     <div className="hero-mission">
       <p>Building ideas</p>
       <p>Creating solutions</p>
      </div>
    </div>

      <div className="hero-lines">
        <p>Building scalable software.</p>
        <p>Turning data into decisions.</p>
        <p>Creating technology with purpose.</p>
      </div>

      <HeroBadges />
      <HeroButtons />
    </div>
  );
}

export default HeroContent;