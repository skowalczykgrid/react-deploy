import Button from "@mui/material/Button";

function ButtonGreen({ children, style, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "absolute",
        backgroundColor: "#0CC562",
        color: "white",
        bottom: "5px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "101px",
        height: "36px",
        padding: "11px 16px",
        borderRadius: "6px",
        fontSize: "12px",
        lineHeight: "14px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#7E33E0",
        },
        ...style,
      }}
      variant="contained"
    >
      {children}
    </Button>
  );
}

export default ButtonGreen;
