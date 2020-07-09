/** ********** IMPORT LIBRARIES ********** */
import React from "react";
import PropTypes from 'prop-types';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

/** ********** IMPORT STYLES ********** */
import "./SideNav.scss";

class SideNav extends React.PureComponent {
  // @ts-ignore
  onLogoutClick = e => {
    //this.props.logoutUser(this.props.history);
    window.location.href = "/";
  };
  render() {
    return (
      <nav className="side">
        <ul className="side__top">
          <NavLink exact activeClassName="active-page" to="/dashboard">
            <li className="font">
              <i className="side-logo__main icon"></i>
              <div className="list-name">Главная<div className="list-name__icon"></div></div>
              <div className="font-block-hover">Главная</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/price-list">
            <li className="font">
              <i className="side-logo__price-list icon"></i>
              <div className="list-name">Прайс-лист продукции CARDDEX</div>
              <div className="font-block-hover">Прайс-лист продукции CARDDEX</div>
            </li>
          </NavLink>
          {/*<NavLink exact activeClassName="active-page" to="/sales">
            <li className="font">               {/** Изменить на subparagraph чтобы вернуть подпараграфы 
              <i className="side-logo__sales icon"></i>
              <div className="list-name">Заказы</div>
              <div className="font-block-hover">Заказы</div>
            </li>
          </NavLink>*/}
          <NavLink exact activeClassName="active-page" to="/payment">
            <li className="font">               {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
              <i className="side-logo__main-payment icon"></i>
              <div className="list-name">Платежи</div>
              <div className="font-block-hover">Платежи</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/shipment">
            <li className="font">                {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
              <i className="side-logo__main-shipment-story icon"></i>
              <div className="list-name">Отгрузки</div>
              <div className="font-block-hover">Отгрузки</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/account">
            <li className="font">
              <i className="side-logo__main-account icon"></i>
              <div className="list-name">Профиль</div>
              <div className="font-block-hover">Профиль</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li className="font">
              <i className="side-logo__main-settings icon"></i>
              <div className="list-name">Настройки</div>
              <div className="font-block-hover">Настройки</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li className="font">
              <i className="side-logo__main-administration icon"></i>
              <div className="list-name">Управление<div className="list-name__icon"></div></div>
              <div className="font-block-hover">Управление</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li className="font">
              <i className="side-logo__configurator icon"></i>
              <span className="list-name">Конфигуратор</span>
              <div className="font-block-hover">Конфигуратор</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

// @ts-ignore
const mapStateToProps = state => ({
  projects: state.projects
});

export default withRouter(
  connect(
    mapStateToProps, 
    null                           //{ logoutUser }
    // @ts-ignore
  )(withRouter(SideNav))
);