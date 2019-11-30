import React from 'react';
import './Plan.scss';
import Day from './Day';

function Plan({week}) {
    const getToday = () => {
        return 65; // simulation of getting day from API
    };

    const generateWeek = () => {
        let template = [];
        let day      = week * 9;

        for (let i = 1; i <= 7; i++) {
            ++day;

            let isToday = day === getToday();

            if (i % 3 === 0) {
                template.push(<Day key={i} today={isToday} value={day} highCarb={true}/>);
                continue;
            }
            if (i === 7) {
                template.push(<Day key={i} today={isToday} value={day} guiltFree={true}/>);
            } else {
                template.push(<Day workoutDone={isToday || i === 1} first={i === 1} key={i} today={isToday} value={day}/>);
            }
        }

        return template;
    };

    const getPlanHours = () => {
        return { // simulation of getting day from API
            first:  6,
            second: 9,
            third:  12,
            forth:  15,
            fifth:  18,
        };
    };

    const formatHour = hour => {
        let periodString = hour > 11 ? 'PM' : 'AM',
            hourString   = (hour > 12 ? hour - 12 : hour) + ':00 ';

        return <span>
            <span className="head_cell_hour-span">{hourString}</span>
            <span className="head_cell_period-span">{periodString}</span>
        </span>
    };

    return (
        <div className="plan">
            <div className="plan_head">
                <div className="head-background head_cell head_spacer"></div>
                <div className="head-background head_cell head_cell-meal">
                    {formatHour(getPlanHours().first)}
                </div>
                <div className="head-background head_cell head_cell-meal">{formatHour(getPlanHours().second)}</div>
                <div className="head-background head_cell head_cell-meal">{formatHour(getPlanHours().third)}</div>
                <div className="head-background head_cell head_cell-meal">{formatHour(getPlanHours().forth)}</div>
                <div className="head-background head_cell head_cell-meal">{formatHour(getPlanHours().fifth)}</div>
                <div className="head-background head_cell head_spacer"></div>
                <div className="head-background head_cell head_cell-workout">Workout &#x25B8;</div>
            </div>
            {generateWeek()}
        </div>
    );
}

export default Plan;
