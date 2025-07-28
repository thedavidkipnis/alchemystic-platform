import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function DashboardPractitioner() {

  const { currentUser, role, logout } = useAuth(); 
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
  if(role != 'practitioner') {
    return (<div>Invalid Route: wrong user type</div>);
  }

  return (
    <div>
      <h1>Welcome, Practitioner!</h1>
      <p>This is your dashboard.</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default DashboardPractitioner;