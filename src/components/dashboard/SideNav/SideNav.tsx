/**
 * ********** Импорт основных библиотек из NPM **********
 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersonalCabinet } from '../../../store/store';

/**
 * ********** Импорт файлов стилей **********
 */
import './SideNav.scss';

/**
 * ********** Интерфейс пропсов компонента Main **********
 */
interface SideNavProps {
    readonly fetchDataMain: (data: any) => void;
    readonly onLogoutClick: () => void;
    readonly handleClickMain: () => void;
    readonly handleClickPrice: () => void;
    readonly handleClickSales: () => void;
    readonly handleClickPayment: () => void;
    readonly handleClickShipment: () => void;
    readonly handleClickAccount: () => void;
    readonly handleClickSettings: () => void;
    readonly handleClickAdministration: () => void;
    readonly handleClickConfogurator: () => void;
    readonly handleClickMainSubMenu: () => void;
}

class SideNav extends React.PureComponent<SideNavProps> {
    componentDidMount() {
        this.addShadowToActiveSubMenu();
    }

    componentDidUpdate() {
        this.removeShadowToActiveSubMenu();
        this.addShadowToActiveSubMenu();
    }

    private addShadowToActiveSubMenu = () => {
        const elemenForAddingShadow: HTMLElement | null = document.getElementsByClassName('active-page')[0].parentElement!.parentElement;
        elemenForAddingShadow!.classList.add('nav--active');
    };

    private removeShadowToActiveSubMenu = () => {
        const elementForRemoveShadow = document.getElementsByClassName('nav--active')[0];
        elementForRemoveShadow.classList.remove('nav--active');
    };

    // @ts-ignore
    onLogoutClick = () => {
        // this.props.logoutUser(this.props.history);
        window.location.href = '/';
    };

    /**
     * ********** handler обработки клика для раскрытия подменю Главная **********
     */
    private handleClickMainSubmenu = (event: React.SyntheticEvent) => {
        const mainSubMenuElem: Element = event.currentTarget.parentElement!.getElementsByClassName('submenu')[0];
        const mainSubMenuHandler: Element = event.currentTarget.getElementsByClassName('list-name__icon')[0];

        mainSubMenuElem.classList.toggle('show');
        mainSubMenuHandler.classList.toggle('turn');
    };

