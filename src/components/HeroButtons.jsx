import Button from "./ui/Button";

function HeroButtons() {
  return (
    <div className="buttons">
      <Button href="#projects">Explore Projects</Button>

      <Button
        href="/Nicolas-Sebastian-Origlia-CV.pdf"
        variant="outline"
        download
      >
        Download CV
      </Button>
    </div>
  );
}

export default HeroButtons;