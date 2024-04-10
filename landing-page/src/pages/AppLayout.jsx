import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default AppLayout;
