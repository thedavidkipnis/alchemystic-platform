import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/favicon.png";
import "../styling/Navbar.css";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const hoveredTabItem = useRef(false);
  const dropdownRef = useRef(null);

  const handleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !hoveredTabItem.current &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null); console.log(hoveredTabItem.current);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const tabs = [
    { label: "About Us", link: "/tbd" },
    {
      label: "For Clients",
      dropdown: [
        { label: "Why choose Alchemystic?", link: "/clients-splash-page" },
        { label: "What's the deal with ketamine?", link: "/clients-splash-page" },
        { label: "How does ketamine work?", link: "/clients-splash-page" },
        { label: "Safety Considerations", link: "/clients-splash-page" },
        { label: "Common ketamine myths", link: "/clients-splash-page" },
        { label: "Why is emotional support essential?", link: "/clients-splash-page" },
        { label: "Emotional support explained", link: "/clients-splash-page" },
        { label: "Loved ones and ketamine", link: "/clients-splash-page" }
      ],
    },
    {
      label: "For Providers",
      dropdown: [
        { label: "TBD", link: "/tbd" },
      ],
    },
    { 
      label: "For Practitioners", 
      dropdown: [
        { label: "TBD", link: "/tbd" },
      ]
    },
    { 
      label: "For Families", 
      dropdown: [
        { label: "TBD", link: "/tbd" },
      ]
    },
    { label: "Donate", link: "/tbd" },
    { label: "Contact Us", 
        dropdown: [
        { label: "Email us", link: "/tbd" },
        { label: "Book an appointment", link: "/tbd" }
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
                        onMouseEnter={() => hoveredTabItem.current = true}
                        onMouseLeave={() => hoveredTabItem.current = false}
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