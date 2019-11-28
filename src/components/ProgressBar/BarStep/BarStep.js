import React from 'react';
import './BarStep.scss';
import styleVariables from '../../../scss/_variables.scss';


function BarStep({value, color = "#dbdbdb", fill = false, current, max}) {
    let line;

    switch (value) {
        case 1:
            line = <line x1="12" y1="5" x2="19" y2="5" stroke={color} strokeWidth="3"/>;
            break;
        case current - 1:
            line = (
                <g>
                    <line x1="0" y1="5" x2="7" y2="5" stroke={color} strokeWidth="3"/>
                    <line x1="7" y1="5" x2="19" y2="5" stroke="#dbdbdb" strokeWidth="3"/>
                </g>
            );
            break;
        case current:
            line = <line x1="0" y1="5" x2="19" y2="5" stroke={color} strokeWidth="3"/>;
            break;
        case max:
            line = <line x1="0" y1="5" x2="7" y2="5" stroke={color} strokeWidth="3"/>;
            break;
        default:
            line = <line x1="0" y1="5" x2="19" y2="5" stroke={color} strokeWidth="3"/>
    }
    return (
        <span className="bar-step">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10">
                {line}
                <circle cx="50%" cy="50%" r="4" stroke={color} strokeWidth="2"
                        fill={fill ? color : styleVariables.backgroundColor}/>
            </svg>
            <span className="bar-step_value">{value}</span>
        </span>
    )
}

export default BarStep;