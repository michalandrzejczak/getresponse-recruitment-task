import React from 'react';
import { Link } from 'react-router-dom';
import './FooterButton.scss';


function FooterButton({href = '/', text, iconSrc}) {
    return (
        <Link to={href} className="footer_section_button">
            {iconSrc && <img src={iconSrc} alt="Button icon" className="button_icon"/>}
            <span>{text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13">
                <g>
                    <g>
                        <path fill="#9c9c9c"
                              d="M.001.67l.657-.672 5.688 5.83.656.672-6.344 6.502L0 12.329 5.69 6.5z"/>
                    </g>
                </g>
            </svg>
        </Link>
    );
}

export default FooterButton;
