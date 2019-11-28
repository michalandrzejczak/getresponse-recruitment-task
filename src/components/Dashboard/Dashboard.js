import React from 'react';
import './Dashboard.scss';
import ProgressBar from '../ProgressBar';
import WeekSlider from '../WeekSlider';
import ProteinSelect from '../ProteinSelect';

function Dashboard() {
    const week = 7;

    return (
        <section id="dashboard">
            <header className="dashboard_header">
                <ProgressBar value={week} max={12}/>
                <WeekSlider week={week}/>
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
