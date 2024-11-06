import React, { useState } from "react"; // useState importieren
import '../css/Cv.css';

export default function Cv() {
    // State für die Sichtbarkeit der Bildungseinheiten
    const [isEducationVisible, setEducationVisible] = useState(false);
    const [isExperienceVisible, setExperienceVisible] = useState(false);

    // Funktion zum Umschalten der Sichtbarkeit der Bildungseinheiten
    const toggleEducationVisibility = () => {
        setEducationVisible(!isEducationVisible);
    };

    // Funktion zum Umschalten der Sichtbarkeit der praktischen Erfahrung
    const toggleExperienceVisibility = () => {
        setExperienceVisible(!isExperienceVisible);
    };

    return (
        <div className="button-body-container">
            <h3 onClick={toggleEducationVisibility} style={{ cursor: 'pointer' }}>Werdegang</h3>
            {isEducationVisible && ( // Sichtbarkeit basierend auf dem State
                <div className="education-timeline">
                    <div className="education-item">
                        <span className="date">Seit 10/2023</span>
                        <span>Informatikstudium (Bachelor und Master) an der Hochschule Darmstadt</span>
                    </div>
                    <div className="education-item">
                        <span className="date">07/2023</span>
                        <span>Abitur an der Eichendorffschule in Kelkheim (Taunus)</span>
                        <span className="note">Notendurchschnitt: 2,7</span>
                    </div>
                    <div className="education-item">
                        <span className="date">2014 bis 2020</span>
                        <span>Gymnasium an der Gesamtschule Fischbach (GSF) in Kelkheim (Taunus)</span>
                    </div>
                    <div className="education-item">
                        <span className="date">2010 bis 2014</span>
                        <span>Grundschule an der Pestalozzi-Schule in Kelkheim (Taunus)</span>
                    </div>
                </div>
            )}

            <hr className="separator" /> {/* Trennung zwischen den Abschnitten */}

            <h3 onClick={toggleExperienceVisibility} style={{ cursor: 'pointer' }}>Praktische Erfahrung</h3>
            {isExperienceVisible && ( // Sichtbarkeit basierend auf dem State
                <>
                    <span className="date">Praxisprojekte im Studium</span>
                    <div className="experience-list">
                        <div className="experience-item">
                            <span className="project-title">Schiffe versenken</span>
                            <div className="project-description">
                                <span>Programmierung eines simplen Strategiespiels in C++, das die Positionierung und Angriffe auf Schiffe simuliert.</span>
                                <a href="https://code.fbi.h-da.de/programming_practicals/PG1-WS23_24/PG1-WS23-24-Mi56x_Gruppe4-Kaya_Seyed-Marandy/-/tree/main/Praktikum05?ref_type=heads" target="_blank" rel="noopener noreferrer">Code ansehen auf GitLab</a>
                            </div>
                        </div>
                        <div className="experience-item">
                            <span className="project-title">Minesweeper</span>
                            <div className="project-description">
                            <span>Entwicklung eines Spielfeldes in der Konsole und Logik für das klassische Minenräumspiel mit C++.</span>
                            <a href="https://code.fbi.h-da.de/programming_practicals/PG1-WS23_24/PG1-WS23-24-Mi56x_Gruppe4-Kaya_Seyed-Marandy/-/tree/main/Praktikum04?ref_type=heads" target="_blank" rel="noopener noreferrer">Code ansehen auf GitLab</a>
                            </div>
                        </div>
                        <div className="experience-item">
                            <span className="project-title">Dungeon Crawler</span>
                            <div className="project-description">
                            <span>Erstellung eines kleinen Rollenspiels mit zufällig generierten Dungeons. Hierbei kamen Algorithmen und Datenstrukturen zur Anwendung, um Gegner, Schätze und Räume zu verwalten.</span>
                            <a href="https://code.fbi.h-da.de/pad-praktika1/2024-ss-roth-hecht-kohl/Do56xB-Seyed-Marandy_Younes/-/tree/main/Praktikum5?ref_type=heads" target="_blank" rel="noopener noreferrer">Code ansehen auf GitLab</a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
