import { FormControlLabel, Radio } from "@mui/material";

function SingleselectFilter({ value, selectedValue, handleRadioChange }) {
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          checked={selectedValue === value}
          onChange={handleRadioChange}
          name={value}
        />
      }
      label={value}
    />
  );
}

export default SingleselectFilter;
