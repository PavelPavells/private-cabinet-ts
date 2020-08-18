/**
 * ********** Импорт зависимостей **********
 */
import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { PersonalCabinet } from '../../../store/store';

import Profile from './Profile/Profile';

/**
 * ********** Импорт экшенов **********
 */
import { logoutUser } from '../../../actions/authActions';

/**
 * ********** Импорт стилей **********
 */
import './TopNav.scss';

/**
 * ********** Интерфейс пропсов компонента Login **********
 */
interface TopNavProps {
    node: any;
    logoutUser: () => void;
    sideNav: Element | null;
}

class TopNav extends React.PureComponent<TopNavProps> {
    // public componentDidMount() {
    //   document.addEventListener("mousedown", this.handleClick, false);
    // };

    // public componentWillUnmount() {
    //   document.removeEventListener("mousedown", this.handleClick, false);
    // }

    // private handleContactClick = () => {
    //  this.setState({ openContactUs: !this.state.openContactUs });
    // };

    // Show Side Nav
    private toggleMenu = () => {
        const sideNav: Element | any = document.querySelector('.right');
        sideNav.classList.toggle('invisible');
    };

    public render() {
        return (
            <nav className="nav">
                {/* ref={node => (this.node = node)} */}
                <div className="nav__left">
                    <i onClick={this.toggleMenu} className="material-icons left__hamburger">
                        menu
                    </i>
                    <div className="left__logo" />
                </div>
                <div className="nav__right">
                    <div className="right__text">
                        Личный кабинет:
                        <strong className="text__name">Стиперенко Ю. А. ИП</strong>
                    </div>
                    <div className="right__info">
                        <div className="info__bell">
                            <div className="bell__icon notifications">
                                <div className="notifications__number">5</div>
                            </div>
                        </div>
                        <Profile />
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: PersonalCabinet) => ({
    topnav: state.topnav,
    auth: state.auth
});

export default connect<{}, {}, TopNavProps>(
    // @ts-ignore
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
