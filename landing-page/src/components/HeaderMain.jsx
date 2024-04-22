import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./Searchbar";
import SearchBarFunctional from "./SearchBarFunctional";

function HeaderMain() {
  return (
    <div className="flex h-[72px] items-center gap-[80px] px-[304px] py-5">
      <Logo />
      <Navigation className="mr-auto" />
      {/* <SearchBar placeholder="Search" /> */}
      <SearchBarFunctional />
    </div>
  );
}

export default HeaderMain;
