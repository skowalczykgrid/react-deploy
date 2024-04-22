// import { FormGroup, FormControlLabel, Checkbox, Slider } from "@mui/material";
// import { useContext, useState } from "react";
// import { AppContext } from "../App";

// function PriceRangeSelect() {
//   const { setUserFilters } = useContext(AppContext);

//   const [selectedRanges, setSelectedRanges] = useState([0, 6500]);

//   console.log(selectedRanges);

//   // const handleChange = (event, newValue) => {
//   //   const value = event.target.value;

//   //   console.log(selectedRanges);

//   //   setSelectedRanges((currentRanges) =>
//   //     currentRanges.includes(value)
//   //       ? currentRanges.filter((range) => range !== value)
//   //       : [...currentRanges, value],
//   //   );
//   // };

//   const handleChange = (event, newValue) => {
//     setSelectedRanges(newValue);
//   };

//   return (
//     // <FormGroup>
//     //   {priceRanges.map((range) => (
//     //     <FormControlLabel
//     //       key={range.value}
//     //       control={
//     //         <Checkbox
//     //           checked={selectedRanges.includes(range.value)}
//     //           onChange={handleChange}
//     //           value={range.value}
//     //         />
//     //       }
//     //       label={range.label}
//     //     />
//     //   ))}
//     // </FormGroup>

//     <Slider
//       getAriaLabel={() => "Price range"}
//       value={selectedRanges}
//       onChange={handleChange}
//       valueLabelDisplay="auto"
//       min={0}
//       max={6500}
//     />
//   );
// }

// export default PriceRangeSelect;

import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { AppContext } from "../App";

const PriceRangeInput = () => {
  const { setUserFilters } = useContext(AppContext);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6500);

  const handleMinChange = (event) => {
    if (event.target.value < 0) {
      return;
    }
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event) => {
    if (event.target.value < 0) {
      return;
    }

    setMaxValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(minValue, maxValue);
    if (+minValue > +maxValue) {
      alert("Minimum value cannot be greater than maximum value");
      return;
    }

    setUserFilters((oldFilters) => {
      return {
        ...oldFilters,
        price: [minValue, maxValue],
      };
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Input
        type="number"
        value={minValue}
        onChange={handleMinChange}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        placeholder="Min"
        className="w-max rounded-md border p-2"
      />
      <Input
        type="number"
        value={maxValue}
        onChange={handleMaxChange}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        placeholder="Max"
        className="w-max rounded-md border p-2"
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        className="bg-gray-200 hover:bg-gray-300"
      >
        Go
      </Button>
    </div>
  );
};

export default PriceRangeInput;
