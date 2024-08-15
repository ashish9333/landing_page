import React from 'react';
import styles from './index.module.css'; // Import the CSS Module
import Button from '../Button';

const HeroSection: React.FC = () => {
  const handleButtonClick = () => {
    console.log('hey');
  };

  return (
    <div className={styles.heroContainer}>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className={styles.heroBtns}>
        <Button
          buttonStyle='btnOutline'
          buttonSize='btnLarge'
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle='btnPrimary'
          buttonSize='btnLarge'
          onClick={handleButtonClick}
        >
          WATCH TRAILER <i className={styles.faPlayCircle} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
