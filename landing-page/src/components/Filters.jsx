import { useContext } from "react";
import { AppContext } from "../App";
import Filter from "./Filter";

function Filters() {
  const { filters } = useContext(AppContext);

  const filtersArray = Object.entries(filters).map(([key, value]) => [
    key,
    value,
  ]);

  return (
    <div className="flex w-[300px] max-w-[300px] flex-col gap-6">
      {filtersArray.map(([key, value]) => {
        return <Filter key={key} filter={{ key, value }} />;
      })}
    </div>
  );
}

export default Filters;
