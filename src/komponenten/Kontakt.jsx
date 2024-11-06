import React from "react";
import Header from './Header';
import Button from "./Button";
import '../css/Kontakt.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Kontakt() {
    return (
        <div>
            <Header />
            <div className="kontakt-container">
                <div className="kontakt-content">
                    <h1>Kontaktieren Sie mich</h1>
                    <p>
                        Wenn Sie Fragen haben oder weitere Informationen benötigen, zögern Sie bitte nicht, mich zu kontaktieren. 
                        Ich freue mich auf Ihre Nachricht!
                    </p>
                    <div className="karten-container">
                        <div className="karte">
                            <i className="fas fa-phone fa-2x icon"></i>
                            <h2>Telefonnummer</h2>
                            <p>
                                <a href="tel:+4917663416006">+49 176 63416006</a>
                            </p>
                        </div>
                        <div className="karte">
                            <i className="fas fa-envelope fa-2x icon"></i>
                            <h2>E-Mail</h2>
                            <p>
                                <a href="mailto:nikanmarandy@gmail.com">nikanmarandy@gmail.com</a>
                            </p>
                        </div>
                        <div className="karte">
                            <i className="fas fa-home fa-2x icon"></i>
                            <h2>Wohnadresse</h2>
                            <p>
                                Riedeselstraße 62B App. 010 Zi. 1, <br />
                                64283 Darmstadt, Deutschland
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Button />
        </div>
    );
}
