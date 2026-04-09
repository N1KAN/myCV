import React from "react"
import '../css/Body.css'
import profilBild from '../pictures/profil.jpeg'
import { Link } from 'react-router-dom';
export default function Body() {
    return (
      <div className="body-container" id="ueber-mich">
        <img 
            src={profilBild} 
            alt="Profilbild"
            className="rounded-image"
        />
        <div className="text-container">
            <h1>Nikan Seyed Marandy,</h1>
            <h2>Informatikstudent an der Hochschule Darmstadt</h2>
            <p>
                Mein Name ist Nikan Seyed Marandy, ich bin 22 Jahre alt und studiere derzeit Informatik an der Hochschule Darmstadt im fünften Semester. Während meines Studiums konnte ich fundierte Kenntnisse in C++ erwerben und meine Programmierfähigkeiten vertiefen. Erste Erfahrungen mit Java habe ich zudem bereits in meiner Schulzeit gesammelt.
                <br /><br />
                Ich interessiere mich leidenschaftlich dafür, innovative Lösungen zu entwickeln und mein Wissen stetig zu erweitern. Ein besonderer Fokus von mir liegt auf der Automatisierung von monotonen Aufgaben sowie der Erstellung effizienter Workflows. Mich begeistert der Gedanke, durch smarte Programmierungen wertvolle Zeit zu sparen, damit man sich voll und ganz auf die wirklich wichtigen und wertschöpfenden Themen fokussieren kann.
            </p>
            <Link to="/contact">
                    <button>Kontakt aufnehmen</button>
            </Link>
        </div>
      </div>
    );
}