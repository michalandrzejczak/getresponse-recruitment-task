import React, { useState } from 'react';
import './WeekSlider.scss';

function WeekSlider({week, max}) {
    const [weekState, setWeekState] = useState(week);
    const previousWeek = () => {
        if (weekState !== 1) {
            setWeekState(weekState - 1);
        }
    };

    const nextWeek = () => {
        if (weekState !== max) {
            setWeekState(weekState + 1);
        }
    };

    return (
        <div className="week-slider_wrapper">
            { weekState !== 1 &&
                <span className="week-slider_arrow-button" onClick={previousWeek}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16"><g><g><path
                        fill="#7d7d7d" d="M8.155-.002l.844.828L1.685 8 9 15.175l-.844.827L-.002 8z"/></g></g></svg>
                </span>
            }
            <span className="week-slider_title">Week {weekState}</span>
            { weekState !== max &&
                <span className="week-slider_arrow-button" onClick={nextWeek}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16"><g><g><path
                        fill="#7d7d7d" d="M.001.826l.844-.828L9.002 8 .845 16.002l-.844-.827L7.315 8z"/></g></g></svg>
                </span>
            }
        </div>
    );
}

export default WeekSlider;
