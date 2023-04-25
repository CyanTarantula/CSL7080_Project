import landingImage from "../Assets/HomePage/landing_section_image.png";

import "./Home.css";

function LandingSection() {
    return (
        <div className="landing-section">
            <div className="landing-section-heading">
                Say Goodbye to Password Amnesia!
            </div>
            <div className="landing-section-content">
                <div className="landing-section-content-left"></div>
                <div className="landing-section-content-right">
                    <img src={landingImage} alt="Landing logo" />
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="Home">
            <LandingSection />
        </div>
    );
}