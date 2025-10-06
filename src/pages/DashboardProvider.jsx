import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styling/ProviderDashboard.css";

function DashboardProvider() {

  const { currentUser, role, userName, userLastName, logout } = useAuth(); 
  const navigate = useNavigate();
  const handleLogout = async() => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  }

  if(!currentUser) {
    return (<div>Invalid Route: no user logged in</div>);
  }
  if(role != 'provider') {
    return (<div>Invalid Route: wrong user type</div>);
  }

  return (
    <div className="provider-dashboard-wrapper">
      <DashboardNavbar />
      <div className="provider-dashboard">
        <h1>Welcome, {userName}!</h1>
      </div>
    </div>
  );
}

export default DashboardProvider;