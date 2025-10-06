import Navbar from "../components/Navbar";
import "../styling/ForClientsSplash.css";
import "../styling/SplashPage.css"

export default function ForClientsSplash() {

    return (
        
        <div className="splash-container">
            <Navbar isLogInButtonVisible={true}/>
            <div className="splash-scrollable-container">

                <div className="splash-page-section">
                    Why choose alchemystic?
                </div>
                
                <div className="splash-page-section">
                    What's the deal with ketamine?
                </div>

                <div className="splash-page-section">
                    How does ketamine work?
                </div>

                <div className="splash-page-section">
                    Safety considerations (What are the potential risks?)
                </div>

                <div className="splash-page-section">
                    Common myths about ketamine
                </div>
                
                <div className="splash-page-section">
                    Why is emotional support essential?
                </div>

                <div className="splash-page-section">
                    Emotional support explained
                </div>

                <div className="splash-page-section">
                    Loved ones and ketamine
                </div>

            </div>
        </div>
    )
}