import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import Button from '../Button';

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  const handleClick = () => setClick(prevClick => !prevClick);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    // Add event listener for window resize
    window.addEventListener('resize', showButton);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to='/' className={styles.navbarLogo} onClick={closeMobileMenu}>
          TRVL
          <i className={styles.faTypo3} />
        </Link>
        <div className={styles.menuIcon} onClick={handleClick}>
          <i className={click ? `fas fa-times ${styles.faTimes}` : `fas fa-bars ${styles.faBars}`} />
        </div>
        <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <Link to='/' className={styles.navLinks} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/services'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/products'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className={styles.navLinksMobile}
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btnOutline'>SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
