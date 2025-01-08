import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Strona Główna</Link>
        </li>
        <li className="nav-item">
          <Link to="/promotions">Promocje</Link>
        </li>
        <li className="nav-item">Kategorie</li>
        <li className="nav-item">Sklepy</li>
        <li className="nav-item">Historia Promocji</li>
        <li className="nav-item">Dodaj Gazetkę</li>
        <li className="nav-item">Ustawienia / Profil Użytkownika</li>
      </ul>
    </nav>
  );
};

export default Navigation;
