import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./Searchbar";
import SearchBarFunctional from "./SearchBarFunctional";

function HeaderMain() {
  return (
    <div className="flex h-[72px] items-center justify-center px-[304px] py-5">
      <div className="flex  w-[1920px] items-center gap-[80px]">
        <Logo />
        <Navigation className="mr-auto" />
        <SearchBarFunctional />
      </div>
    </div>
  );
}

export default HeaderMain;
