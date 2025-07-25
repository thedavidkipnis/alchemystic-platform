import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/alch-logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="LogInPageWrapper">
      <img src={logo} alt="Logo" className="logoImage"/>
      <form onSubmit={handleLogin} className="loginForm">
        <input
          type="email"
          className="loginStyledInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input 
          type="password" 
          className="loginStyledInput" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required />
        <button type="submit" className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default Login;