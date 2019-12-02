import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProteinOption.scss';

function ProteinOption({active = false, activeSrc, disabledSrc, title}) {
    const [activeState, setActiveState] = useState(active);

    const toggleActive = () => {
        setActiveState(!activeState);
    };

    return (
        <span className="protein-select_option" onClick={toggleActive}>
            <img src={activeState ? activeSrc : disabledSrc} alt={title} title={title}/>
        </span>
    );
}

ProteinOption.propTypes = {
    active:      PropTypes.bool,
    activeSrc:   PropTypes.string.isRequired,
    disabledSrc: PropTypes.string.isRequired,
    title:       PropTypes.string,
};

export default ProteinOption;
