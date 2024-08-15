import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css'; // Import the CSS Module

interface CardItemProps {
  src: string;
  text: string;
  label: string;
  path: string;
}

const CardItem: React.FC<CardItemProps> = ({ src, text, label, path }) => {
  return (
    <li className={styles.cardsItem}>
      <Link className={styles.cardsItemLink} to={path}>
        <figure className={styles.cardsItemPicWrap} data-category={label}>
          <img
            className={styles.cardsItemImg}
            alt='Travel'
            src={src}
          />
        </figure>
        <div className={styles.cardsItemInfo}>
          <h5 className={styles.cardsItemText}>{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
