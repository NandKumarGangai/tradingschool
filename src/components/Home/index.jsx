import React from 'react';
import styles from './home.module.css';
import Header from '../Header';
import BrandIcon from './BrandIcon';
import Footer from '../Footer';
import Contact from '../Contact';
import About from '../About';
import Courses from '../Courses';
import About1 from '../../assets/about1.png';
import About2 from '../../assets/about2.png';

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
                <About
                    thumbnail={About1}
                    title={'Benefits of joining stock market classess'}
                    content={`
                    Helps in understanding the complete techniques to earn more profit in the stock market.
                    In-depth technical knowledge of Trends & Patterns to identify stock price movements.
                    Helps to become a good trader with full knowledge about the short term, mid-term Trading and Long term Investment.
                    A stock market trading course is a great option for people looking for 
                    a new career because you can do the course in your own time.
                    
                    If you don’t understand a concept, you can discuss with mentor face to face to clear your all doubts.
                    A course also provides you with information in a structural manner,
                    so you begin to understand and think technically about investing in the stock market.
                    `}
                    styles={styles} />

                <About
                thumbnail={About2}
                    title={'Importance of stock market and money management for future opportunities'}
                    content={`Stock market is a favorite investment avenue amongst investors globally.
                     Great, quick returns, growth potential and the thrill of participating 
                     in trading have attracted millions to this business. 
                     Plus, the facility to earn second income has made stocks hugely popular. 
                     Like any other business, stock trading too comes with its own set of risk. 
                     Therefore, if you want to make it big in stock market, you must learn all the concepts & 
                     strategies related to the stock market. 
                     You can gain an insight into technicalities, tricks and tweaks along with the risks of stock market 
                     by taking up a formal training.`}
                    styles={styles} />
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