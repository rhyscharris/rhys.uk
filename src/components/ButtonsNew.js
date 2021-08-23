import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';


export const Button = ({

    return (
        <Link to='/' className='btn-mobile'>
            <button
                className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};