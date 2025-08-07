import Navbar from "../components/Navbar";
import "../styling/SplashPage.css"
import triangle_image from "/triangle.jpeg"
import face_paint_image from "/face-paint.jpeg"

export default function SplashPage() {
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
          <div className="splash-page-section full-screen-grid">
            <div className="grid-item image">
              <img src={triangle_image} alt="triangle" />
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
              <img src={face_paint_image} alt="face-paint" />
            </div>
          </div>
        </div>

        <div className="splash-page-section">
          <div className="splash-text">
            <p>
              [SECTION 2]<br />
              How we are bridging the gap in care
            </p>
          </div>
        </div>

        <div className="splash-page-section">
          <div className="splash-text">
            <p>
              [SECTION 3]<br />
              OUR VISION<br />
              We envision a world where healing is not a moment in time but a guided process <br />
              where ketamine-assisted treatments are provided in a holistic way to improve outcomes <br />
              for clients and those who serve them.
            </p>
          </div>
        </div>

        <div className="splash-page-section">
          <div className="splash-text">
            <p>
              [SECTION 4]<br />
              Meet Our Team
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
}
  