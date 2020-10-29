import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavMainPartSubmenu = () => {
    return (
        <div className="submenu">
            <NavLink exact activeClassName="active-page" to="/dashboard" className="sub-link">
                <li className="subparagraph">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                            <rect className="cls-1" x="12.39" y="6.74" width="9.61" height="1.34" />
                            <polygon
                                className="cls-1"
                                points="12.39 21.89 15.45 21.89 15.45 15.05 19.03 15.05 19.03 21.89 22 21.89 22 9.41 12.39 9.41 12.39 21.89"
                            />
                            <path
                                className="cls-1"
                                d="M0,21.91H11V0H0ZM6.85,2.53H9.61V5.35H6.85Zm0,5.5H9.61v2.82H6.85Zm0,5.52H9.61v2.82H6.84Zm-5.45-11H4.16V5.35H1.39Zm0,5.5H4.16v2.82H1.39Zm0,5.52H4.16v2.82H1.39Z"
                            />
                        </svg>
                    </div>
                    <div className="list-name">
                        <div>Данные о компании</div>
                        <div className="list-name__icon" />
                    </div>
                    <div className="font-block-hover" />
                </li>
            </NavLink>
            <NavLink exact activeClassName="active-page" to="/news" className="sub-link">
                <li className="subparagraph">
                    <div className="icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5091 0L11.1182 5.06922H1.70394C1.04366 5.7295 0.660277 6.11289 0 6.77316V11.459C0.660277 12.1193 1.04366 12.5027 1.70394 13.1629H2.9819L6.83706 19.8296C7.05005 19.8935 7.17785 19.9361 7.41214 20L9.66986 18.7859C9.73376 18.5517 9.77636 18.4239 9.84026 18.1896L6.92226 13.1629H11.1395L18.5091 18.2322C18.8072 18.0831 18.8711 18.0405 19.1693 17.8914V0.340788C18.8711 0.191693 18.8072 0.149095 18.5091 0Z" />
                        </svg>
                    </div>
                    <div className="list-name">
                        Новости
                        <div className="list-name__icon" />
                    </div>
                    <div className="font-block-hover" />
                </li>
            </NavLink>
        </div>
    );
};

export default SideNavMainPartSubmenu;
