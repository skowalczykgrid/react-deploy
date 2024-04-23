import { useContext, useEffect, useState } from "react";
import { Rating, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { AppContext } from "../App";

function MultipleRatingSelect({ ratings }) {
  const { userFilters, setUserFilters } = useContext(AppContext);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const numberValue = +value;

    setSelectedRatings((currentRatings) =>
      currentRatings.includes(numberValue)
        ? currentRatings.filter((rating) => rating !== numberValue)
        : [...currentRatings, numberValue],
    );
  };

  useEffect(() => {
    setUserFilters((oldFilters) => ({
      ...oldFilters,
      rating: selectedRatings,
    }));
  }, [setUserFilters, selectedRatings]);

  return (
    <FormGroup>
      {ratings.map((ratingValue) => (
        <FormControlLabel
          key={ratingValue}
          control={
            <Checkbox
              checked={userFilters.rating?.includes(ratingValue)}
              onChange={handleCheckboxChange}
              value={ratingValue}
              sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "#FB2E86",
                },
              }}
            />
          }
          label={
            <Rating
              name={`rating-${ratingValue}`}
              value={ratingValue}
              readOnly
            />
          }
        />
      ))}
    </FormGroup>
  );
}

export default MultipleRatingSelect;
