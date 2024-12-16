import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Topbar from "../Components/Topbar/Topbar";
export const RootLayout = () => {
  return (
    <>
      <div></div>
      <div className="d-flex">
        <div>{<Sidebar />}</div>
        <div style={{ width: "100%" }}>
          <Topbar />

          <div style={{ marginLeft: "320px" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
