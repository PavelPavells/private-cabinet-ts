import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * импорт компонентов
 */
import SideNavSettingsPartSubmenu from '../SideNavSettingsPartSubmenu/SideNavSettingsPartSubmenu';

const SideNavSettingsPart = () => {
    /**
     * ********** handler обработки клика для раскрытия подменю Главная **********
     */
    const handleClickMainSubmenu = (event: React.SyntheticEvent) => {
        const mainSubMenuElem: Element = event.currentTarget.parentElement!.getElementsByClassName('submenu')[0];
        const mainSubMenuHandler: Element = event.currentTarget.getElementsByClassName('list-name__icon')[0];
        mainSubMenuElem.classList.toggle('show');
        mainSubMenuHandler.classList.toggle('turn');
    };
    return (
        <section className="nav-link">
            <NavLink to="/profile" className="font" onClick={handleClickMainSubmenu}>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                        <path d="M21.4824 8.49506L19.7915 8.12747C19.6444 7.67731 19.4623 7.23822 19.2473 6.81525L20.1834 5.35918C20.3506 5.09901 20.3138 4.75745 20.0953 4.53891L17.4611 1.90472C17.2426 1.68619 16.901 1.64943 16.6408 1.8166L15.1848 2.75269C14.7618 2.53767 14.3227 2.35556 13.8725 2.20853L13.5049 0.517639C13.4393 0.215515 13.1718 0 12.8626 0H9.13741C8.82823 0 8.56068 0.215515 8.49506 0.517639L8.12747 2.20853C7.67731 2.35556 7.23822 2.53767 6.81525 2.75269L5.35918 1.8166C5.09901 1.64943 4.75745 1.68619 4.53891 1.90472L1.90472 4.53891C1.68619 4.75745 1.64943 5.09901 1.8166 5.35918L2.75269 6.81525C2.53767 7.23822 2.35556 7.67731 2.20853 8.12747L0.517639 8.49506C0.215515 8.56085 0 8.82823 0 9.13741V12.8626C0 13.1718 0.215515 13.4391 0.517639 13.5049L2.20853 13.8725C2.35556 14.3227 2.53767 14.7618 2.75269 15.1848L1.8166 16.6408C1.64943 16.901 1.68619 17.2426 1.90472 17.4611L4.53891 20.0953C4.75745 20.3138 5.09901 20.3506 5.35918 20.1834L6.81525 19.2473C7.23822 19.4623 7.67731 19.6444 8.12747 19.7915L8.49506 21.4824C8.56068 21.7845 8.82823 22 9.13741 22H12.8626C13.1718 22 13.4393 21.7845 13.5049 21.4824L13.8725 19.7915C14.3227 19.6444 14.7618 19.4623 15.1848 19.2473L16.6408 20.1834C16.901 20.3506 17.2426 20.314 17.4611 20.0953L20.0953 17.4611C20.3138 17.2426 20.3506 16.901 20.1834 16.6408L19.2473 15.1848C19.4623 14.7618 19.6444 14.3227 19.7915 13.8725L21.4824 13.5049C21.7845 13.4391 22 13.1718 22 12.8626V9.13741C22 8.82823 21.7845 8.56085 21.4824 8.49506ZM14.9442 11C14.9442 13.1748 13.1748 14.9442 11 14.9442C8.82521 14.9442 7.05577 13.1748 7.05577 11C7.05577 8.82521 8.82521 7.05577 11 7.05577C13.1748 7.05577 14.9442 8.82521 14.9442 11Z" />
                    </svg>
                </div>
                <div className="list-name">
                    Настройки
                    <div className="list-name__icon" />
                </div>
                <div className="font-block-hover">
                    <NavLink exact activeClassName="active-page" to="/profile" className="hover__block">
                        <div className="hover__block--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                <path d="M11 0C7.68786 0 5.00166 2.5696 5.00166 5.7387V6.6957C5.00166 9.8659 7.68786 12.4344 11.0022 12.4344C14.3165 12.4344 17.0027 9.8659 17.0027 6.6957V5.7387C17.0016 2.5696 14.3154 0 11 0ZM11 15.3043C6.99266 15.3043 1.85236 17.3767 0.373961 19.2159C-0.540139 20.3533 0.329961 22 1.82816 22H20.1718C21.67 22 22.5401 20.3533 21.626 19.217C20.1476 17.3778 15.0051 15.3043 11 15.3043Z" />
                            </svg>
                        </div>
                        <div className="hover__block--text">Профиль</div>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/users-and-roles" className="hover__block">
                        <div className="hover__block--icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.72081 0.97044C9.12344 -0.32348 10.8766 -0.32348 11.2792 0.970441L12.7178 5.59356C12.8979 6.17221 13.4143 6.564 13.997 6.564H18.6524C19.9554 6.564 20.4971 8.30496 19.443 9.10464L15.6767 11.9619C15.2053 12.3195 15.008 12.9534 15.1881 13.5321L16.6267 18.1552C17.0293 19.4491 15.611 20.5251 14.5569 19.7254L10.7906 16.8682C10.3192 16.5105 9.68083 16.5105 9.20941 16.8682L5.44311 19.7254C4.389 20.5251 2.97069 19.4491 3.37333 18.1552L4.81193 13.5321C4.99199 12.9534 4.79473 12.3195 4.32332 11.9619L0.557018 9.10464C-0.497098 8.30495 0.0446463 6.564 1.3476 6.564H6.00301C6.58571 6.564 7.10214 6.17221 7.28221 5.59356L8.72081 0.97044Z" />
                            </svg>
                        </div>
                        <div className="hover__block--text">Роли и пользователи</div>
                    </NavLink>
                </div>
            </NavLink>
            <SideNavSettingsPartSubmenu />
        </section>
    );
};

export default SideNavSettingsPart;
