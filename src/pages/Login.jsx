import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

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
    <div className="loginPageContainer">
      <Navbar isLogInButtonVisible={false}/>
      <div className="LogInPageWrapper">      
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

          <div className="registerPrompt">
            <span>Don’t have an account?</span>
            <button 
              type="button" 
              className="registerLinkButton"
              onClick={() => navigate("/app/register")}
            >
              Register
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;