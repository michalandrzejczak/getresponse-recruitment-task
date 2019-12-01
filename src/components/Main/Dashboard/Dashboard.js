import React from 'react';
import './Dashboard.scss';
import ProgressBar from './ProgressBar';
import WeekSlider from './WeekSlider';
import ProteinSelect from './ProteinSelect';
import Plan from './Plan';
import FooterButton from './FooterButton';
import androidIcon from '../../../img/android-icon.png';
import iosIcon from '../../../img/ios-icon.png';

function Dashboard() {
    const week    = 7;
    const maxWeek = 12;

    return (
        <section id="dashboard">
            <header className="dashboard_header">
                <ProgressBar value={week} max={maxWeek}/>
                <WeekSlider week={week} max={maxWeek}/>
                <ProteinSelect/>
            </header>
            <div className="dashboard_plan">
                <Plan week={week}/>
            </div>
            <footer className="dashboard_footer">
                <section className="footer_section">
                    <h1 className="footer_section_h1">Running out of products?</h1>
                    <p className="footer_section_p">Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
                        aliquet.</p>
                    <FooterButton text="Buy now"/>
                </section>
                <section className="footer_section">
                    <h1 className="footer_section_h1">Bod·ē Trainer
                        in your pocket</h1>
                    <p className="footer_section_p">Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
                        aliquet.</p>
                    <FooterButton iconSrc={iosIcon} text="iOS"/>
                    <FooterButton iconSrc={androidIcon} text="Android"/>
                </section>
                <section className="footer_section">
                    <h1 className="footer_section_h1">Frequently Asked Questions</h1>
                    <p className="footer_section_p">Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
                        aliquet.</p>
                    <FooterButton text="Read FAQs" href="/faq"/>
                </section>
            </footer>
        </section>
    )
}

export default Dashboard;

