import Logo from "../../../components/Logo";
import Navigation from "./Navigation";
import SearchBar from "../../../components/Searchbar";

function HeaderMain() {
  return (
    <div className="flex h-[72px] items-center gap-[80px] px-[304px] py-5">
      <Logo />
      <Navigation className="mr-auto" />
      <SearchBar placeholder="Search" />
    </div>
  );
}

export default HeaderMain;
