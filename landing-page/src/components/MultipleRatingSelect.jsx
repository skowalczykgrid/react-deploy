import { useContext, useEffect, useState } from "react";
import { Rating, Checkbox, FormGroup } from "@mui/material";
import { AppContext } from "../App";

function MultipleRatingSelect({ ratings }) {
  const { setUserFilters } = useContext(AppContext);
  const [selectedRatings, setSelectedRatings] = useState([]);

  console.log(selectedRatings);

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
        <div className="flex items-center" key={ratingValue}>
          <Checkbox
            checked={selectedRatings.includes(ratingValue)}
            onChange={() => handleRatingChange(ratingValue)}
            inputProps={{ "aria-label": `rating ${ratingValue}` }}
          />
          <Rating name={`rating-${ratingValue}`} value={ratingValue} readOnly />
        </div>
      ))}
    </FormGroup>
  );
}

export default MultipleRatingSelect;
