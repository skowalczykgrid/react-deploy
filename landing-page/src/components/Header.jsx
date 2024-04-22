import HeaderMain from "./HeaderMain";
import HeaderUpperBar from "./HeaderUpperBar";

function Header() {
  return (
    <header className="flex flex-col ">
      <HeaderUpperBar />
      <HeaderMain />
    </header>
  );
}

export default Header;
