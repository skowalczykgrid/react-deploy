import { Autocomplete, TextField } from "@mui/material";
import PriceRangeSelect from "./PriceRangeSelect";
import DiscountSelect from "./DiscountSelect";
import MultipleRatingSelect from "./MultipleRatingSelect";
import { AppContext } from "../App";
import { useContext } from "react";

function Filter({ filter }) {
  const { setUserFilters } = useContext(AppContext);

  const { key, value: filterContent } = filter;
  const { type, label, values } = filterContent;

  const renderFilter = () => {
    switch (label) {
      case "Brand":
        return (
          <Autocomplete
            multiple
            options={values}
            renderInput={(params) => <TextField {...params} label={label} />}
            sx={{ maxWidth: "100%", width: "100%" }}
            onChange={(event, newValue) => {
              setUserFilters((oldFilters) => ({
                ...oldFilters,
                brand: newValue,
              }));
            }}
          />
        );
      case "Category":
        return (
          <Autocomplete
            multiple
            options={values}
            renderInput={(params) => <TextField {...params} label={label} />}
            sx={{ maxWidth: "100%", width: "100%" }}
            onChange={(event, newValue) => {
              console.log(newValue);
              setUserFilters((oldFilters) => ({
                ...oldFilters,
                category: newValue,
              }));
            }}
          />
        );
      case "Price":
        return <PriceRangeSelect />;
      case "Discount Percentage":
        return <DiscountSelect discountOptions={values} />;
      case "Rating":
        return <MultipleRatingSelect ratings={values} />;
      case "Colors":
        return (
          <Autocomplete
            multiple
            options={values}
            renderOption={(props, option) => (
              <li {...props} key={`${option}-${props.id}`}>
                {option}
              </li>
            )}
            renderInput={(params) => <TextField {...params} label={label} />}
            sx={{ maxWidth: "100%", width: "100%" }}
          />
        );

      default:
        return <div>Unsupported filter type</div>;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h4 className=" w-max border-b-[1px] border-black pb-2 text-[20px] font-bold capitalize text-textPrimary">
        {label}
      </h4>

      {renderFilter()}
    </div>
  );
}

export default Filter;
