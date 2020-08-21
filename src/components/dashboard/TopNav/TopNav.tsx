/**
 * ********** Импорт зависимостей **********
 */
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { PersonalCabinet } from '../../../store/store';

import Profile from './Profile/Profile';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../__utils__/Spinner';

/**
 * ********** Импорт стилей **********
 */
import './TopNav.scss';

const TopNav = () => {
    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user, isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    const partner = localStorage.getItem('partnerName');
    // @ts-ignore
    const partnerName = partner.replace(/['"«»]/g, '');
    /**
     * Клик по бургеру для Открытия/Закрытия бокового меню
     * */
    const toggleMenu = () => {
        const sideNav: Element | any = document.querySelector('.right');
        sideNav.classList.toggle('invisible');
    };
    if (isAuthenticated && user) {
        return (
            <nav className="nav">
                {/* ref={node => (this.node = node)} */}
                <div className="nav__left">
                    <i onClick={toggleMenu} className="material-icons left__hamburger">
                        menu
                    </i>
                    <div className="left__logo" />
                </div>
                <div className="nav__right">
                    <div className="right__text">
                        Личный кабинет:
                        <strong className="text__name">{partnerName}</strong>
                    </div>
                    <div className="right__info">
                        <div className="info__bell">
                            <div className="bell__icon notifications">
                                <div className="notifications__number">5</div>
                            </div>
                        </div>
                        <Profile />
                    </div>
                </div>
            </nav>
        );
    }
    return <Loader />;
};

export default TopNav;
