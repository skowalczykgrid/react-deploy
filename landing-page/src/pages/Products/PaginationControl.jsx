import { Pagination } from "@mui/material";

function PaginationControl({ numberOfPages, page, handleChangePage }) {
  return (
    <Pagination
      count={numberOfPages}
      page={page}
      onChange={handleChangePage}
      shape="rounded"
      size="medium"
      color="primary"
      showFirstButton
      showLastButton
      className="self-end"
      sx={{
        ".MuiPaginationItem-root": {
          color: "#101750 !important",
        },
        ".Mui-selected": {
          backgroundColor: "#FB2E86 !important",
          color: "white !important",
          "&:hover": {
            backgroundColor: "#FB2E86 !important",
          },
        },
      }}
    />
  );
}

export default PaginationControl;
