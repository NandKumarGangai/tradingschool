import React from 'react';
import styles from './home.module.css';
import Header from '../Header';
import BrandIcon from './BrandIcon';
import Footer from '../Footer';
import Contact from '../Contact';
import About from '../About';
import Courses from '../Courses';

const Home = () => {
    return (
        <div className={'min-h-screen scroll-smooth	'}>
            <nav className={styles?.nav_wrapper}>
                <Header />
            </nav>
            <div className={styles?.main_wrapper} id=''>
                <div className={styles?.hero_wrapper}>
                    <div className={styles?.hero_intro}>
                        <h1 className={styles?.heading}>TradingStroke</h1>
                        <h2 className={styles?.sub_heading}>A way to financial freedom</h2>
                    </div>
                    <div className={styles?.hero_picture_wrapper}>
                        <BrandIcon />
                    </div>
                </div>
            </div>
            <div id='about' className={styles?.about_wrapper}>
                <About styles={styles} />
            </div>
            <div id='courses' className={styles?.courses_wrapper}>
                <Courses styles={styles} />
            </div>
            <div id='contact' className={styles?.contact_wrapper}>
                <Contact styles={styles} />
            </div>
            <footer id='footer' className={styles?.footer_wrapper}>
                <Footer />
            </footer>
        </div>
    )
}

export default Home