import React, { useState, SyntheticEvent, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { PersonalCabinet } from '../../../store/store';
import { fetchDataNotifications } from '../../../actions/notificationsActions/notificationsActions';
import { IsOpenSideMenu } from '../../../actions/topNavActions/topNavActions';
import Profile from './Profile/Profile';
import ModalAlert from './ModalAlert/ModalAlert';

import './TopNav.scss';

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => {
        dispatch(IsOpenSideMenu(!isOpenMenu));
        localStorage.setItem('isOpenSide', JSON.stringify(!isOpenMenu));
    };

    const onChangeIsOpen = (event: SyntheticEvent) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
    return (
        <header className="nav">
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
                        {isOpen ? <ModalAlert isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
                    </div>
                    <Profile />
                </div>
            </div>
        </header>
    );
};

export default TopNav;
