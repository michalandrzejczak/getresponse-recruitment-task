import React from 'react';
import './ProteinSelect.scss';
import ProteinOption from './ProteinOption';
import broccoliIcon from '../../img/protein-select-icons/protein-broccoli.png';
import cheeseIcon from '../../img/protein-select-icons/protein-cheese.png';
import steakIcon from '../../img/protein-select-icons/protein-steak.png';
import fishIcon from '../../img/protein-select-icons/protein-fish.png';
import thanksgivingIcon from '../../img/protein-select-icons/protein-thanksgiving.png';
import broccoliIconDisabled from '../../img/protein-select-icons/protein-broccoli-disabled.png';
import cheeseIconDisabled from '../../img/protein-select-icons/protein-cheese-disabled.png';
import steakIconDisabled from '../../img/protein-select-icons/protein-steak-disabled.png';
import fishIconDisabled from '../../img/protein-select-icons/protein-fish-disabled.png';
import thanksgivingIconDisabled from '../../img/protein-select-icons/protein-thanksgiving-disabled.png';

function ProteinSelect() {
    return (
        <div className="protein-select_wrapper">
            <span className="protein-select_title">
                Select your protein option
            </span>
            <div className="protein-select_options-wrapper">
                <ProteinOption active={true} title="Broccoli" activeSrc={broccoliIcon}
                               disabledSrc={broccoliIconDisabled}/>
                <ProteinOption active={true} title="Cheese" activeSrc={cheeseIcon} disabledSrc={cheeseIconDisabled}/>
                <ProteinOption active={true} title="Steak" activeSrc={steakIcon} disabledSrc={steakIconDisabled}/>
                <ProteinOption active={false} title="Fish" activeSrc={fishIcon} disabledSrc={fishIconDisabled}/>
                <ProteinOption active={false} title="Thanksgiving ;)" activeSrc={thanksgivingIcon}
                               disabledSrc={thanksgivingIconDisabled}/>
            </div>
        </div>
    );
}

export default ProteinSelect;
