import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css'; // Import the CSS Module
import Button from '../Button'; // Adjust the path to the Button component if needed

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerSubscription}>
        <p className={styles.footerSubscriptionHeading}>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className={styles.footerSubscriptionText}>
          You can unsubscribe at any time.
        </p>
        <div className={styles.inputAreas}>
          <form>
            <input
              className={styles.footerInput}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btnOutline' type={'button'}>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className={styles.footerLinkItems}>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
            <Link to='/'>xyz</Link>
          </div>
          <div className={styles.footerLinkItems}>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaWrap}>
          <div className={styles.footerLogo}>
            <Link to='/' className={styles.socialLogo}>
              TRVL
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className={styles.websiteRights}>TRVL © 2020</small>
          <div className={styles.socialIcons}>
            <Link
              className={styles.socialIconLink + ' ' + styles.facebook}
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className={styles.socialIconLink + ' ' + styles.instagram}
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className={styles.socialIconLink + ' ' + styles.youtube}
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className={styles.socialIconLink + ' ' + styles.twitter}
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className={styles.socialIconLink + ' ' + styles.linkedin}
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
