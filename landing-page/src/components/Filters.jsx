import { useContext } from "react";
import { AppContext } from "../App";
import Filter from "./Filter";
import ButtonBlackBorder from "./ButtonBlackBorder";
import { initialFilterState } from "../App";

function Filters() {
  const { filters, setUserFilters } = useContext(AppContext);

  const filtersArray = Object.entries(filters).map(([key, value]) => [
    key,
    value,
  ]);

  return (
    <div className=" flex h-min w-[300px] max-w-[300px] flex-col gap-6 pb-10">
      {filtersArray.map(([key, value]) => {
        return <Filter key={key} filter={{ key, value }} />;
      })}

      <ButtonBlackBorder onClick={() => setUserFilters(initialFilterState)}>
        Clear all filters
      </ButtonBlackBorder>
    </div>
  );
}

export default Filters;
