/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

/** ********** IMPORT ACTIONS ********** */
//import { logout } from "../../../actions/securityActions";

/** ********** IMPORT STYLES ********** */
import "./TopNav.scss";

class TopNav extends Component {
  //constructor(props) {
    //super(props);
    state = {
      dropdown: false,
      openContactUs: false
    };
  //}
  componentDidMount() {
    // @ts-ignore
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    // @ts-ignore
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  // @ts-ignore
  onLogoutClick = e => {
    e.preventDefault();
    window.location.href = "/";
    // @ts-ignore
    this.props.logoutUser();
  };
  // @ts-ignore
  handleProfileClick = event => {
    this.setState({ dropdown: !this.state.dropdown });
    //if (this.state.dropdown && !this.node.contains(event.target)) {
    //  this.setState({ dropdown: !this.state.dropdown });
    //}
  };
  // @ts-ignore
  handleContactClick = event => {
    event.preventDefault();
    this.setState({ openContactUs: !this.state.openContactUs });
    //if (this.state.dropdown && !this.node.contains(event.target)) {
    //  this.setState({ openContactUs: !this.state.openContactUs });
    //}
  };
  // Show Side Nav
  // @ts-ignore
  toggleMenu = e => {
    e.preventDefault();
    let sideNav = document.querySelector(".right");
    // @ts-ignore
    sideNav.classList.toggle("invisible");
  };
  render() {
    //const { name } = this.props.auth.user; // {/*company_inn*/}
    let partnerStatus = localStorage.getItem("partnerStatus");
    let contragentName = localStorage.getItem("contragentName");
    return (
      <nav className="top-nav">
        {/* ref={node => (this.node = node)} */}
        <div className="left-top">
          <i
            onClick={this.toggleMenu}
            className="material-icons hamburger-top-menu"
          >
            menu
          </i>
          <div className="side-logo__carddex"></div>
        </div>
        <ul className="right-top">
          <div className="top-nav__info">
            Личный кабинет: <strong>{contragentName}</strong>
          </div>
          <div className="top-right__block">
          <li className="notification-header">
            <div></div>
          </li>
          <li className="email-header">
            <div></div>
          </li>
          <li className="right-top__list">
            <div className="email">
              <p>
                Вы вошли как <strong>{partnerStatus}</strong>
              </p>
            </div>
            <div className="role">
              <p>Администратор</p>
            </div>
          </li>
          <li>
            <div className="profile" onClick={this.handleProfileClick}>
              {/*<span>{name !== undefined && name.split("")[0]}</span>*/}
            </div>
            {this.state.dropdown ? (
              <ul className="dropdown">
                <p>Здравствуйте</p>
                <Link to="/dashboard">
                  <li>Главная</li>
                </Link>
                <Link to="/account">
                  <li>Настройки</li>
                </Link>
                <li onClick={this.handleContactClick}>
                  Связаться с нами
                  {this.state.openContactUs ? (
                    <div className="contact-us">
                      <h3>Связаться с нами:</h3>
                      <div className="contact-us__phone">
                        Телефон: <span>8(800)333-93-36</span>
                      </div>
                      <div className="contact-us__email">
                        E-mail: <span>sales@carddex.ru</span>
                      </div>
                    </div>
                  ) : null}
                </li>
                {/*
                <Link to="/tasks">
                  <li>My Tasks</li>
                </Link>
                */}
                <li onClick={this.onLogoutClick}>Выйти</li>
              </ul>
            ) : null}
          </li>
          </div>
        </ul>
      </nav>
    );
  }
}
// @ts-ignore
TopNav.propTypes = {
  topnav: PropTypes.object,
  security: PropTypes.object
}
// @ts-ignore
const mapStateToProps = state => ({
  topnav: state.topnav
});
export default connect(
  mapStateToProps,
  null//{ logout }
  // @ts-ignore
)(withRouter(TopNav));