import {useState} from "react";
import Navbar from "../components/Navbar";
import "../styling/SplashPage.css"

export default function SplashPage() {

  const [expanded, setExpanded] = useState({});

    const toggleRow = (col, row) => {
      const key = `${col}-${row}`;
      setExpanded((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }; 
    
  const columnsData = [
    {
      title: "Clients",
      rows: [
        {
          header: "Healing can feel lonely, shallow, or overwhelming",
          content: "We provide personalized care pathways that adapt and evolve over the course of the healing journey",
        },
        {
          header: "Left without guidance after a dosing session",
          content: "Step-by-step integration tools, personalized guidance, and a real human support system — so breakthroughs don’t fade, they become real change",
        },
        {
          header: "No consistent support system",
          content: "The Healing Triangle that connects provider, practitioner, and client — and offers education for loved ones, so the entire support system is prepared",
        },
      ],
    },
    {
      title: "Providers",
      rows: [
        {
          header: "Client drop off and outcomes are unclear",
          content: "Sync Engine provides measurable progress without expanding internal staffing resources",
        },
        {
          header: "Inconsistent retention and low client referrals",
          content: "Structured post-care engagement in order to lead to higher retention, stronger word-of-mouth, and measurable outcomes that boost your credibility",
        },
        {
          header: "Fragmented care",
          content: "Our system integrates into your existing workflow — delivering post-session integration, outcome tracking, and client collaboration",
        },
      ],
    },
    {
      title: "Practitioners",
      rows: [
        {
          header: "Limited credibility and visibility",
          content: "We plug you into a care system that backs your practice with structured plans, training, collaboration hubs, and marketing strategy support for your practice",
        },
        {
          header: "Disconnected from clinical care and flying solo",
          content: "An Integration Engine to offer trauma-informed tools. Cognitive-to-Somatic map and trusted collaboration",
        },
        {
          header: "Burnout from holding it all alone",
          content: "A structured integration framework built around human support, so you’re not constantly reinventing the wheel or feeling drained",
        },
      ],
    },
  ];


  return (
    <div className="splash-container">

      <Navbar isLogInButtonVisible={true}/>

      <div className="splash-scrollable-container">
        <div className="splash-page-section splash-banner-section">
          <div className="banner-image-overlay">
            <div className="splash-text" >
              <p id="splash-page-welcome-banner-header-text">
                Discover an innovative approach to healing with ketamine that is
                transformative, responsible, <br /> and deeply human.
              </p>
            </div>
          </div>
        </div>

        <div className="splash-page-section">
          <div className="full-screen-grid-wrapper">
            <div className="full-screen-grid">
              <div className="grid-item image">
                <img src="triangle.jpeg" alt="triangle" />
              </div>
              <div className="grid-item text">
                <h1>Our collaborative approach unlocks the full potential of healing with ketamine.</h1>
                <p>While others focus on medication logistics, we are building a full-spectrum system that supports the entire healing arc — from preparation to journey work to integration — with measurable outcomes and human connection at the center.</p>
              </div>
              <div className="grid-item text">
                <h1>We offer holistic support across the entire healing process.</h1>
                <p>Our platform is designed to maximize healing across all steps of the process — from preparation and journeywork to integration.</p>
              </div>
              <div className="grid-item image">
                <img src="face-paint.jpeg" alt="face-paint" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="splash-page-section our-vision">
          <div className="splash-text">
            
            <h1>OUR VISION</h1>
            <br />
            <br />
            <p>
              We envision a world where healing is not a moment in time but a guided process <br />
              where ketamine-assisted treatments are provided in a holistic way to improve outcomes <br />
              for clients and those who serve them.
            </p>
          </div>
        </div>

        <div className="splash-page-section bridging-the-gap-in-care">
          <div className="section-header">
            <h1>
              How we are bridging the gap in care</h1>
          </div>
          <div className="section-content">
            <div className="three-column-grid">
              {columnsData.map((col, colIndex) => (
                <div className="column" key={col.title}>
                  <h2 className="column-title">{col.title}</h2>

                  {col.rows.map((row, rowIndex) => {
                    const key = `${colIndex}-${rowIndex}`;
                    const isOpen = expanded[key] || false;

                    return (
                      <div
                        key={key}
                        className={`collapsible-row ${isOpen ? "open" : ""}`}
                      >
                        <div
                          className="row-header"
                          onClick={() => toggleRow(colIndex, rowIndex)}
                        >
                          {row.header}
                        </div>
                        {isOpen && <div className="row-content">{row.content}</div>}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="splash-page-section">
          <div className="team-section-wrapper">

            <h1 className="team-section-title">Meet The Team</h1>

            <div className="team-section">
              <button
                className="team-scroll-btn left-btn"
                onClick={() => {
                  document.getElementById("team-scroll").scrollBy({ left: -1000, behavior: "smooth" });
                }}
              >
                ◀
              </button>

              <button
                className="team-scroll-btn right-btn"
                onClick={() => {
                  document.getElementById("team-scroll").scrollBy({ left: 1000, behavior: "smooth" });
                }}
              >
                ▶
              </button>

              {/* Scrollable Container */}
              <div id="team-scroll" className="team-scroll-container">
                {[
                  { name: "Christina Cundiff", title: "Chief Executive Officer", role: "Facilitator and Certified Preparation, Integration, Wellness, and Nutrition Coach", img: "christina.jpeg" },
                  { name: "Adriana Giraldo BSW, MHRLR", title: "Chief Operating & Program Officer", role: "Somatic Coach and Integration Mentor | Trauma-Informed | Mind-Body Nutrition Practitioner", img: "adriana.jpeg" },
                  { name: "Jnaet Livingstone MA, ACC", title: "Chief Learning Officer", role: "IFS-Informed Integration Coach, Facilitator", img: "janet.jpeg" },
                  { name: "Patricia Johnson", title: "Director of Research & Development", role: "Certified Preparation & Integration Coach, Om Kara Kriya Lineage Holder (Tantra)", img: "pj.jpeg" },
                  { name: "Jimmy Shaffer", title: "Director of Education & Training", role: "", img: "jimmy.jpeg" },
                ].map((member, idx) => (
                  <div key={idx} className="team-card">
                    <img src={member.img} alt={member.name} className="team-photo" />
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.title}</p>
                    <p className="team-role">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="splash-page-footer">
            <div className="splash-page-footer-half">
                <a href="/">Terms & Conditions</a>
                <a href="/">Medical Disclaimers</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Contact Us</a>
                <a href="/">Tech Support</a>
            </div>
            
            <div className="splash-page-footer-half">
              <a className="splash-page-footer-link-icon" 
              href="https://www.facebook.com/profile.php?id=61575491257389"
              target="_blank"
              rel="noopener noreferrer">
                <img
                  src="facebook.png"
                />
              </a>
              <a className="splash-page-footer-link-icon" 
              href="https://www.linkedin.com/feed/update/urn:li:activity:7358844338610601986/"
              target="_blank"
              rel="noopener noreferrer">
                <img
                  src="linkedin.png"
                />
              </a>
            </div>
        </div>
      </div>  
    </div>
  );
}
  