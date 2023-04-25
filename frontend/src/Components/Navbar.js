import logo from "../Assets/Navbar/logo.png"

import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Titanium Vault 3.0 Logo" />
            </div>
            <div className="nav-title">
                Titanium Vault 3.0
            </div>
            <div className="nav-links">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>
        </nav>
    );
}
