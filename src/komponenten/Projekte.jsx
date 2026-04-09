import React from 'react';
import '../css/Projekte.css';

export default function Projekte() {
    const projekte = [
        {
            title: "Schiffe versenken",
            semester: "1. Semester",
            description: "Eine klassische, terminal-basierte Implementierung des Brettspiels 'Schiffe versenken'. Dieses Projekt demonstriert saubere objektorientierte Programmierung (OOP) und algorithmische Verarbeitung von Spielfeldern.",
            skills: ["C++ (C++11/14)", "QtCreator", "Objektorientierte Programmierung (OOP)"],
            link: "https://github.com/N1KAN/Battleship",
            icon: "fas fa-ship"
        },
        {
            title: "Minishell",
            semester: "2. Semester",
            description: "Ein leichtgewichtiger, POSIX-kompatibler Befehlszeilen-Interpreter, entwickelt für das Modul Betriebssysteme. Das Projekt demonstriert die grundlegenden Mechanismen des UNIX-Prozessmanagements (fork, execvp, waitpid) auf Systemebene.",
            skills: ["C++", "POSIX API", "Prozessmanagement", "Signal Handling", "Unix/Linux System-Calls"],
            link: "https://github.com/N1KAN/Minishell",
            icon: "fas fa-terminal"
        },
        {
            title: "Growthgaze",
            semester: "3. Semester",
            description: "Interaktives Finanz- und KPI-Dashboard, das Startup-Daten als zentrale Informationsquelle für Nutzer und Investoren visualisiert. Zu den Features zählen personalisierbare Layouts via Drag & Drop-Charts, Live-Suchvorschläge und ein interaktives Tutorial-System für eine optimale User Experience.",
            skills: ["React & Vite", "Tailwind CSS", "JSON"],
            link: "https://github.com/N1KAN/GrowthGaze",
            demoLink: "https://growth-gaze.vercel.app/",
            icon: "fas fa-chart-line"
        },
        {
            title: "Visual Computing",
            semester: "4. Semester",
            description: "Eine umfassende Implementierung theoretischer Konzepte der Computergrafik und Bildverarbeitung. Die Laborübungen an der Hochschule Darmstadt decken 2D-Bildverarbeitung (Digitale Filter), die moderne OpenGL Rendering-Pipeline, Geometrie-Transformationen durch Lineare Algebra, hierarchische 3D-Szenengraphen sowie interaktive Beleuchtungsmodelle (Blinn-Phong) und Shader-Programmierung ab.",
            skills: ["C++", "OpenGL 4.5", "Qt Framework", "GLSL Shaders", "3D-Rendering & Math"],
            link: "https://github.com/N1KAN/Visual-Computing-Lab",
            icon: "fas fa-cube"
        },
        {
            title: "Pizzaria Rose",
            semester: "4. Semester",
            description: "Ein webbasiertes Bestellsystem für einen Lieferdienst in einem modernen Design. Das System verbindet Kunden, Bäcker und Fahrer in Echtzeit über jeweils eigene Dashboards, sodass jeder stets den aktuellen Bestellstatus im Blick hat. Die Anwendung basiert auf PHP und ist dank Docker unkompliziert und schnell aufsetzbar.",
            skills: ["PHP", "HTML5 & CSS3", "MariaDB", "Docker"],
            link: "https://github.com/N1KAN/PizzariaRose",
            demoLink: "https://pizzariarose.infinityfree.me/Praktikum/%C3%BCbersicht.php",
            icon: "fas fa-pizza-slice"
        },
        {
            title: "Künstliche Intelligenz",
            semester: "5. Semester",
            description: "Eine praktische Sammlung von Machine-Learning- und KI-Projekten, programmiert in Python. Das Repository zeigt die konkrete Anwendung verschiedener Data-Science-Methoden – von Bilderkennung und Textverarbeitung (NLP) bis hin zum Training und der Auswertung eigener KI-Modelle.",
            skills: ["Python", "Scikit-Learn", "Pandas & NumPy", "NLP & Computer Vision", "Jupyter Notebooks"],
            link: "https://github.com/N1KAN/Introduction-to-Artificial-Intelligence-",
            icon: "fas fa-brain"
        }
    ];

    return (
        <div className="projects-main-container" id="projekte">
            <h3>Meine Projekte</h3>
            <div className="projects-grid">
                {projekte.map((projekt, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-icon-wrapper">
                            <i className={projekt.icon}></i>
                        </div>
                        <h4>
                            {projekt.title}
                            <span className="semester-badge">{projekt.semester}</span>
                        </h4>
                        <p className="project-desc">{projekt.description}</p>

                        <div className="project-skills">
                            <strong>Erworbene Skills & Technologien:</strong>
                            <div className="skill-tags">
                                {projekt.skills.map((skill, idx) => (
                                    <span className="skill-tag" key={idx}>{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links-container">
                            {projekt.link && (
                                <a href={projekt.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fab fa-github"></i> Repository
                                </a>
                            )}
                            {projekt.demoLink && (
                                <a href={projekt.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
