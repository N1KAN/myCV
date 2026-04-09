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
        <div className="button-body-container" id="lebenslauf">
            <h3 onClick={toggleEducationVisibility} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Bildungsweg
                <i className={isEducationVisible ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
            </h3>
            {isEducationVisible && ( // Sichtbarkeit basierend auf dem State
                <div className="education-timeline">
                    <div className="education-item">
                        <span className="date" style={{ fontSize: '1.2em' }}>seit 10/2023 – im fünften Semester</span>
                        <span>Informatikstudium (Bachelor of Science), Darmstadt, 64283</span>
                    </div>
                    <div className="education-item">
                        <span className="date" style={{ fontSize: '1.2em' }}>07/2023</span>
                        <span>Abitur an der Eichendorffschule, Kelkheim am Taunus, 65779</span>
                        <span className="note">Notendurchschnitt: 2,7</span>
                    </div>
                </div>
            )}

            <hr className="separator" /> {/* Trennung zwischen den Abschnitten */}

            <h3 onClick={toggleExperienceVisibility} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Berufserfahrung
                <i className={isExperienceVisible ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
            </h3>
            {isExperienceVisible && ( // Sichtbarkeit basierend auf dem State
                <div className="experience-list">
                    <div className="experience-item">
                        <span className="project-title">Helaba (Finanzbuchhaltung) — Projektunterstützung S4/Hana</span>
                        <span className="date" style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '5px' }}>09.02.2026 – 31.07.2026 als Werkstudent</span>
                        <div className="project-description" style={{ marginTop: '10px' }}>
                            <ul>
                                <li>Stammdatenpflege und -bereinigung von Kreditoren- und Debitorenstammsätzen im SAP ERP (SAP Logon / SAP GUI)</li>
                                <li>Überprüfung und korrekte Zuordnung von zusammengehörigen Debitoren- und Kreditorenkonten zur Sicherstellung einer hohen Datenqualität.</li>
                                <li>Gezielte Detailprüfung und tiefere Recherche von Stammdaten direkt im SAP-System bei unklaren Fällen.</li>
                                <li>Abgleich und Kontrolle von Rechnungen auf formale und inhaltliche Korrektheit mithilfe der Software tangro.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-item">
                        <span className="project-title">Helaba (Konzern-Risikocontrolling) — Dokumentationsmanagement</span>
                        <span className="date" style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '5px' }}>18.08.2025 – 31.12.2025 als Werkstudent</span>
                        <div className="project-description" style={{ marginTop: '10px' }}>
                            <ul>
                                <li>Unterstützung bei IT-Dokumentationen und Qualitätssicherung technischer Unterlagen</li>
                                <li>Mitarbeit an der Optimierung eines Dokumentenmanagementssystems (DMS)</li>
                                <li>Zuweisung von Zugriffsberechtigungen im Dokumentenmanagementsystem</li>
                                <li>Routinierter Umgang mit Microsoft Office 365 (Word, Excel, Outlook)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-item">
                        <span className="project-title">Nintendo of Europe SE — Gametester</span>
                        <span className="date" style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '5px' }}>08.01.2025 – 08.07.2025 als Werkstudent</span>
                        <div className="project-description" style={{ marginTop: '10px' }}>
                            <ul>
                                <li>Systematisches Testen von neuentwickelten Games auf Fehler und Logiklücken</li>
                                <li>Präzise Dokumentation und Nachverfolgung von identifizierten Fehlern und Problemen</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-item">
                        <span className="project-title">PROFI Engineering Systems AG — Schulpraktikum</span>
                        <span className="date" style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '5px' }}>11.07.2022 – 22.07.2022 als Schüler</span>
                        <div className="project-description" style={{ marginTop: '10px' }}>
                            <ul>
                                <li>Einblicke in IT-Infrastruktur, Netzwerkarchitektur und Rechenzentren</li>
                                <li>Grundlagen der Softwareentwicklung mit Java und Eclipse</li>
                                <li>Unterstützung bei der Installation von IBM Hardware (Storage Systeme)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
