import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavSettingsPartSubmenu = () => {
    return (
        <div className="submenu">
            <NavLink exact activeClassName="active-page" to="/profile" className="sub-link">
                <li className="subparagraph">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                            <path d="M11 0C7.68786 0 5.00166 2.5696 5.00166 5.7387V6.6957C5.00166 9.8659 7.68786 12.4344 11.0022 12.4344C14.3165 12.4344 17.0027 9.8659 17.0027 6.6957V5.7387C17.0016 2.5696 14.3154 0 11 0ZM11 15.3043C6.99266 15.3043 1.85236 17.3767 0.373961 19.2159C-0.540139 20.3533 0.329961 22 1.82816 22H20.1718C21.67 22 22.5401 20.3533 21.626 19.217C20.1476 17.3778 15.0051 15.3043 11 15.3043Z" />
                        </svg>
                    </div>
                    <div className="list-name">
                        Профиль
                        <div className="list-name__icon" />
                    </div>
                    <div className="font-block-hover">Главная</div>
                </li>
            </NavLink>
            <NavLink exact activeClassName="active-page" to="/users-and-roles" className="sub-link">
                <li className="subparagraph">
                    <div className="icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.72081 0.97044C9.12344 -0.32348 10.8766 -0.32348 11.2792 0.970441L12.7178 5.59356C12.8979 6.17221 13.4143 6.564 13.997 6.564H18.6524C19.9554 6.564 20.4971 8.30496 19.443 9.10464L15.6767 11.9619C15.2053 12.3195 15.008 12.9534 15.1881 13.5321L16.6267 18.1552C17.0293 19.4491 15.611 20.5251 14.5569 19.7254L10.7906 16.8682C10.3192 16.5105 9.68083 16.5105 9.20941 16.8682L5.44311 19.7254C4.389 20.5251 2.97069 19.4491 3.37333 18.1552L4.81193 13.5321C4.99199 12.9534 4.79473 12.3195 4.32332 11.9619L0.557018 9.10464C-0.497098 8.30495 0.0446463 6.564 1.3476 6.564H6.00301C6.58571 6.564 7.10214 6.17221 7.28221 5.59356L8.72081 0.97044Z" />
                        </svg>
                    </div>
                    <div className="list-name">
                        Роли и пользователи
                        <div className="list-name__icon" />
                    </div>
                    <div className="font-block-hover">Главная</div>
                </li>
            </NavLink>
        </div>
    );
};

export default SideNavSettingsPartSubmenu;
