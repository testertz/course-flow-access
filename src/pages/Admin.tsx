
import { Navigate } from "react-router-dom";

const Admin = () => {
  // Redirect to the new admin dashboard
  return <Navigate to="/admin" replace />;
};

export default Admin;
