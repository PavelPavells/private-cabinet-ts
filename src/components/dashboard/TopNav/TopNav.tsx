/**
 * ********** Импорт зависимостей **********
 */
import React, { useState, SyntheticEvent } from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
// import { PersonalCabinet } from '../../../store/store';

/**
 * Импорт компонентов
 */
import Profile from './Profile/Profile';
import ModalAlert from './ModalAlert/ModalAlert';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
// import Loader from '../../../__utils__/Spinner';

/**
 * ********** Импорт стилей **********
 */
import './TopNav.scss';

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const partner = localStorage.getItem('partnerName');
    // @ts-ignore
    const partnerName = partner.replace(/['"«»]/g, '');

    const type = localStorage.getItem('partnerType');
    // @ts-ignore
    const partnerType = type.replace(/['"«»]/g, '');
    /**
     * Клик по бургеру для Открытия/Закрытия бокового меню
     * */
    const toggleMenu = () => {
        const sideNav: Element | any = document.querySelector('.right');
        sideNav.classList.toggle('invisible');
        const push: Element | any = document.querySelector('.wrapper-push');
        if (push) {
            push.classList.toggle('spread');
        }
    };

    // const handleClickOutside = (event: Event) => {
    //     const checkingElement = document.getElementsByClassName('alert')[0];
    //     // @ts-ignore
    //     if (!event.path.includes(checkingElement)) {
    //         // const arrow = document.getElementsByClassName('info-list__arrow')[0];
    //         // arrow.classList.remove('toggle-window');
    //         setIsOpen(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, false);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, false);
    //     };
    // }, [isOpen]);

    /**
     * Клик для Открытия/Закрытия модалки уведомлений
     * */
    const onChangeIsOpen = (event: SyntheticEvent) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
    return (
        <nav className="nav">
            <div className="nav__left">
                <i onClick={toggleMenu} className="material-icons left__hamburger">
                    menu
                </i>
                <div className="left__logo" />
            </div>
            <div className="nav__right">
                <div className="right__text">
                    {`${partnerType}:`}
                    <strong className="text__name">{partnerName}</strong>
                </div>
                <div className="right__info">
                    <div className="info__bell">
                        <div onClick={onChangeIsOpen} className="bell__icon notifications">
                            <div className="notifications__number">5</div>
                        </div>
                        {isOpen ? <ModalAlert /> : null}
                    </div>
                    <Profile />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
