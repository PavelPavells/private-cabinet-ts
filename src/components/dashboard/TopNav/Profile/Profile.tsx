import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Profile.scss';

const Profile: React.FC = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleProfileClick = () => {
        const arrow = document.getElementsByClassName('info-list__arrow')[0];
        arrow.classList.toggle('toggle-window');
        setDropdown(!dropdown);
    };

    const handleClickOutside = (e: { path?: Array<Element>; [propName: string]: any }) => {
        const checkingElement = document.getElementsByClassName('right-info__profile')[0];

        if (!e.path!.includes(checkingElement)) {
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
        window.location.href = '/';
        localStorage.clear();
    };

    return (
        <div className="right-info__profile">
            <div className="profile">
                <div className="profile__status" />
            </div>
            <div onClick={handleProfileClick} className="right-info__list info-list">
                <div className="info-list__text">
                    <div className="name">Иванов И.И.</div>
                    <div className="role">Администратор</div>
                </div>
                <div className="info-list__arrow" />
            </div>
            {dropdown ? (
                <ul className="dropdown">
                    <Link className="dropdown__item item" to="/account">
                        <div className="item__profile-icon" />
                        <div>Профиль пользователя</div>
                    </Link>
                    <Link className="dropdown__item item" to="/control">
                        <div className="item__settings-icon" />
                        <div>Настройки</div>
                    </Link>
                    <div className="dropdown__logout" onClick={onLogoutClick}>
                        Выйти
                    </div>
                </ul>
            ) : null}
        </div>
    );
};

export default Profile;
