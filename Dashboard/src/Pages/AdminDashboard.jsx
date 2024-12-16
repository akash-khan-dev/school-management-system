import Breadcrumb from "../Components/BreadCrumb/BreadCrumb";
import Admin from "../Components/Dashboard/Admin/Admin";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <Breadcrumb title={"Admin Dashboard"} />
        <Admin />
      </div>
    </>
  );
};

export default AdminDashboard;
