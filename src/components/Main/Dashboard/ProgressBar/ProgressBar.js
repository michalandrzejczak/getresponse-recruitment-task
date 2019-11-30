import React from 'react';
import './ProgressBar.scss';
import BarStep from "./BarStep";
import styleVariables from '../../../../scss/_variables.scss';

function ProgressBar({value, max}) {
    const width          = `${max * 19}px`;
    let stepsCompleted   = [];
    let stepsUncompleted = [];

    for (let i = 1; i < value; i++) {
        stepsCompleted.push(i);
    }

    for (let i = value + 1; i <= max; i++) {
        stepsUncompleted.push(i);
    }

    return (
        <div className="bar" style={{width: width}}>
            <span className="bar_title">Your {max} week progress</span>
            <div className="bar_wrapper">
                {stepsCompleted.map(val =>
                    <BarStep key={val} value={val} color={styleVariables.greenColor} fill={true} current={value} max={max}/>
                )}
                <BarStep key={value} value={value} current={value} max={max}/>
                {stepsUncompleted.map(val =>
                    <BarStep key={val} value={val} fill={true} current={value} max={max}/>
                )}
            </div>
        </div>
    );
}

export default ProgressBar;
