import React from 'react';
import PropTypes from 'prop-types';
import './Plan.scss';
import Day from './Day';

function Plan({week}) {
    const getToday = () => {
        return 65; // simulation of getting day from API
    };

    const generateWeekTemplate = () => {
        let template = [];
        let day      = week * 9;

        for (let weekDay = 1; weekDay <= 7; weekDay++) {
            ++day;

            let isToday = day === getToday();

            if (weekDay % 3 === 0) {
                template.push(<Day key={weekDay} today={isToday} value={day} highCarb={true}/>);
                continue;
            }

            if (weekDay === 7) {
                template.push(<Day key={weekDay} today={isToday} value={day} guiltFree={true}/>);
            } else {
                template.push(<Day workoutDone={isToday || weekDay === 1} first={weekDay === 1} key={weekDay}
                                   today={isToday}
                                   value={day}/>);
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
                <div className="head-background head_cell head_cell-workout">Workout <span
                    className="head_cell-workout_chevron">&#x25B8;</span></div>
            </div>
            {generateWeekTemplate()}
        </div>
    );
}

Plan.propTypes = {
    week: PropTypes.number.isRequired,
};

export default Plan;
