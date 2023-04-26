import landingImage from "../Assets/HomePage/landing_section_image.png";
import leftArrow from "../Assets/HomePage/arrow_left.png";
import rightArrow from "../Assets/HomePage/arrow_right.png";

import "./Home.css";

function LandingSection() {
    return (
        <div className="landing-section">
            <div className="landing-section-heading">
                Say Goodbye to Password Amnesia!
            </div>
            <div className="landing-section-content">
                <div className="landing-section-content-left">
                    <div className="landing-section-content-left-box">
                        <div className="landing-section-content-left-box-text">
                            a One-Stop Solution for all your Personal Information...
                        </div>
                        <div className="landing-section-content-left-box-arrow">
                            <img src={leftArrow} alt="Left arrow" />
                        </div>
                    </div>
                    <div className="landing-section-content-left-box">
                        <div className="landing-section-content-left-box-arrow">
                            <img src={rightArrow} alt="Right arrow" />
                        </div>
                        <div className="landing-section-content-left-box-text">
                        ...Now have all your passwords, card details etc. in one place, where one one but you can access them
                        </div>
                    </div>
                </div>
                <div className="landing-section-content-right">
                    <img src={landingImage} alt="Landing logo" />
                </div>
            </div>
        </div>
    );
}

function HorizontalRule() {
    return (
        <div className="horizontal-rule">
            <hr />
        </div>
    );
}

export default function Home() {
    return (
        <div className="Home">
            <LandingSection />
            <HorizontalRule />
        </div>
    );
}