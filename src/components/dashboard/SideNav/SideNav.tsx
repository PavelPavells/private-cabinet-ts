/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

/** ********** IMPORT STYLES ********** */
import "./SideNav.scss";

class SideNav extends Component {
  // @ts-ignore
  onLogoutClick = e => {
    //this.props.logoutUser(this.props.history);
    window.location.href = "/";
  };
  render() {
    return (
      <nav className="side">
        <ul className="top">
          <NavLink exact activeClassName="active-page" to="/dashboard">
            <li className="font">
              <i className="side-logo__main icon"></i>
              <span className="list-name">Главная</span>
              <div className="font-block-hover">Главная</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/sales">
            <li className="subparagraph">
              <i className="side-logo__sales icon"></i>
              <span className="list-name">История скидок</span>
              <div className="font-block-hover">История скидок</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/payment">
            <li className="subparagraph">
              <i className="side-logo__main-payment icon"></i>
              <span className="list-name">История платежей</span>
              <div className="font-block-hover">История платежей</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/shipment">
            <li className="subparagraph">
              <i className="side-logo__main-shipment-story icon"></i>
              <span className="list-name">История отгрузок</span>
              <div className="font-block-hover">История отгрузок</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/price-list">
            <li className="subparagraph">
              <i className="side-logo__price-list icon"></i>
              <span className="list-name">Прайс-лист</span>
              <div className="font-block-hover">Прайс-лист</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/news">
            <li className="font">
              <i className="side-logo__news icon"></i>
              <span className="list-name">Новости</span>
              <div className="font-block-hover">Новости</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/news">
            <li className="subparagraph">
              <i className="side-logo__main-archive icon"></i>
              <span className="list-name">Архив новостей</span>
              <div className="font-block-hover">Архив новостей</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li className="font">
              <i className="side-logo__main-administration icon"></i>
              <span className="list-name">Администрирование</span>
              <div className="font-block-hover">Администрирование</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li className="subparagraph">
              <i className="side-logo__main-users icon"></i>
              <span className="list-name">Пользователи</span>
              <div className="font-block-hover">Пользователи</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/app">
            <li className="subparagraph">
              <i className="side-logo__main-app icon"></i>
              <span className="list-name">WEB-приложения</span>
              <div className="font-block-hover">WEB-приложения</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/account">
            <li className="font">
              <i className="side-logo__main-account icon"></i>
              <span className="list-name">Учетная запись</span>
              <div className="font-block-hover">Учетная запись</div>
            </li>
          </NavLink>
        </ul>
        <h5 className="side-footer__copy">Copyright 2019 &copy; CARDDEX</h5>
      </nav>
    );
  }
}
// @ts-ignore
SideNav.propTypes = {
  security: PropTypes.object
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