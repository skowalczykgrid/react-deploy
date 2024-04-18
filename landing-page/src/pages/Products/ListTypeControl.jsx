import IconButton from "@mui/material/IconButton";

import WindowIcon from "@mui/icons-material/Window";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";

import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";

function ListTypeControl({ handleViewChange, listType }) {
  return (
    <div className="flex items-center ">
      <span className="mr-3">View</span>
      <IconButton onClick={() => handleViewChange("grid")}>
        {listType === "grid" ? (
          <WindowIcon sx={{ color: "#FB2E86" }} />
        ) : (
          <WindowOutlinedIcon />
        )}
      </IconButton>
      <IconButton onClick={() => handleViewChange("list")}>
        {listType === "list" ? (
          <ViewAgendaIcon sx={{ color: "#FB2E86" }} />
        ) : (
          <ViewAgendaOutlinedIcon />
        )}
      </IconButton>
    </div>
  );
}

export default ListTypeControl;
