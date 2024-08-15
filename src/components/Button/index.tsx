import React from 'react';
import styles from './index.module.css'; // Import the CSS Module
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    buttonStyle?: 'btnPrimary' | 'btnOutline'; 
    buttonSize?: 'btnMedium' | 'btnLarge';
}

const STYLES = ['btnPrimary', 'btnOutline'];
const SIZES = ['btnMedium', 'btnLarge'];

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button', // Default button type
    onClick,
    buttonStyle = 'btnPrimary', // Default button style
    buttonSize = 'btnMedium' // Default button size
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className={styles.btnMobile}>
            <button
                className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};

export default Button;
