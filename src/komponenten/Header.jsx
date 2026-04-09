
import '../css/Header.css'
import React, { useState } from 'react';

export default function Header() {
  const [activePage, setActivePage] = useState('ueber-mich');

  return (
    <header className="header-bar">
      <div className="logo">Nikan Seyed Marandy</div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#ueber-mich"
              onClick={() => setActivePage('ueber-mich')}
              className={activePage === 'ueber-mich' ? 'active' : ''}
            >Über mich</a>
          </li>
          <li>
            <a href="#skills"
              onClick={() => setActivePage('skills')}
              className={activePage === 'skills' ? 'active' : ''}
            >Skills</a>
          </li>
          <li>
            <a href="#projekte"
              onClick={() => setActivePage('projekte')}
              className={activePage === 'projekte' ? 'active' : ''}
            >Projekte</a>
          </li>
          <li>
            <a href="#lebenslauf"
              onClick={() => setActivePage('lebenslauf')}
              className={activePage === 'lebenslauf' ? 'active' : ''}
            >Lebenslauf</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}