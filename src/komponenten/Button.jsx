import React, { useState, useEffect } from "react";
import "../css/Button.css";

export default function Button() {
    const [isFooterVisible, setFooterVisible] = useState(false); // State für Footer Sichtbarkeit
    const currentYear = new Date().getFullYear();

    // Funktion, die prüft, ob der Benutzer am Ende der Seite angekommen ist
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight; // Aktuelle Scroll-Position
        const documentHeight = document.documentElement.scrollHeight; // Höhe der gesamten Seite

        if (scrollPosition >= documentHeight) {
            setFooterVisible(true); // Footer sichtbar, wenn am Ende
        } else {
            setFooterVisible(false); // Ansonsten Footer ausblenden
        }
    };

    // useEffect Hook, um das Scroll-Event zu überwachen
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`footer-button ${isFooterVisible ? 'visible' : ''}`}>
            <button>
                &copy; {currentYear} Nikan Seyed Marandy. All Rights Reserved.
            </button>
        </div>
    );
}
