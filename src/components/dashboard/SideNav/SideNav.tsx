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

  /** handler обработки клика по блоку Главная */
  private handleClickMain = () => {
    let element = document.getElementsByClassName("font")[0];
    console.log(element);
  }

  /** handler обработки клика по блоку Прайс-лист */
  private handleClickPrice = () => {
    let element = document.getElementsByClassName("font")[1];
    console.log(element);
  }

  /** handler обработки клика по блоку Заказы */
  private handleClickSales = () => {
    let element = document.getElementsByClassName("font")[2];
    console.log(element);
  }

  /** handler обработки клика по блоку Платежи */
  private handleClickPayment = () => {
    let element = document.getElementsByClassName("font")[3];
    console.log(element);
  }

  /** handler обработки клика по блоку Отгрузки */
  private handleClickShipment = () => {
    let element = document.getElementsByClassName("font")[4];
    console.log(element);
  }

  /** handler обработки клика по блоку Профиль */
  private handleClickAccount = () => {
    let element = document.getElementsByClassName("font")[5];
    console.log(element);
  }

  /** handler обработки клика по блоку Настройки */
  private handleClickSettings = () => {
    let element = document.getElementsByClassName("font")[6];
    console.log(element);
  }

  /** handler обработки клика по блоку Управление */
  private handleClickAdministration = () => {
    let element = document.getElementsByClassName("font")[7];
    console.log(element);
  }
  
  /** handler обработки клика по блоку Конфигуратор */
  private handleClickConfigurator = () => {
    let element = document.getElementsByClassName("font")[8];
    console.log(element);
  }

  render() {
    return (
      <nav className="side">
        <ul className="side__top">
          <NavLink exact activeClassName="active-page" to="/dashboard">
            <li onClick={this.handleClickMain} className="font">
              <i className="side-logo__main icon"></i>
              <div className="list-name">Главная<div className="list-name__icon"></div></div>
              <div className="font-block-hover">Главная</div>
            </li>
          </NavLink>
          {/*<NavLink exact activeClassName="active-page" to="/dashboard">
            <li onClick={this.handleClickMain} className="subparagraph">
              <i className="side-logo__main icon"></i>
              <div className="list-name">Главная<div className="list-name__icon"></div></div>
              <div className="font-block-hover">Главная</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/dashboard">
            <li onClick={this.handleClickMain} className="subparagraph">
              <i className="side-logo__main icon"></i>
              <div className="list-name">Главная<div className="list-name__icon"></div></div>
              <div className="font-block-hover">Главная</div>
            </li>
          </NavLink>*/}
          <NavLink exact activeClassName="active-page" to="/price-list">
            <li onClick={this.handleClickPrice} className="font">
              <i className="side-logo__price icon"></i>
              <div className="list-name">Прайс-лист продукции CARDDEX</div>
              <div className="font-block-hover">Прайс-лист продукции CARDDEX</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/sales">
            <li onClick={this.handleClickSales} className="font">               {/** Изменить на subparagraph чтобы вернуть подпараграфы**/}
              <i className="side-logo__sales icon"></i>
              <div className="list-name">Заказы</div>
              <div className="font-block-hover">Заказы</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/payment">
            <li onClick={this.handleClickPayment} className="font">               {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
              <i className="side-logo__payment icon"></i>
              <div className="list-name">Платежи</div>
              <div className="font-block-hover">Платежи</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/shipment">
            <li onClick={this.handleClickShipment} className="font">                {/** Изменить на subparagraph чтобы вернуть подпараграфы */}
              <i className="side-logo__shipment icon"></i>
              <div className="list-name">Отгрузки</div>
              <div className="font-block-hover">Отгрузки</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/account">
            <li onClick={this.handleClickAccount} className="font">
              <i className="side-logo__account icon"></i>
              <div className="list-name">Профиль</div>
              <div className="font-block-hover">Профиль</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li onClick={this.handleClickSettings} className="font">
              <i className="side-logo__settings icon"></i>
              <div className="list-name">Настройки</div>
              <div className="font-block-hover">Настройки</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li onClick={this.handleClickAdministration} className="font">
              <i className="side-logo__administration icon"></i>
              <div className="list-name">Управление<div className="list-name__icon"></div></div>
              <div className="font-block-hover">Управление</div>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li onClick={this.handleClickConfigurator} className="font">
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