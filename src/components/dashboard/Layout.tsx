/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Draggable from 'react-draggable';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../store/store';

/**
 * ********** Импорт основных основных компонентов **********
 * */
import Chat from './MainContent/Chat/Chat';
import SideNav from './SideNav/SideNav';
import TopNav from './TopNav/TopNav';
import Main from './MainContent/Main/Main';
import MediaFiles from './MainContent/MediaFiles/MediaFiles';
import News from './MainContent/News/News';
import Account from './MainContent/Profile/Profile';
import RolesUsers from './MainContent/RolesUsers/RolesUsers';
// import AddRoles from './MainContent/RolesUsers/Roles/AddRoles/AddRoles';
// import EditRoles from './MainContent/RolesUsers/Roles/EditRoles/EditRoles';
// import AddUsers from './MainContent/RolesUsers/Users/AddUsers/AddUsers';
// import EditUsers from './MainContent/RolesUsers/Users/EditUsers/EditUsers';
import AdminPanel from './MainContent/AdminPanel/AdminPanel';
import SalePartners from './MainContent/SalePartners/SalePartners';
import PriceList from './MainContent/PriceList/PriceList';
import Orders from './MainContent/Orders/Orders';
import Settings from './MainContent/Settings/Settings';
import Control from './MainContent/Control/Control';
import Notification from './MainContent/Notification/Notification';
import Payment from './MainContent/Payment/Payment';
import Shipment from './MainContent/Shipment/Shipment';
import Configurator from './MainContent/Configurator/Configurator';
// import BreadCrumbs from './MainContent/BreadCrumbs/BreadCrumbs';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Layout.scss';

const Layout = () => {
    const { isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    if (!isAuthenticated) {
        return <Redirect to="/" />;
    }
    const dashboardContent = (
        <div className="right invisible">
            <>{/* @ts-ignore */}</>
            <TopNav />
            <div className="main-container">
                <SideNav />
                {/* <div className="breadcrumbs">
                    <Route path="/:path" component={BreadCrumbs} />
                </div> */}
                <Switch>
                    <Route path="/dashboard" component={Main} />
                    <Route path="/media" component={MediaFiles} />
                    <Route path="/news/:id?" component={News} />
                    <Route path="/admin-panel" component={AdminPanel} />
                    <Route path="/sales" component={SalePartners} />
                    <Route path="/profile" component={Account} />
                    <Route path="/users-and-roles" component={RolesUsers} />
                    <Route path="/price-list" component={PriceList} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/control" component={Control} />
                    <Route path="/notification" component={Notification} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/shipment" component={Shipment} />
                    <Route path="/configurator" component={Configurator} />
                </Switch>
                <div className="wrapper__chat">
                    {/** @ts-ignore */}
                    <Draggable
                        bounds={{
                            top: window.innerHeight / 2,
                            left: window.innerWidth / 1.5,
                            right: 0,
                            bottom: 0
                        }}
                    >
                        <Chat />
                    </Draggable>
                </div>
            </div>
        </div>
    );
    return (
        <Router>
            <div className="wrapper">{dashboardContent}</div>
        </Router>
    );
};
export default Layout;
