import { useContext, useState } from "react";
import {
  Rating,
  FormControlLabel,
  Checkbox,
  Box,
  FormGroup,
  Typography,
} from "@mui/material";
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

    // setUserFilters((oldFilters) => ({
    //   ...oldFilters,
    //   ratings: ratingValue,
    // }));
  };

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
