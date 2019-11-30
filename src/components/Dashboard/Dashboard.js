import React from 'react';
import './Dashboard.scss';
import ProgressBar from '../ProgressBar';
import WeekSlider from '../WeekSlider';
import ProteinSelect from '../ProteinSelect';
import Plan from '../Plan';

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
                <Plan week={week} />
            </div>
            <footer className="dashboard_footer">

            </footer>
        </section>
    );
}

export default Dashboard;
