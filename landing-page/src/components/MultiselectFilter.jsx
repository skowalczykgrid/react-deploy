import { FormControlLabel, Checkbox } from "@mui/material";

function MultiselectFilter({
  selectedValues,
  handleCheckboxChange,

  value,
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={selectedValues.includes(value)}
          onChange={handleCheckboxChange}
          name={value}
        />
      }
      label={value}
    />
  );
}

export default MultiselectFilter;
