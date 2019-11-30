import React, { useState } from 'react';
import './DayMeal.scss';
import mealCheckedIcon from '../../../../../../img/meal-checked-icon.png';

function DayMeal({name, img, checked = false}) {
    const [checkedState, setCheckedState] = useState(checked);

    const toggleChecked = () => {
        setCheckedState(!checkedState);
    };

    return (
        <div className="day_cell day_cell-meal" title="Click to mark checked" onClick={toggleChecked}>
            {checkedState && <img src={mealCheckedIcon} alt="Meal checked" className="day_cell-meal_checked"/>}
            <span className={checkedState ? 'day_cell-meal_name-padding' : ''}>
                {name}
            </span>
            {img &&
            <img src={img} alt={name} className="day_cell-meal_img"/>}
        </div>
    )
}

export default DayMeal;
