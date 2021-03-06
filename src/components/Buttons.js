import React from 'react';
import './Buttons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const STYLES = ['btn--primary', 'btn--outline', 'btn--outline--two'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    linkTo,
    buttonIcon,
    element
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle /* if button HAS a style (aka above if it true), apply the one it has */
        : STYLES[1]; /* if the button DOES NOT have a style, apply the SECOND one in Styles array */
    
        const checkButtonSize = SIZES.includes(buttonStyle)
        ? buttonSize /* if button HAS a size (aka above if it true), apply the one it has */
        : SIZES[0]; /* if the button DOES NOT have a size, apply the FIRST one in Styles array */

    return (
        <a href={linkTo}>
            <button
                className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                onClick={onClick}
                type={type}
            >
                <FontAwesomeIcon icon={buttonIcon}></FontAwesomeIcon>
                {children}
                {/*<i class={'fa ' + buttonIcon}></i> <- removed since not using html i anymore*/}
            </button>
        </a>
    )
};