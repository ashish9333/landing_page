import React from 'react';
import styles from './index.module.css'; // Import the CSS Module
import CardItem from '../CardItem';

const Cards: React.FC = () => {
  return (
    <div className={styles.cards}>
      <h1>Check out these EPIC Destinations!</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <ul className={styles.cardsItems}>
            <CardItem
              src='/images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className={styles.cardsItems}>
            <CardItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Experience Football on Top of the Himalayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
