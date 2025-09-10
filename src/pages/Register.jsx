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
  const [role, setRole] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  })

  const navigate = useNavigate();

  const handleRegister = async (e) => {

    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) newErrors.name = "required";
    if (!lastName.trim()) newErrors.lastName = "required";
    if (!email.trim()) newErrors.email = "required";
    if (!password.trim()) newErrors.password = "required";
    if (!role) newErrors.role = "Please select a role";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", user.uid), {
      email,
      role,
      name,
      lastName
    });
    navigate("/dashboard");
  };

  return (
    <div className="registerPageContainer">
      <Navbar isLogInButtonVisible={true}/>
      <div className="registerPageFormContainer">
        <form onSubmit={handleRegister} className="registerForm">
          <div className="inputWithError">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Name"
            />
            {errors.name && <span className="errorText">{errors.name}</span>}
          </div>
          <div className="inputWithError">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            {errors.lastName && <span className="errorText">{errors.lastName}</span>}
          </div>
          <div className="inputWithError">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {errors.email && <span className="errorText">{errors.email}</span>}
          </div>
          <div className="inputWithError">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {errors.password && <span className="errorText">{errors.password}</span>}
          </div>

          <label className="registerPageLabel">
            I am a:
          </label>

          <div className="roleRadioGroup">
            <label className={role === "client" ? "radioButton selected" : "radioButton"}>
              <input
                type="radio"
                value="client"
                checked={role === "client"}
                onChange={(e) => setRole(e.target.value)}
              />
              Client
            </label>
            <label className={role === "practitioner" ? "radioButton selected" : "radioButton"}>
              <input
                type="radio"
                value="practitioner"
                checked={role === "practitioner"}
                onChange={(e) => setRole(e.target.value)}
              />
              Practitioner
            </label>
            <label className={role === "provider" ? "radioButton selected" : "radioButton"}>
              <input
                type="radio"
                value="provider"
                checked={role === "provider"}
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