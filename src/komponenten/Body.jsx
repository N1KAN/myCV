import React from "react"
import '../css/Body.css'
import profilBild from '../pictures/profil.jpeg'
import { Link } from 'react-router-dom';
export default function Body() {
    return (
      <div className="body-container">
        <img 
            src={profilBild} 
            alt="Profilbild"
            className="rounded-image"
        />
        <div className="text-container">
            <h1>Nikan Seyed Marandy,</h1>
            <h2>Informatikstudent an der Hochschule Darmstadt</h2>
            <p>
                Mein Name ist Nikan Seyed Marandy, ich bin 21 Jahre alt und studiere derzeit Informatik an der Hochschule Darmstadt im dritten Semester. Während meines Studiums habe ich bereits fundierte Kenntnisse in C++ erworben und konnte meine Programmierfähigkeiten weiter vertiefen. Zuvor habe ich bereits Erfahrungen mit Java gesammelt, das ich während meiner Schulzeit erlernt habe.
                <br /><br />
                Ich bin leidenschaftlich daran interessiert, innovative Lösungen zu entwickeln und mein Wissen in der Informatik stetig zu erweitern.
            </p>
            <Link to="/contact">
                    <button>Kontakt aufnehmen</button>
            </Link>
        </div>
      </div>
    );
}