import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../styling/RegisterPage.css";
import Navbar from "../components/Navbar";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("A");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    console.log("REGISTER ATTEMPT");
    // e.preventDefault();
    // const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // await setDoc(doc(db, "users", user.uid), {
    //   email,
    //   role,
    // });
    // navigate("/dashboard");
  };

  return (
    <div className="registerPageContainer">
      <Navbar isLogInButtonVisible={true}/>
      <div className="registerPageFormContainer">
        <form onSubmit={handleRegister} className="registerForm">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <div className="roleRadioGroup">
            <label>
              <input
                type="radio"
                value="Client"
                checked={role === "Client"}
                onChange={(e) => setRole(e.target.value)}
              />
              Client
            </label>
            <label>
              <input
                type="radio"
                value="Practitioner"
                checked={role === "Practitioner"}
                onChange={(e) => setRole(e.target.value)}
              />
              Practitioner
            </label>
            <label>
              <input
                type="radio"
                value="Provider"
                checked={role === "Provider"}
                onChange={(e) => setRole(e.target.value)}
              />
              Provider
            </label>
          </div>
          <button type="submit" className="registerButton">Register</button>
        </form>
      </div>
    </div>
  );
}