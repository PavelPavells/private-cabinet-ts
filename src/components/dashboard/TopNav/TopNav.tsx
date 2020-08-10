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
        // const { name } = this.props.auth.user; // {/*company_inn*/}
        // const partnerStatus = localStorage.getItem('partnerStatus');
        const agentName = localStorage.getItem('agentName');
        return (
            <nav className="nav">
                {/* ref={node => (this.node = node)} */}
                <div className="nav__left nav-left">
                    <i onClick={this.toggleMenu} className="material-icons nav-left__hamburger">
                        menu
                    </i>
                    <div className="nav-left__logo" />
                </div>
                <div className="nav__right nav-right">
                    <div className="nav-right__text right-text">
                        Личный кабинет:
                        <strong className="right-text__name">{agentName}</strong>
                    </div>
                    <div className="nav-right__info right-info">
                        <div className="right-info__bell bell">
                            <div className="bell__icon notifications">
                                <div className="notifications__number">1</div>
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
    topnav: state.topnav
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
