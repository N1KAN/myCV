import React from "react";
import "../css/Button.css";

export default function Button() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-button">
            <button>
                &copy; {currentYear} Nikan Seyed Marandy. All Rights Reserved.
            </button>
        </div>
    );
}
