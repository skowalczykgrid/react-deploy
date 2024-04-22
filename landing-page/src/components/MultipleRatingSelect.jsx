import { useContext, useEffect, useState } from "react";
import { Rating, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { AppContext } from "../App";

function MultipleRatingSelect({ ratings }) {
  const { setUserFilters } = useContext(AppContext);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingChange = (ratingValue) => {
    setSelectedRatings((prev) => {
      if (prev.includes(ratingValue)) {
        return prev.filter((r) => r !== ratingValue);
      } else {
        return [...prev, ratingValue];
      }
    });
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
              checked={selectedRatings.includes(ratingValue)}
              onChange={handleRatingChange}
              value={ratingValue}
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
