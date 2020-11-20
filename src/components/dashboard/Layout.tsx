/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, Suspense, SyntheticEvent } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Draggable from 'react-draggable';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../store/store';

/**
 * импорт лоадера
 */
import Loader from '../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Layout.scss';

/**
 * ********** Импорт основных основных компонентов **********
 * */
// const Chat = lazy(() => import('./MainContent/Chat/Chat'));
// const SideNav = lazy(() => import('./SideNav/SideNav'));
// const TopNav = lazy(() => import('./TopNav/TopNav'));
// const Main = lazy(() => import('./MainContent/Main/Main'));
// const MediaFiles = lazy(() => import('./MainContent/MediaFiles/MediaFiles'));
// const News = lazy(() => import('./MainContent/News/News'));
// const Account = lazy(() => import('./MainContent/Profile/Profile'));
// const RolesUsers = lazy(() => import('./MainContent/RolesUsers/RolesUsers'));
// const AdminPanel = lazy(() => import('./MainContent/AdminPanel/AdminPanel'));
// const SalePartners = lazy(() => import('./MainContent/SalePartners/SalePartners'));
// const PriceList = lazy(() => import('./MainContent/PriceList/PriceList'));
// const Orders = lazy(() => import('./MainContent/Orders/Orders'));
// const Settings = lazy(() => import('./MainContent/Settings/Settings'));
// const Control = lazy(() => import('./MainContent/Control/Control'));
// const Notification = lazy(() => import('./MainContent/Notification/Notification'));
// const Payment = lazy(() => import('./MainContent/Payment/Payment'));
// const Shipment = lazy(() => import('./MainContent/Shipment/Shipment'));
// const Configurator = lazy(() => import('./MainContent/Configurator/Configurator'));
import Chat from './MainContent/Chat/Chat';
import SideNav from './SideNav/SideNav';
import TopNav from './TopNav/TopNav';
import Main from './MainContent/Main/Main';
// import MediaFiles from './MainContent/MediaFiles/MediaFiles';
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
import Catalog from './MainContent/Catalog/Catalog/Catalog';
import Configurator from './MainContent/Configurator/Configurator';
// import BreadCrumbs from './MainContent/BreadCrumbs/BreadCrumbs';

const Layout = () => {
    const { isOpenMenu } = useSelector((state: PersonalCabinet) => state.topnav, shallowEqual);
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    if (!isAuthenticated) {
        return <Redirect to="/" />;
    }

    const handleChangeIsOpenChat = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };
    const dashboardContent = (
        <div className={`right ${isOpenMenu ? '' : 'invisible'}`}>
            <>{/* @ts-ignore */}</>
            <TopNav />
            <main className="main-container">
                <SideNav />
                <Switch>
                    <Route path="/dashboard" render={() => <Main isOpen={isOpen} setIsOpen={setIsOpen} />} />
                    {/* <Route path="/media" component={MediaFiles} /> */}
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
                    <Route path="/catalog/:basket?/:item?" component={Catalog} />
                    <Route path="/configurator" component={Configurator} />
                </Switch>
                <div className="wrapper__chat">
                    {/** @ts-ignore */}
                    <Draggable bounds="parent">
                        <Chat isOpen={isOpen} handleChangeIsOpenChat={handleChangeIsOpenChat} />
                    </Draggable>
                </div>
            </main>
        </div>
    );
    return (
        <Router>
            <Suspense fallback={Loader}>
                <div className="wrapper">{dashboardContent}</div>
            </Suspense>
        </Router>
    );
};
export default Layout;
