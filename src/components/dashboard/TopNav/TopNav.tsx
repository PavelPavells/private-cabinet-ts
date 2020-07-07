/**
 * ********** Импорт зависимостей **********
 */
import React, { SyntheticEvent } from "react";
import { connect, MapStateToProps } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { PersonalCabinet } from "../../../store/store";

/**
 * ********** Импорт экшенов **********
 */
import { logoutUser } from "../../../actions/authActions";

/**
 * ********** Импорт стилей **********
 */
import "./TopNav.scss";

/**
 * ********** Интерфейс пропсов компонента Login **********
 */
interface TopNavProps {
  node: any,
  logoutUser: () => void,
  sideNav: Element | null
}

/**
 * ********** Интерфейс локального стейта компонента Login **********
 */
interface TopNavState {
  dropdown: Boolean,
  openContactUs: Boolean
}

class TopNav extends React.PureComponent<TopNavProps, TopNavState> {
  
  state: TopNavState = {
    dropdown: false,
    openContactUs: false
  };

  // public componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClick, false);
  // };

  // public componentWillUnmount() {
  //   document.removeEventListener("mousedown", this.handleClick, false);
  // }

  private onLogoutClick = (event: SyntheticEvent) => {
    event.preventDefault();
    window.location.href = "/";
    //this.props.logoutUser();
  };
  private handleProfileClick = (event: SyntheticEvent) => {
    this.setState({ dropdown: !this.state.dropdown });
    //@ts-ignore
    //if (this.state.dropdown && !this.node.contains(event.target)) {
    // this.setState({ dropdown: !this.state.dropdown });
    //}
  };

  private handleContactClick = () => {
    this.setState({ openContactUs: !this.state.openContactUs });
  };

  // Show Side Nav
  private toggleMenu = () => {
    let sideNav: Element | any = document.querySelector(".right");
    sideNav.classList.toggle("invisible");
  };
  
  public render() {
    //const { name } = this.props.auth.user; // {/*company_inn*/}
    let partnerStatus = localStorage.getItem("partnerStatus");
    let contragentName = localStorage.getItem("contragentName");
    return (
      <nav className="nav">
        {/* ref={node => (this.node = node)} */}
        <div className="nav__left nav-left">
          <i
            onClick={this.toggleMenu}
            className="material-icons nav-left__hamburger"
          >
            menu
          </i>
          <div className="nav-left__logo"></div>
        </div>
        <ul className="nav__right nav-right">
          <div className="nav-right__info">
            Личный кабинет: <strong>{contragentName}</strong>
          </div>
          <div className="top-right__block">
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
            <div className="profile" onClick={this.handleProfileClick}></div>
            {this.state.dropdown ? (
              <ul className="dropdown">
                <p>Здравствуйте</p>
                <Link to="/dashboard">
                  <li>Главная</li>
                </Link>
                <Link to="/account">
                  <li>Настройки</li>
                </Link>
                <li
                  //@ts-ignore
                  onClick={this.handleContactClick}
                >
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

const mapStateToProps = (state: PersonalCabinet) => ({
  topnav: state.topnav
});

export default connect<{}, {}, TopNavProps>(
  //@ts-ignore
  mapStateToProps,
  {
    logoutUser
  }
)(TopNav);

// export default connect<{}, {}, TopNavProps>(
//   //@ts-ignore
//   mapStateToProps,
//   {
//     logoutUser
//   }
//   //@ts-ignore
// )(withRouter(TopNav));