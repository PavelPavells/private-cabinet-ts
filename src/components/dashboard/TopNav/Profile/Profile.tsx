import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import Loader from '../../../../__utils__/Spinner';

import { logoutUser } from '../../../../actions/authActions/authActions';

import './Profile.scss';
// import { PersonalCabinet } from '../../../../store/store';

const Profile: React.FC = () => {
    const [dropdown, setDropdown] = useState(false);

    const fullName = localStorage.getItem('accountFullName');
    // @ts-ignore
    const accountFullName = fullName.replace(/['"«»]/g, '');
    const role = localStorage.getItem('adminStr');
    // @ts-ignore
    const partnerRole = role.replace(/['"«»]/g, '');

    const dispatch = useDispatch();

    const handleProfileClick = () => {
        const arrow = document.getElementsByClassName('info-list__arrow')[0];
        arrow.classList.toggle('toggle-window');
        setDropdown(!dropdown);
    };

    const handleClickOutside = (e: Event) => {
        const checkingElement = document.getElementsByClassName('right-info__profile')[0];
        // @ts-ignore
        if (!e.path.includes(checkingElement)) {
            const arrow = document.getElementsByClassName('info-list__arrow')[0];
            arrow.classList.remove('toggle-window');
            setDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    }, [dropdown]);

    const onLogoutClick = () => {
        dispatch(logoutUser());
    };
    return (
        <div className="right-info__profile">
            <div className="profile">
                <div className="profile__status" />
            </div>
            <div onClick={handleProfileClick} className="right-info__list info-list">
                <div className="info-list__text">
                    <div className="name">{accountFullName}</div>
                    <div className="role">{partnerRole}</div>
                </div>
                <div className="info-list__arrow" />
            </div>
            {dropdown ? (
                <ul className="dropdown">
                    <NavLink className="dropdown__item" to="/profile">
                        <div className="item__profile" />
                        <div className="item__linck">Профиль пользователя</div>
                    </NavLink>
                    {/* <Link className="dropdown__item" to="/control">
                        <div className="item__settings" />
                        <div className="item__linck">Настройки</div>
                    </Link> */}
                    <div className="dropdown__logout" onClick={onLogoutClick}>
                        Выйти
                    </div>
                </ul>
            ) : null}
        </div>
    );
};

export default Profile;
