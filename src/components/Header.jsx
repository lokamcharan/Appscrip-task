import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="logo-section">
        <img src="./Logo.png" alt="Logo" className="logo-image" />
        <img src="./LOGO txt.png" alt="Logo Text" className="text-logo-image" />
      </div>
      
      <nav className="nav-section">
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </nav>


      <div className="icon-section">
        <img src="./search-normal.png" alt="Search" className="icon-image" />
        <img src="./heart.png" alt="Heart" className="icon-image" />
        <img src="./shopping-bag.png" alt="Shopping Bag" className="icon-image" />
        <img src="./profile.png" alt="Profile" className="icon-image" />
        <img src="./Language.png" alt="Language" className="icon-image" />
      </div>

      
    </div>
  );
}

export default Header;
