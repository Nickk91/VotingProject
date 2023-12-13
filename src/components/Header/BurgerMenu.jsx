import React, { useState } from "react";
import "../../styles/BurgerMenu.css";

function BurgerMenu({ username }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div>
      <button id="burger-button" onClick={toggleMenu}>
        {username}
      </button>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {menuVisible && (
        <div id="burger-menu">
          <div className="menu-item" onClick={closeMenu}>
            Item 1
          </div>
          <div className="menu-item" onClick={closeMenu}>
            Item 2
          </div>
          <div className="menu-item" onClick={closeMenu}>
            Item 3
          </div>
        </div>
      )}
    </div>
  );
}

// Export the BurgerMenu component for use in other files
export default BurgerMenu;
