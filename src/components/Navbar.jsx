import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/favicon.png";
import "../styling/Navbar.css";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const tabs = [
    { label: "About Us", link: "/about" },
    {
      label: "Protocols & Resources",
      dropdown: [
        { label: "Why Trauma?", link: "/protocols" },
        { label: "Emotional Reset", link: "/resources" },
        { label: "Depression, PTSD, CPTSD, Anxiety", link: "/resources" },
        { label: "Overwhelm, Hopelessness", link: "/resources" },
        { label: "Community Call", link: "/resources" }
      ],
    },
    {
      label: "Education/Training",
      dropdown: [
        { label: "What's Ketamine?", link: "/courses" },
        { label: "PLACEHOLDER", link: "/courses" },
        { label: "PLACEHOLDER", link: "/courses" },
        { label: "PLACEHOLDER", link: "/courses" },
        { label: "External Resources", link: "/workshops" }
      ],
    },
    { 
        label: "Collaborators", 
        dropdown: [
        { label: "What's Ketamine?", link: "/courses" },
        { label: "PLACEHOLDER", link: "/courses" },
        { label: "PLACEHOLDER", link: "/courses" },
        { label: "PLACEHOLDER", link: "/courses" },
        { label: "External Resources", link: "/workshops" }
      ]
    },
    { label: "Donate", link: "/donate" },
    { label: "Contact Us", 
        dropdown: [
        { label: "Email us", link: "/protocols" },
        { label: "Book an appointment", link: "/resources" }
      ]
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <img src={logo} alt="Logo" className="logo"/>
        </div>
        {tabs.map((tab) =>
            tab.dropdown ? (
                <div className="dropdown" key={tab.label} ref={dropdownRef}>
                <button
                    className="nav-button"
                    onClick={() => handleDropdown(tab.label)}
                >
                    {tab.label}
                </button>
                {openDropdown === tab.label && (
                    <div className="dropdown-content">
                    {tab.dropdown.map((item) => (
                        <div
                        key={item.label}
                        className="dropdown-item"
                        onClick={() => {
                            setOpenDropdown(null);
                            navigate(item.link);
                        }}
                        >
                        {item.label}
                        </div>
                    ))}
                    </div>
                )}
                </div>
            ) : (
                <button
                key={tab.label}
                className="nav-button"
                onClick={() => navigate(tab.link)}
                >
                {tab.label}
                </button>
            )
            )}
      </div>
      <div className="nav-right">
        <button hidden={!props.isLogInButtonVisible}
          className="login-button"
          onClick={() => navigate("/app/login")}
        >
          Log In
        </button>
      </div>
    </nav>
  );
}