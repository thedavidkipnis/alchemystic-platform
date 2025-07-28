import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/alch-logo.png";
import "../styling/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const tabs = [
    { label: "About Us", link: "/about" },
    {
      label: "Protocols & Resources",
      dropdown: [
        { label: "Protocols", link: "/protocols" },
        { label: "Resources", link: "/resources" },
      ],
    },
    {
      label: "Education/Training",
      dropdown: [
        { label: "Courses", link: "/courses" },
        { label: "Workshops", link: "/workshops" },
      ],
    },
    { label: "Collaborators", link: "/collaborators" },
    { label: "Donate", link: "/donate" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        {tabs.map((tab) =>
          tab.dropdown ? (
            <div
              className="dropdown"
              key={tab.label}
              onMouseLeave={() => setOpenDropdown(null)}
            >
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
        <button
          className="login-button"
          onClick={() => navigate("/app/login")}
        >
          Log In
        </button>
      </div>
    </nav>
  );
}