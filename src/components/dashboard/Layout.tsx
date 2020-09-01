/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../store/store';

/**
 * ********** Импорт основных основных компонентов **********
 * */
import SideNav from './SideNav/SideNav';
import TopNav from './TopNav/TopNav';
import MainComponent from './MainContent/Main/Main';
import Account from './MainContent/Profile/Profile';
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
        <div className="right">
            <>{/* @ts-ignore */}</>
            <TopNav />
            <div className="main-container">
                <SideNav />
                <Switch>
                    <Route path="/dashboard" component={MainComponent} />
                    <Route path="/admin-panel" component={AdminPanel} />
                    <Route path="/sales" component={SalePartners} />
                    <Route path="/profile" component={Account} />
                    <Route path="/price-list" component={PriceList} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/control" component={Control} />
                    <Route path="/notification" component={Notification} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/shipment" component={Shipment} />
                    <Route path="/configurator" component={Configurator} />
                </Switch>
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
