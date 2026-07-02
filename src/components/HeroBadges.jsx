import { FaDatabase, FaCode, FaServer, FaPuzzlePiece } from "react-icons/fa";

function HeroBadges() {
  return (
    <div className="hero-badges">
      <span><FaDatabase /> Data Engineer</span>
      <span><FaCode /> Full Stack Developer</span>
      <span><FaServer /> Backend Development</span>
      <span><FaPuzzlePiece /> Problem Solver</span>
    </div>
  );
}

export default HeroBadges;