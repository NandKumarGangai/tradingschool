import React from 'react';
import styles from './home.css';
import LOGO from '../../assets/3D.jpg';

const Home = () => {
  return (
    <div className={'min-h-screen bg-red-700'}>
        <nav className={styles?.nav_wrapper}>
            <div className={styles?.logo_wrapper}>
            <img src={LOGO} />
            </div>
            <div className={styles?.navigation_wrapper}>Navigation</div>
        </nav>
        <div className={styles?.main_wrapper}>
            <div className={styles?.hero_intro}>
                Into
            </div>
            <div className={styles?.hero_picture_wrapper}>
                Image
                
            </div>
        </div>
    </div>
  )
}

export default Home