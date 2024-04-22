import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SortControl({ sort, handleSortChange }) {
  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        id="sort"
        value={sort}
        label="Sort By"
        onChange={handleSortChange}
        sx={
          {
            // Apply custom styles here to match the provided UI image
          }
        }
      >
        <MenuItem value="price-desc">Price: High - Low</MenuItem>
        <MenuItem value="price-asc">Price: Low - High</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortControl;
