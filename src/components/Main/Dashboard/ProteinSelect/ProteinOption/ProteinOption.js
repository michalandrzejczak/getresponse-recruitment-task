import React, { useState } from 'react';
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

export default ProteinOption;
