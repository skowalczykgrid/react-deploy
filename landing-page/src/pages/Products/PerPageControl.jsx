import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function PerPageControl({ rowsPerPage, handleChangeRowsPerPage }) {
  return (
    <FormControl variant="outlined" size="small" sx={{ width: "96px" }}>
      <InputLabel id="rows-per-page-label">Per Page</InputLabel>
      <Select
        labelId="rows-per-page-label"
        id="rows-per-page"
        value={rowsPerPage}
        label="Per Page"
        onChange={handleChangeRowsPerPage}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <MenuItem key={pageSize} value={pageSize}>
            {pageSize}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PerPageControl;
