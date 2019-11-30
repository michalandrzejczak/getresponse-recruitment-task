import React, { useState } from 'react';
import './Day.scss';
import DayMeal from './DayMeal';
import smileIcon from '../../../../../img/smile-icon.png';
import workoutDoneIcon from '../../../../../img/dumbbell-icon-done.png';
import workoutUndoneIcon from '../../../../../img/dumbbell-icon-undone.png';
import bodeShakeImg from '../../../../../img/bode-shake.png';


function Day({value, today = false, highCarb = false, guiltFree = false, first = false, workoutDone = false}) {
    const [workoutDoneState, setWorkoutDoneState] = useState(workoutDone);

    const mealsAPI = {
        lowCarb:  {
            first:  {
                name: 'Bod·ē Shake',
                img:  bodeShakeImg,
            },
            second: {
                name: 'Ham and Swiss Roll Ups',
                img:  null,
            },
            third:  {
                name: 'Turkey Melt',
                img:  null,
            },
            forth:  {
                name: 'Bod·ē Burn with Mozzarella and Tomato Slices',
                img:  null,
            },
            fifth:  {
                name: 'Turkey Melt',
                img:  null,
            },
        },
        highCarb: {
            first:  {
                name: 'Bod·ē Shake',
                img:  bodeShakeImg,
            },
            second: {
                name: 'Grilled Steak (HC)',
                img:  null,
            },
            third:  {
                name: 'Bod·ē Shake',
                img:  bodeShakeImg,
            },
            forth:  {
                name: 'Bod·ē Burn and Whole-Wheat English Muffin with Butter Spray',
                img:  null,
            },
            fifth:  {
                name: 'Garlic Lime Chicken (HC)',
                img:  null,
            },
        },
    };

    const meals = highCarb ? mealsAPI.highCarb : mealsAPI.lowCarb;

    const toggleWorkout = () => {
        setWorkoutDoneState(!workoutDoneState);
    };

    return (
        <div className={`plan_day ${today ? 'plan_day-active' : ''}`}>
            <div className="day_cell day_cell-title">Day {value}</div>
            {guiltFree ? (
                <React.Fragment>
                    <div className="day_cell day_cell-guiltfree">
                        <span className="day_cell-guiltfree_text">
                            <img className="day_cell-guiltfree_img" src={smileIcon} alt="Smile"/>
                            Guilt-free day
                        </span>
                    </div>
                    <div className="day_cell day_cell-head day_cell-head-first day_cell-print">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27">
                            <g>
                                <g>
                                    <path fill="#bababa"
                                          d="M22 20h-2v-2h1v-2H2v2h1v2H1a1 1 0 0 1-1-1V9c0-.967 4-2 11-2h1c6.937 0 11 1.01 11 2v10a1 1 0 0 1-1 1zm-2.5-10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM4 1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v5H4zm15 25a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h15zm-2-8H6v1h11zm0 2H6v1h11zm0 2H6v1h11zm0 2H6v1h11z"/>
                                </g>
                            </g>
                        </svg>
                        Print
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <DayMeal name={meals.first.name} img={meals.first.img}/>
                    <DayMeal name={meals.second.name} img={meals.second.img}/>
                    <DayMeal name={meals.third.name} img={meals.third.img}/>
                    <DayMeal name={meals.forth.name} img={meals.forth.img}/>
                    <DayMeal name={meals.fifth.name} img={meals.fifth.img}/>
                    <div className={`day_cell day_cell-head day_cell-head-first ${first && 'day_cell-first'}`}>
                        <span className="day_cell-head_span">{highCarb ? 'high-carb' : 'low-carb'}</span>
                    </div>
                    <div className={`day_cell day_cell-head ${first && 'day_cell-first'} day_cell-workout`}
                         onClick={toggleWorkout}>
                        {workoutDoneState ? (
                                <img src={workoutDoneIcon} alt="Dumbbell, workout done"/>
                            )
                            : (
                                <img src={workoutUndoneIcon} alt="Dumbbell, workout undone"/>
                            )}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default Day;
