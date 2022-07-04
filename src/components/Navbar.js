import reactIcon from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={reactIcon} alt="react logo" className="nav--logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
