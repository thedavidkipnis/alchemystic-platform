import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/favicon.png";
import { useAuth } from "../context/AuthContext";
import "../styling/DashboardNavbar.css";

export default function DashboardNavbar() {

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

    return (
        <div className="dashboard-navbar-wrapper">
            <div className="dashboard-navbar-left">
                <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <img src={logo} alt="Logo" className="logo"/>
                </div>
            </div>
            <div className="dashboard-navbar-right">
                <button className="dashboard-navbar-logout-button" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    )
}