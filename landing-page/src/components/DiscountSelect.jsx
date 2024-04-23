import { useContext, useEffect, useState } from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { AppContext } from "../App";

function DiscountSelect({ discountOptions }) {
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const { userFilters, setUserFilters } = useContext(AppContext);

  useEffect(() => {
    setUserFilters((oldFilters) => ({
      ...oldFilters,
      discountPercentage: selectedDiscounts,
    }));
  }, [setUserFilters, selectedDiscounts]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const numberValue = +value;

    setSelectedDiscounts((currentDiscounts) =>
      currentDiscounts.includes(numberValue)
        ? currentDiscounts.filter((discount) => discount !== numberValue)
        : [...currentDiscounts, numberValue],
    );
  };

  return (
    <FormGroup>
      {discountOptions.map((discount) => (
        <FormControlLabel
          key={discount}
          control={
            <Checkbox
              checked={userFilters.discountPercentage?.includes(discount)}
              onChange={handleCheckboxChange}
              value={discount}
              sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "#FB2E86",
                },
              }}
            />
          }
          label={`${discount}%`}
        />
      ))}
    </FormGroup>
  );
}

export default DiscountSelect;
