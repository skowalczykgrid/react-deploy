import CircularProgress from "@mui/material/CircularProgress";

function LoadingPage() {
  return (
    <div className="absolute top-0 z-40 flex min-h-screen w-screen flex-1 items-center  justify-center bg-transparent px-[304px] pt-[150px] text-[72px] font-bold text-textPrimary backdrop-blur-lg">
      <CircularProgress size={100} />
    </div>
  );
}

export default LoadingPage;
