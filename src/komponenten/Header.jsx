
import '../css/Header.css'
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
export default function Header() {
  const [activePage, setActivePage] = useState('home');
  const location = useLocation();

  // useEffect zum Überwachen der URL
  useEffect(() => {
    // Setze die aktive Seite basierend auf der URL
    if (location.pathname === '/contact') {
      setActivePage('contact');
    } else {
      setActivePage('home');
    }
  }, [location]); // Führe den Effekt bei Änderungen der URL aus

  const handlePageChange = (page) => {
    setActivePage(page); // Ändere die aktive Seite
  };
  return (
    <header className="header-bar">
      <div className="logo">Nikan Seyed Marandy</div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/"
              onClick={() => setActivePage('home')} // Ändere die aktive Seite
              className={activePage === 'home' ? 'active' : ''}
            >Startseite</Link>
          </li>
          <li>
            <Link to="/contact"
              onClick={() => setActivePage('contact')} // Ändere die aktive Seite
              className={activePage === 'contact' ? 'active' : ''}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};