import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { role } = useAuth();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser.currentUser);

  useEffect(() => {
    if (role === "client") navigate("/dashboard-client");
    else if (role === "practitioner") navigate("/dashboard-practitioner");
    else if (role === "provider") navigate("/dashboard-provider");
  }, [role]);

  return <p>Redirecting...</p>;
}