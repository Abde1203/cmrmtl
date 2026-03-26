import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='Footer'>
      <div className='Container'>
        <p>2100, rue Guy, bureau 208, H3H 2N4</p>
        <p className='Footer__phone'>
          Tél. : <a href='tel:+14388424923'>438-842-4923</a> | Fax : 514-470-3693
        </p>
      </div>
    </footer>
  );
};

export default Footer;
