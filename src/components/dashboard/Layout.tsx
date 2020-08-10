/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useEffect } from 'react';
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
import Main from './MainContent/Main/Main';
import Account from './MainContent/Account/Account';
import AdminPanel from './MainContent/AdminPanel/AdminPanel';
import SalePartners from './MainContent/SalePartners/SalePartners';
import NotFound from '../404/404';
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

// @ts-ignore
// eslint-disable-next-line react/prop-types
const Layout = ({ data, logoutUser }) => {
    useEffect(() => {
        localStorage.getItem('uuid');
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    const uuid = localStorage.getItem('uuid');
    if (!uuid) {
        return <Redirect to="/" />;
    }
    const dashboardContent = (
        <>
            <div className="right">
                <TopNav
                    // @ts-ignore
                    exact
                    // eslint-disable-next-line react/prop-types
                    agentName={data.agentName}
                    // eslint-disable-next-line react/prop-types
                    partnerStatus={data.partnerStatus}
                    uuid={uuid}
                    logoutUser={logoutUser}
                />
                <div className="main-container">
                    <SideNav />
                    <Switch>
                        <Route
                            exact
                            path="/dashboard"
                            // projects={projects}
                            render={() => <Main data={uuid} />}
                        />
                        <Route
                            exact
                            path="/admin-panel"
                            // @ts-ignore
                            render={() => <AdminPanel data={uuid} />}
                        />
                        <Route
                            exact
                            path="/sales"
                            // @ts-ignore
                            render={() => <SalePartners data={uuid} />}
                        />
                        <Route
                            exact
                            path="/account"
                            // @ts-ignore
                            render={() => <Account data={uuid} />}
                        />
                        <Route
                            path="/price-list"
                            // @ts-ignore
                            render={() => <PriceList uuid={uuid} />}
                        />
                        <Route
                            path="/orders"
                            // @ts-ignore
                            render={() => <Orders uuid={uuid} />}
                        />
                        <Route
                            path="/settings"
                            // @ts-ignore
                            render={() => <Settings uuid={uuid} />}
                        />
                        <Route path="/control" render={() => <Control />} />
                        <Route path="/notification" render={() => <Notification />} />
                        <Route
                            exact
                            path="/payment"
                            // @ts-ignore
                            render={() => <Payment uuid={uuid} />}
                        />
                        <Route
                            exact
                            path="/shipment"
                            // @ts-ignore
                            render={() => <Shipment uuid={uuid} />}
                        />
                        <Route
                            exact
                            path="/configurator"
                            // @ts-ignore
                            render={() => <Configurator uuid={uuid} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </>
    );
    return (
        <Router>
            <div className="wrapper">{dashboardContent}</div>
        </Router>
    );
};
export default Layout;
