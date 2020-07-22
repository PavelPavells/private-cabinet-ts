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

/**
 * ********** Интерфейс пропсов компонента Main **********
 */
interface SideNavState {
    mainSubMenu: boolean;
    controlSubMenu: boolean;
}

class SideNav extends React.PureComponent<SideNavProps, SideNavState> {
    // eslint-disable-next-line react/state-in-constructor
    state: SideNavState = {
        mainSubMenu: false,
        controlSubMenu: false
    };

    // @ts-ignore
    onLogoutClick = () => {
        // this.props.logoutUser(this.props.history);
        window.location.href = '/';
    };

    /** handler обработки клика по блоку Главная */
    private handleClickMain = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Прайс-лист */
    private handleClickPrice = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Заказы */
    private handleClickSales = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Платежи */
    private handleClickPayment = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Отгрузки */
    private handleClickShipment = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Профиль */
    private handleClickAccount = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Настройки */
    private handleClickSettings = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Управление */
    private handleClickAdministration = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /** handler обработки клика по блоку Конфигуратор */
    private handleClickConfigurator = () => {
        // const element = document.getElementsByClassName('font')[0];
    };

    /**
     * ********** handler обработки клика для раскрытия подменю Главная **********
     */
    private handleClickMainSubmenu = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        const { mainSubMenu } = this.state;
        const mainSubMenuElem: Element = document.getElementsByClassName('list-name__icon')[0];
        mainSubMenuElem.classList.toggle('turn');
        this.setState({ mainSubMenu: !mainSubMenu });
    };

    /**
     * ********** handler обработки клика для раскрытия подменю Управление **********
     */
    private handleClickControlSubmenu = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        const { controlSubMenu } = this.state;
        const controlSubMenuElem: Element = document.getElementsByClassName('list-name__icon')[1];
        controlSubMenuElem.classList.toggle('turn');
        this.setState({ controlSubMenu: !controlSubMenu });
    };

    public render() {
        const { mainSubMenu, controlSubMenu } = this.state;

        return (
            <nav className="side">
                <ul className="side__top">
                    <NavLink exact activeClassName="active-page" to="/dashboard">
                        <li onClick={this.handleClickMain} className="font">
                            <i className="side-logo__main icon" />
                            <div className="list-name">
                                <div>Главная</div>
                                <div className="list-name__icon" onClick={this.handleClickMainSubmenu} />
                            </div>
                            <div className="font-block-hover">Главная</div>
                        </li>
                    </NavLink>
                    {mainSubMenu ? (
                        <div>
                            <NavLink exact activeClassName="active-page" to="/dashboard">
                                <li onClick={this.handleClickMain} className="subparagraph">
                                    <i className="side-logo__about icon" />
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
                            <NavLink exact activeClassName="active-page" to="/dashboard">
                                <li onClick={this.handleClickMain} className="subparagraph">
                                    <i className="side-logo__admin icon" />
                                    <div className="list-name">
                                        Административная панель
                                        <div className="list-name__icon" />
                                    </div>
                                    <div className="font-block-hover" />
                                </li>
                            </NavLink>
                        </div>
                    ) : null}
                    <NavLink exact activeClassName="active-page" to="/price-list">
                        <li onClick={this.handleClickPrice} className="font">
                            <i className="side-logo__price icon" />
                            <div className="list-name">Прайс-лист продукции CARDDEX</div>
                            <div className="font-block-hover">Прайс-лист продукции CARDDEX</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/sales">
                        <li onClick={this.handleClickSales} className="font">
                            {/** Изменить на subparagraph чтобы вернуть подпараграфы* */}
                            <i className="side-logo__sales icon" />
                            <div className="list-name">Заказы</div>
                            <div className="font-block-hover">Заказы</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/payment">
                        <li onClick={this.handleClickPayment} className="font">
                            {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
                            <i className="side-logo__payment icon" />
                            <div className="list-name">Платежи</div>
                            <div className="font-block-hover">Платежи</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/shipment">
                        <li onClick={this.handleClickShipment} className="font">
                            {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
                            <i className="side-logo__shipment icon" />
                            <div className="list-name">Отгрузки</div>
                            <div className="font-block-hover">Отгрузки</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/account">
                        <li onClick={this.handleClickAccount} className="font">
                            <i className="side-logo__account icon" />
                            <div className="list-name">Профиль</div>
                            <div className="font-block-hover">Профиль</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/control">
                        <li onClick={this.handleClickSettings} className="font">
                            <i className="side-logo__settings icon" />
                            <div className="list-name">Настройки</div>
                            <div className="font-block-hover">Настройки</div>
                        </li>
                    </NavLink>
                    <NavLink exact activeClassName="active-page" to="/control">
                        <li onClick={this.handleClickAdministration} className="font">
                            <i className="side-logo__administration icon" />
                            <div className="list-name">
                                Управление
                                <div className="list-name__icon" onClick={this.handleClickControlSubmenu} />
                            </div>
                            <div className="font-block-hover">Управление</div>
                        </li>
                    </NavLink>
                    {controlSubMenu ? (
                        <div>
                            <NavLink exact activeClassName="active-page" to="/dashboard">
                                <li onClick={this.handleClickMain} className="subparagraph">
                                    <i className="side-logo__users icon" />
                                    <div className="list-name">
                                        Пользователи
                                        <div className="list-name__icon" />
                                    </div>
                                    <div className="font-block-hover">Главная</div>
                                </li>
                            </NavLink>
                            <NavLink exact activeClassName="active-page" to="/dashboard">
                                <li onClick={this.handleClickMain} className="subparagraph">
                                    <i className="side-logo__alert icon" />
                                    <div className="list-name">
                                        Уведомления
                                        <div className="list-name__icon" />
                                    </div>
                                    <div className="font-block-hover">Главная</div>
                                </li>
                            </NavLink>
                        </div>
                    ) : null}
                    <NavLink exact activeClassName="active-page" to="/control">
                        <li onClick={this.handleClickConfigurator} className="font">
                            <i className="side-logo__configurator icon" />
                            <span className="list-name">Конфигуратор</span>
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
