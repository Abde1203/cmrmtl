import React from 'react';
import './Header.css';

interface HeaderProps {
  language: 'fr' | 'en';
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage }) => {
  return (
    <header className='Header'>
      <div className='Header__top'>
        <div className='Header__brand'>
          <div className='Logo' aria-hidden='true'>
            <span className='Logo__mark' />
            <div className='Logo__text'>
              <span className='Logo__name'>CMR</span>
              <span className='Logo__sub'>Montreal</span>
            </div>
          </div>
        </div>
        <button onClick={toggleLanguage}>
          {language === 'fr' ? 'English' : 'Français'}
        </button>
      </div>
      <p className='Header__tagline'>
        {language === 'fr' ? 'Clinique médicale dédiée aux nouveaux arrivants.' : 'A medical clinic dedicated to newcomers.'}
      </p>
      <h1>{language === 'fr' ? 'Clinique pour les réfugiés et étudiants internationaux de Montréal' : 'Clinic for refugees and international students of montreal'}</h1>
    </header>
  );
};

export default Header;
