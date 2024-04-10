import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Dropdown({ children, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setisOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOpen(e) {
    setisOpen(!isOpen);
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setisOpen(false);
    setAnchorEl(null);
  }

  function handleItemClick(value) {
    setValue(value);
    handleClose();
  }

  return (
    <>
      <Button
        variant="text"
        endIcon={<ExpandMoreIcon />}
        sx={{ color: "white", textTransform: "capitalize" }}
        onClick={handleOpen}
      >
        {value}
      </Button>

      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onClick: () => handleItemClick(child.props.children),
          }),
        )}
      </Menu>
    </>
  );
}

export default Dropdown;
