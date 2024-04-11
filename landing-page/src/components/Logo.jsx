import logoImg from "../assets/Logo.svg";

function Logo({ className }) {
  //   return <span className="text-textPrimary text-[35px] font-bold">Hekto</span>;
  return <img src={logoImg} alt="logo" className={className} />;
}

export default Logo;
