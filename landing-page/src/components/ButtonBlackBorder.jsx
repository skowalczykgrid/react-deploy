import Button from "@mui/material/Button";

function ButtonBlackBorder({ children, onClick }) {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#FB2E86",
        textTransform: "capitalize",
        fontSize: "16px",
        fontWeight: "500",
        width: "max-content",
        padding: "16px 40px",
        borderRadius: "8px",
        border: "2px solid #FB2E86",
        height: "52px",

        "&:hover": {
          color: "black",

          border: "2px solid #FB2E86",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonBlackBorder;
