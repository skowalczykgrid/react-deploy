import { Link } from "react-router-dom";
import logoImg from "../assets/Logo.svg";

function Logo({ className }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <Link to="/" onClick={scrollToTop}>
      <img src={logoImg} alt="logo" className={className} />
    </Link>
  );
}

export default Logo;
