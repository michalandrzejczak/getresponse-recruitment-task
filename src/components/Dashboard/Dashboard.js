import React from 'react';
import './Dashboard.scss';
import ProgressBar from '../ProgressBar';
import WeekSlider from '../WeekSlider';
import ProteinSelect from '../ProteinSelect';

function Dashboard() {
    const week = 7;
    const maxWeek = 12;

    return (
        <section id="dashboard">
            <header className="dashboard_header">
                <ProgressBar value={week} max={maxWeek}/>
                <WeekSlider week={week} max={maxWeek}/>
                <ProteinSelect/>
            </header>
            <div className="dashboard_plan">

            </div>
            <footer className="dashboard_footer">

            </footer>
        </section>
    );
}

export default Dashboard;
