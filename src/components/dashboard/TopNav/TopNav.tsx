/**
 * ********** Импорт зависимостей **********
 */
import React, { useState, SyntheticEvent, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { PersonalCabinet } from '../../../store/store';

/**
 * импорт экшенов
 */
import { fetchDataNotifications } from '../../../actions/notificationsActions/notificationsActions';
import { IsOpenSideMenu } from '../../../actions/topNavActions/topNavActions';
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
    /**
     * хук смены состояния
     */
    const dispatch = useDispatch();

    const { notifications } = useSelector((state: PersonalCabinet) => state.notifications, shallowEqual);
    const { isOpenMenu } = useSelector((state: PersonalCabinet) => state.topnav, shallowEqual);

    useEffect(() => {
        dispatch(fetchDataNotifications());
    }, [isOpenMenu]);
    const partner = localStorage.getItem('partnerName');
    // @ts-ignore
    const partnerName = partner.replace(/['"«»]/g, '');

    const type = localStorage.getItem('partnerTypeStr');
    // @ts-ignore
    const partnerTypeStr = type.replace(/['"«»]/g, '');
    /**
     * Клик по бургеру для Открытия/Закрытия бокового меню
     * */
    const toggleMenu = () => {
        dispatch(IsOpenSideMenu(!isOpenMenu));
        localStorage.setItem('isOpenSide', JSON.stringify(!isOpenMenu));
    };

    // useEffect(() => {
    //     const stateSideMenu = localStorage.getItem('isOpenSide');
    //     console.log(stateSideMenu);
    //     // if (stateSideMenu) {
    //     //     setIsOpenSide(false);
    //     //     // setIsOpenSide(stateSideMenu);
    //     // }
    // });

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
                    {`${partnerTypeStr}:`}
                    <strong className="text__name">{partnerName}</strong>
                </div>
                <div className="right__info">
                    <div className="info__bell">
                        <div onClick={onChangeIsOpen} className="bell__icon notifications">
                            {notifications && (
                                <>
                                    {notifications.notifications > 0 ? (
                                        <div className="notifications__number">
                                            {notifications.notifications > 0 ? notifications.notifications : 1}
                                        </div>
                                    ) : null}
                                </>
                            )}
                        </div>
                        {isOpen ? (
                            // @ts-ignore
                            <ModalAlert isOpen={isOpen} setIsOpen={setIsOpen} />
                        ) : null}
                    </div>
                    <Profile />
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