    public render() {
        return (
            <nav className="side">
                <ul className="side__top">
                    <div className="nav-link">
                        <NavLink to="/dashboard" className="font" onClick={this.handleClickMainSubmenu}>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                    <path
                                        className="cls-1"
                                        d="M21.63,9.77,11.76.31a1.08,1.08,0,0,0-1.52,0L.37,9.77a1.22,1.22,0,0,0-.29,1.31,1.12,1.12,0,0,0,1.05.76H2.71v9.48a.66.66,0,0,0,.65.68H8.76a.66.66,0,0,0,.65-.68V15.56h3.18v5.76a.66.66,0,0,0,.65.68h5.41a.66.66,0,0,0,.65-.68V11.84h1.58a1.12,1.12,0,0,0,1.05-.76A1.22,1.22,0,0,0,21.63,9.77Z"
                                    />
                                    <path className="cls-1" d="M19.13,1.36H14.78l5,4.78V2A.66.66,0,0,0,19.13,1.36Z" />
                                </svg>
                            </div>
                            <div className="list-name">
                                <div>Главная</div>
                                <div className="list-name__icon" />
                            </div>
                            <div className="font-block-hover">Главная</div>
                        </NavLink>
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
                                        <div className="list-name__sales">
                                            <span className="dot" />
                                            Текущая скидка 22%
                                        </div>
                                        <div className="list-name__icon" />
                                    </div>
                                    <div className="font-block-hover" />
                                </li>
                            </NavLink>
                            {/* <NavLink exact activeClassName="active-page" to="/admin-panel" className="sub-link">
                                <li className="subparagraph">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M11.5909 14.0092C11.5909 14.2601 11.3875 14.4638 11.1364 14.4638H8.86366C8.61275 14.4638 8.40912 14.2601 8.40912 14.0092V12.4124L0 10.502V18.1145C0 18.6165 0.407059 19.0236 0.909085 19.0236H19.0909C19.593 19.0236 20 18.6165 20 18.1145V10.5097L11.5909 12.4135V14.0092Z" />
                                            <path d="M19.0909 5.38696H0.909085C0.407059 5.38696 0 5.79399 0 6.29605V9.33674L8.40909 11.247V10.3727C8.40909 10.1217 8.61271 9.91811 8.86363 9.91811H11.1363C11.3875 9.91811 11.5909 10.1217 11.5909 10.3727V11.2481L20 9.34422V6.29605C20 5.79399 19.5929 5.38696 19.0909 5.38696Z" />
                                            <path d="M6.49227 3.27702C6.49227 2.59794 7.04476 2.04542 7.72365 2.04542H12.2761C12.9552 2.04542 13.5077 2.5979 13.5077 3.27702V4.47771H14.5766V3.27702C14.5766 2.00839 13.5448 0.976562 12.2761 0.976562H7.72362C6.45522 0.976562 5.42316 2.00839 5.42316 3.27702V4.47771H6.49224L6.49227 3.27702Z" />
                                        </svg>
                                    </div>
                                    <div className="list-name">
                                        Административная панель
                                        <div className="list-name__icon" />
                                    </div>
                                    <div className="font-block-hover" />
                                </li>
                            </NavLink> */}
                        </div>
                    </div>
                    <NavLink exact activeClassName="active-page" to="/price-list" className="nav-link">
                        <li className="font">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
                                    <path d="M10.3324 0H0V20H15.6364V5.304L10.3324 0ZM3.27273 4.36364H6.90909C7.10982 4.36364 7.27273 4.52618 7.27273 4.72727C7.27273 4.92836 7.10982 5.09091 6.90909 5.09091H3.27273C3.072 5.09091 2.90909 4.92836 2.90909 4.72727C2.90909 4.52618 3.072 4.36364 3.27273 4.36364ZM12.3636 16.7273H3.27273C3.072 16.7273 2.90909 16.5647 2.90909 16.3636C2.90909 16.1625 3.072 16 3.27273 16H12.3636C12.5644 16 12.7273 16.1625 12.7273 16.3636C12.7273 16.5647 12.5644 16.7273 12.3636 16.7273ZM12.3636 13.8182H3.27273C3.072 13.8182 2.90909 13.6556 2.90909 13.4545C2.90909 13.2535 3.072 13.0909 3.27273 13.0909H12.3636C12.5644 13.0909 12.7273 13.2535 12.7273 13.4545C12.7273 13.6556 12.5644 13.8182 12.3636 13.8182ZM12.3636 10.9091H3.27273C3.072 10.9091 2.90909 10.7465 2.90909 10.5455C2.90909 10.3444 3.072 10.1818 3.27273 10.1818H12.3636C12.5644 10.1818 12.7273 10.3444 12.7273 10.5455C12.7273 10.7465 12.5644 10.9091 12.3636 10.9091ZM12.3636 8H3.27273C3.072 8 2.90909 7.83745 2.90909 7.63636C2.90909 7.43527 3.072 7.27273 3.27273 7.27273H12.3636C12.5644 7.27273 12.7273 7.43527 12.7273 7.63636C12.7273 7.83745 12.5644 8 12.3636 8ZM9.81818 5.81818V0.727273L14.9091 5.81818H9.81818Z" />
                                </svg>
                            </div>
                            <div className="list-name">Прайс-лист</div>
                            <div className="font-block-hover">Прайс-лист</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/orders" className="nav-link">
                        <li className="font">
                            {/** Изменить на subparagraph чтобы вернуть подпараграфы* */}
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
                                    <path d="M7.97772 1.40781C9.06445 1.40781 9.94855 2.29191 9.94855 3.37859H11.3564C11.3564 1.51564 9.84071 0 7.97772 0C6.11477 0 4.59912 1.51564 4.59912 3.37859H6.00693C6.00693 2.29191 6.89103 1.40781 7.97772 1.40781Z" />
                                    <path d="M15.9513 19.2186L15.0149 4.7329C14.9935 4.3604 14.6853 4.06921 14.3121 4.06921H1.64247C1.26935 4.06921 0.961042 4.3604 0.939691 4.7329L0.00115309 19.256C-0.00992166 19.4493 0.0591547 19.6387 0.192145 19.7795C0.325089 19.9203 0.510216 20 0.703883 20H15.2506C15.251 20 15.2513 20 15.2515 20C15.6403 20 15.9554 19.6849 15.9554 19.2961C15.9555 19.27 15.954 19.2441 15.9513 19.2186ZM6.59246 6.30683C6.59246 6.79895 6.19353 7.19788 5.70141 7.19788C5.20929 7.19788 4.81036 6.79895 4.81036 6.30683V5.79969C4.81036 5.30757 5.20929 4.90864 5.70141 4.90864C6.19353 4.90864 6.59246 5.30757 6.59246 5.79969V6.30683ZM11.1452 6.30683C11.1452 6.79895 10.7462 7.19788 10.2541 7.19788C9.76199 7.19788 9.36307 6.79895 9.36307 6.30683V5.79969C9.36307 5.30757 9.76199 4.90864 10.2541 4.90864C10.7462 4.90864 11.1452 5.30757 11.1452 5.79969V6.30683Z" />
                                </svg>
                            </div>
                            <div className="list-name">Заказы</div>
                            <div className="font-block-hover">Заказы</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/payment" className="nav-link">
                        <li className="font">
                            {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8987 0.10115H1.89831C0.793353 0.10115 -0.101807 0.995989 -0.101807 2.10095V20.1014C-0.101807 21.2063 0.793353 22.1015 1.89831 22.1015H19.8987C21.0037 22.1015 21.8988 21.2063 21.8988 20.1014L21.8985 2.10095C21.8985 0.995989 21.0037 0.10083 19.8984 0.10083L19.8987 0.10115ZM7.14933 5.26327H13.2149C14.9438 5.26327 16.3584 6.67716 16.3584 8.40608V9.26702C16.3584 11.0948 14.8629 12.5902 13.0349 12.5902H9.0212V13.7914H10.342V15.2527H9.0212V17.1245H7.14933V15.2527H5.8704V13.7914H7.14933V12.5902V12.5701H5.87296V11.1088H7.14933V10.9585V5.26327ZM9.03048 6.67908H12.6437C13.6732 6.67908 14.5159 7.52115 14.5159 8.55127V9.06394C14.5159 10.1526 13.6252 11.0436 12.5363 11.0436H9.03048V6.67908Z" />
                                </svg>
                            </div>
                            <div className="list-name">Платежи</div>
                            <div className="font-block-hover">Платежи</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/shipment" className="nav-link">
                        <li className="font">
                            {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
                                    <path d="M19.7804 1.07157C19.6339 0.925142 19.4599 0.851685 19.2596 0.851685H7.40754C7.20695 0.851685 7.03324 0.925142 6.88673 1.07157C6.74018 1.2182 6.66684 1.39191 6.66684 1.5925V3.81478H4.81489C4.60652 3.81478 4.38071 3.86493 4.13768 3.96522C3.89461 4.06568 3.69982 4.18892 3.55327 4.33555L1.2615 6.62727C1.16125 6.72757 1.07453 6.84322 1.00108 6.97449C0.927822 7.10543 0.873783 7.2234 0.839041 7.32738C0.80438 7.43165 0.779164 7.57423 0.763881 7.75572C0.748557 7.93714 0.738747 8.07023 0.734896 8.15516C0.731207 8.23996 0.731207 8.38663 0.734896 8.59501C0.738787 8.80346 0.740733 8.93837 0.740733 9.0002V12.7039C0.540186 12.7039 0.366596 12.7771 0.219925 12.9239C0.0733355 13.0702 0 13.244 0 13.4446C0 13.5602 0.0153238 13.6626 0.0462147 13.7512C0.0771462 13.84 0.129158 13.9113 0.202615 13.9654C0.27587 14.0195 0.339557 14.0638 0.393515 14.0986C0.447634 14.1332 0.53828 14.1563 0.665573 14.1679C0.792867 14.1796 0.879621 14.1874 0.925957 14.1912C0.972293 14.1949 1.0706 14.1949 1.22104 14.1912C1.37165 14.1874 1.4584 14.1854 1.48159 14.1854H2.22228C2.22228 15.0031 2.51169 15.7015 3.09027 16.2802C3.66905 16.8589 4.36729 17.1483 5.18525 17.1483C6.00313 17.1483 6.70146 16.8589 7.28012 16.2802C7.8589 15.7015 8.14811 15.0031 8.14811 14.1854H12.5927C12.5927 15.0031 12.8821 15.7015 13.4607 16.2802C14.0393 16.8589 14.7376 17.1483 15.5556 17.1483C16.3737 17.1483 17.0716 16.8589 17.6505 16.2802C18.2292 15.7015 18.5185 15.0031 18.5185 14.1854C18.5415 14.1854 18.6284 14.1874 18.7788 14.1912C18.9293 14.1949 19.0277 14.1949 19.074 14.1912C19.1203 14.1874 19.2073 14.1796 19.3345 14.1679C19.4618 14.1563 19.5523 14.1333 19.6064 14.0986C19.6606 14.0639 19.7241 14.0195 19.7973 13.9654C19.8707 13.9113 19.9229 13.84 19.9537 13.7512C19.9849 13.6625 20 13.5602 20 13.4446V1.59262C20.0002 1.39199 19.9269 1.21848 19.7804 1.07157ZM6.22671 15.2271C5.93365 15.5202 5.58631 15.6671 5.18509 15.6671C4.78383 15.6671 4.43658 15.5203 4.14335 15.2271C3.85013 14.934 3.70359 14.5867 3.70359 14.1855C3.70359 13.7843 3.8503 13.4367 4.14335 13.1436C4.43653 12.8506 4.78379 12.7038 5.18509 12.7038C5.58631 12.7038 5.93361 12.8505 6.22671 13.1436C6.52005 13.4367 6.66668 13.7843 6.66668 14.1855C6.66668 14.5867 6.52005 14.934 6.22671 15.2271ZM6.66668 8.2593H2.22212V7.9122C2.22212 7.81187 2.25678 7.72698 2.32622 7.6575L4.58321 5.40059C4.65261 5.33111 4.73762 5.29649 4.83791 5.29649H6.66668V8.2593ZM16.5972 15.2271C16.3041 15.5202 15.9568 15.6671 15.5556 15.6671C15.1543 15.6671 14.8068 15.5203 14.5137 15.2271C14.2206 14.934 14.0739 14.5867 14.0739 14.1855C14.0739 13.7843 14.2206 13.4367 14.5137 13.1436C14.8068 12.8506 15.1543 12.7038 15.5556 12.7038C15.9568 12.7038 16.3041 12.8505 16.5972 13.1436C16.8903 13.4369 17.0371 13.7843 17.0371 14.1855C17.0371 14.5867 16.8906 14.934 16.5972 15.2271Z" />
                                </svg>
                            </div>
                            <div className="list-name">Отгрузки</div>
                            <div className="font-block-hover">Отгрузки</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/account" className="nav-link">
                        <li className="font">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                    <path d="M11 0C7.68786 0 5.00166 2.5696 5.00166 5.7387V6.6957C5.00166 9.8659 7.68786 12.4344 11.0022 12.4344C14.3165 12.4344 17.0027 9.8659 17.0027 6.6957V5.7387C17.0016 2.5696 14.3154 0 11 0ZM11 15.3043C6.99266 15.3043 1.85236 17.3767 0.373961 19.2159C-0.540139 20.3533 0.329961 22 1.82816 22H20.1718C21.67 22 22.5401 20.3533 21.626 19.217C20.1476 17.3778 15.0051 15.3043 11 15.3043Z" />
                                </svg>
                            </div>
                            <div className="list-name">Профиль</div>
                            <div className="font-block-hover">Профиль</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/settings" className="nav-link">
                        <li className="font">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                    <path d="M21.4824 8.49506L19.7915 8.12747C19.6444 7.67731 19.4623 7.23822 19.2473 6.81525L20.1834 5.35918C20.3506 5.09901 20.3138 4.75745 20.0953 4.53891L17.4611 1.90472C17.2426 1.68619 16.901 1.64943 16.6408 1.8166L15.1848 2.75269C14.7618 2.53767 14.3227 2.35556 13.8725 2.20853L13.5049 0.517639C13.4393 0.215515 13.1718 0 12.8626 0H9.13741C8.82823 0 8.56068 0.215515 8.49506 0.517639L8.12747 2.20853C7.67731 2.35556 7.23822 2.53767 6.81525 2.75269L5.35918 1.8166C5.09901 1.64943 4.75745 1.68619 4.53891 1.90472L1.90472 4.53891C1.68619 4.75745 1.64943 5.09901 1.8166 5.35918L2.75269 6.81525C2.53767 7.23822 2.35556 7.67731 2.20853 8.12747L0.517639 8.49506C0.215515 8.56085 0 8.82823 0 9.13741V12.8626C0 13.1718 0.215515 13.4391 0.517639 13.5049L2.20853 13.8725C2.35556 14.3227 2.53767 14.7618 2.75269 15.1848L1.8166 16.6408C1.64943 16.901 1.68619 17.2426 1.90472 17.4611L4.53891 20.0953C4.75745 20.3138 5.09901 20.3506 5.35918 20.1834L6.81525 19.2473C7.23822 19.4623 7.67731 19.6444 8.12747 19.7915L8.49506 21.4824C8.56068 21.7845 8.82823 22 9.13741 22H12.8626C13.1718 22 13.4393 21.7845 13.5049 21.4824L13.8725 19.7915C14.3227 19.6444 14.7618 19.4623 15.1848 19.2473L16.6408 20.1834C16.901 20.3506 17.2426 20.314 17.4611 20.0953L20.0953 17.4611C20.3138 17.2426 20.3506 16.901 20.1834 16.6408L19.2473 15.1848C19.4623 14.7618 19.6444 14.3227 19.7915 13.8725L21.4824 13.5049C21.7845 13.4391 22 13.1718 22 12.8626V9.13741C22 8.82823 21.7845 8.56085 21.4824 8.49506ZM14.9442 11C14.9442 13.1748 13.1748 14.9442 11 14.9442C8.82521 14.9442 7.05577 13.1748 7.05577 11C7.05577 8.82521 8.82521 7.05577 11 7.05577C13.1748 7.05577 14.9442 8.82521 14.9442 11Z" />
                                </svg>
                            </div>
                            <div className="list-name">Настройки</div>
                            <div className="font-block-hover">Настройки</div>
                        </li>
                    </NavLink>
                    <div className="nav-link">
                        <div className="font" onClick={this.handleClickMainSubmenu}>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                    <path
                                        className="cls-1"
                                        d="M21.08,17.7H18.64a3.15,3.15,0,0,0-6.12,0H.92a1,1,0,0,0,0,1.91H12.52a3.15,3.15,0,0,0,6.12,0h2.44a1,1,0,0,0,0-1.91Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M21.08,2.39H18.64a3.15,3.15,0,0,0-6.12,0H.92a.94.94,0,0,0-.92,1,.94.94,0,0,0,.92,1H12.52a3.15,3.15,0,0,0,6.12,0h2.44a.94.94,0,0,0,.92-1A.94.94,0,0,0,21.08,2.39Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M21.08,10H9.48A3.22,3.22,0,0,0,6.42,7.65,3.22,3.22,0,0,0,3.36,10H.92A1,1,0,0,0,.92,12H3.36a3.23,3.23,0,0,0,3.06,2.39A3.22,3.22,0,0,0,9.48,12H21.08a1,1,0,0,0,0-1.91Z"
                                    />
                                </svg>
                            </div>
                            <div className="list-name">
                                Управление
                                <div className="list-name__icon" />
                            </div>
                            <div className="font-block-hover">Управление</div>
                        </div>
                        <div className="submenu">
                            <NavLink exact activeClassName="active-page" to="/control" className="sub-link">
                                <li className="subparagraph">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 14.44">
                                            <path
                                                className="cls-1"
                                                d="M15,6.19a3,3,0,0,0,3-3.09,3,3,0,1,0-6,0A3,3,0,0,0,15,6.19Zm-8,0a3,3,0,0,0,3-3.09A3,3,0,0,0,7,0,3,3,0,0,0,4,3.09,3,3,0,0,0,7,6.19ZM7,8.25c-2.33,0-7,1.21-7,3.61v2.58H14V11.86C14,9.46,9.33,8.25,7,8.25Zm8,0c-.29,0-.62,0-1,.05a4.38,4.38,0,0,1,2,3.56v2.58h6V11.86C22,9.46,17.33,8.25,15,8.25Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="list-name">
                                        Пользователи
                                        <div className="list-name__icon" />
                                    </div>
                                    <div className="font-block-hover">Главная</div>
                                </li>
                            </NavLink>
                            <NavLink exact activeClassName="active-page" to="/notification" className="sub-link">
                                <li className="subparagraph">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.21 22">
                                            <path
                                                className="cls-1"
                                                d="M4.62,4.25a7,7,0,0,0-2.06,5V11.7a10.47,10.47,0,0,1-.82,4.05H17.46a10.49,10.49,0,0,1-.82-4.05V9.22a7,7,0,0,0-5.4-6.84A1.76,1.76,0,1,0,8,2.39,7,7,0,0,0,4.62,4.25ZM.26,17.31a.88.88,0,0,0,.63,1.5H7.64a2.2,2.2,0,1,0,3.92,0h6.75a.88.88,0,1,0,0-1.76H.89a.88.88,0,0,0-.63.26Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="list-name">
                                        Уведомления
                                        <div className="list-name__icon" />
                                    </div>
                                    <div className="font-block-hover">Главная</div>
                                </li>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink exact activeClassName="active-page" to="/configurator" className="nav-link">
                        <li className="font">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                    <path
                                        className="cls-1"
                                        d="M5,12.36H17a4.94,4.94,0,0,1,5,4.82A4.94,4.94,0,0,1,17,22H5a4.94,4.94,0,0,1-5-4.82A4.94,4.94,0,0,1,5,12.36ZM17,20.68a3.51,3.51,0,1,0,0-7H5a3.51,3.51,0,1,0,0,7Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M17.18,15A2.16,2.16,0,1,1,15,17.18,2.16,2.16,0,0,1,17.18,15Zm0,3a.86.86,0,1,0-.86-.86A.86.86,0,0,0,17.18,18Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M17,9.64H5A4.94,4.94,0,0,1,0,4.82,4.94,4.94,0,0,1,5,0H17a4.94,4.94,0,0,1,5,4.82A4.94,4.94,0,0,1,17,9.64ZM5,1.32A3.59,3.59,0,0,0,1.38,4.82,3.59,3.59,0,0,0,5,8.33H17a3.59,3.59,0,0,0,3.67-3.51A3.59,3.59,0,0,0,17,1.32Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M4.82,7A2.16,2.16,0,1,1,7,4.82,2.16,2.16,0,0,1,4.82,7Zm0-3a.86.86,0,1,0,.86.86A.86.86,0,0,0,4.82,4Z"
                                    />
                                </svg>
                            </div>
                            <div className="list-name">Конфигуратор</div>
                            <div className="font-block-hover">Конфигуратор</div>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state: PersonalCabinet) => ({
    sidenav: state.sidenav
});

// @ts-ignore
export default withRouter(connect(mapStateToProps, null)(withRouter(SideNav)));
