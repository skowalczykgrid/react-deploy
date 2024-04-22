import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AppContext } from "../App";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";

const SearchBarFunctional = () => {
  const { products } = useContext(AppContext);

  const navigate = useNavigate();

  const options = products.map((product) => ({
    label: product.name,
    id: product.id,
  }));

  const handleSelect = (event, value) => {
    if (value) {
      const selectedProduct = products.find(
        (product) => product.id === value.id,
      );
      navigate(`/products/${value.id}`, {
        state: { product: selectedProduct },
      });
    }
  };

  return (
    <div className="relative">
      <Autocomplete
        className="flex w-[324px] border-[#E5E0FC] bg-white"
        size="small"
        freeSolo
        disableClearable
        options={options}
        getOptionLabel={(option) => option.label}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search products"
            InputProps={{ ...params.InputProps, type: "search" }}
            className="w-full"
          />
        )}
        sx={{
          ".MuiFormControl-root": {
            height: "40px",
          },
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          right: "2px",
          top: "2px",
          backgroundColor: "#FB2E86",
          color: "white",
          borderRadius: "4px",
          padding: "6px 14px",
          "&:hover": {
            color: "black",
          },
        }}
      >
        <SearchOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default SearchBarFunctional;
