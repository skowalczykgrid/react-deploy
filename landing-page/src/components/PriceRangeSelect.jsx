import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { AppContext } from "../App";

const PriceRangeInput = () => {
  const { userFilters, setUserFilters } = useContext(AppContext);

  const [minValue, setMinValue] = useState(userFilters.price[0]);
  const [maxValue, setMaxValue] = useState(userFilters.price[1]);

  const handleMinChange = (event) => {
    const newMin = event.target.value >= 0 ? event.target.value : 0;
    setMinValue(newMin);
  };

  const handleMaxChange = (event) => {
    const newMax =
      event.target.value >= 0 ? event.target.value : event.target.value;
    setMaxValue(newMax);
  };

  const handleSubmit = () => {
    if (+minValue > +maxValue) {
      alert("Minimum value cannot be greater than maximum value");
      return;
    }

    setUserFilters((oldFilters) => ({
      ...oldFilters,
      price: [minValue, maxValue],
    }));
  };

  useEffect(() => {
    setMinValue(userFilters.price[0]);
    setMaxValue(userFilters.price[1]);
  }, [userFilters.price]);

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
        sx={{
          backgroundColor: "#FB2E86",
          "&:hover": { backgroundColor: "#FB2E86" },
        }}
      >
        Go
      </Button>
    </div>
  );
};

export default PriceRangeInput;
