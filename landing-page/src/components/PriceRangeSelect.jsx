import { FormGroup, FormControlLabel, Checkbox, Slider } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../App";

function PriceRangeSelect() {
  const { setUserFilters } = useContext(AppContext);

  // const priceRanges = [
  //   { label: "$0 - $150", value: [0, 150] },
  //   { label: "$150 - $350", value: [150, 350] },
  //   { label: "$350 - $500", value: [350, 500] },
  //   { label: "$500 - $650", value: [500, 650] },
  //   { label: "$650 - $6500", value: [650, 6500] },
  // ];

  const [selectedRanges, setSelectedRanges] = useState([0, 6500]);

  console.log(selectedRanges);

  // const handleChange = (event, newValue) => {
  //   const value = event.target.value;

  //   console.log(selectedRanges);

  //   setSelectedRanges((currentRanges) =>
  //     currentRanges.includes(value)
  //       ? currentRanges.filter((range) => range !== value)
  //       : [...currentRanges, value],
  //   );
  // };

  const handleChange = (event, newValue) => {
    setSelectedRanges(newValue);
  };

  return (
    // <FormGroup>
    //   {priceRanges.map((range) => (
    //     <FormControlLabel
    //       key={range.value}
    //       control={
    //         <Checkbox
    //           checked={selectedRanges.includes(range.value)}
    //           onChange={handleChange}
    //           value={range.value}
    //         />
    //       }
    //       label={range.label}
    //     />
    //   ))}
    // </FormGroup>

    <Slider
      getAriaLabel={() => "Price range"}
      value={selectedRanges}
      onChange={handleChange}
      valueLabelDisplay="auto"
      min={0}
      max={6500}
    />
  );
}

export default PriceRangeSelect;
