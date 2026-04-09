import React from 'react';
import '../css/Skills.css';
// Wir importieren FontAwesome, um schöne Icons nutzen zu können
import '@fortawesome/fontawesome-free/css/all.min.css';

const skillCategories = [
    {
        title: "IT- & Prozess-Tools",
        skills: ["Microsoft Office 365", "SAP ERP / SAP GUI", "tangro (Rechnungsprüfung)", "Power BI"],
        icon: "fas fa-tools",
    },
    {
        title: "Betriebssysteme & Security",
        skills: ["Windows 10 / 11", "Linux (Ubuntu, Kali Linux)"],
        icon: "fas fa-shield-alt",
    },
    {
        title: "Datenbanken",
        skills: ["SQL, MySQL, PgAdmin", "SAP PowerDesigner"],
        icon: "fas fa-database",
    },
    {
        title: "Programmierung",
        skills: ["React, Next.js", "HTML, CSS, PHP", "C#, C, C++", "JavaScript", "Java", "Python"],
        icon: "fas fa-code",
    },
    {
        title: "Sprachen",
        skills: ["Deutsch – Muttersprache", "Englisch – Gute Kenntnisse (fließend)"],
        icon: "fas fa-language",
    },
    {
        title: "Soft Skills",
        skills: ["Analytisches Denkvermögen", "Gute Kommunikationsfähigkeiten", "Selbstständige Arbeitsweise", "Hohe Genauigkeit & Sorgfalt"],
        icon: "fas fa-users",
    }
];

export default function Skills() {
    return (
        <div className="skills-main-container" id="skills">
            <h3>Fähigkeiten & Kenntnisse</h3>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon-wrapper">
                            <i className={category.icon}></i>
                        </div>
                        <h4>{category.title}</h4>
                        <ul className="skill-items">
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>
                                    <i className="fas fa-check-circle check-icon"></i>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
