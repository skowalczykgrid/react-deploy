import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./Searchbar";

function HeaderMain() {
  return (
    <div className="flex items-center gap-[80px] px-[304px] py-5">
      <Logo />
      <Navigation className="mr-auto" />
      <SearchBar placeholder="Search" />
    </div>
  );
}

export default HeaderMain;
