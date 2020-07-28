/** ********** IMPORT LIBRARIES ********** */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

/** ********** IMPORT COMPONENTS ********** */
import SideNav from './SideNav/SideNav';
import TopNav from './TopNav/TopNav';
import Main from './MainContent/Main/Main';
import Account from './MainContent/Account/Account';
import SalePartners from './MainContent/SalePartners/SalePartners';
import NotFound from '../404/404';
import PriceList from './MainContent/PriceList/PriceList';
import Orders from './MainContent/Orders/Orders';
import Control from './MainContent/Control/Control';
import Payment from './MainContent/Payment/Payment';
import Shipment from './MainContent/Shipment/Shipment';

/** ********** IMPORT STYLES ********** */
import './Layout.scss';

/**
 * ********** Интерфейс пропсов компонента Main **********
 */
interface LayoutProps {
    news: string[];
    control: string;
    contragentName: string;
    partnerStatus: string;
    logoutUser: () => void;
}

/**
 * ********** Интерфейс стейта компонента Main **********
 */
interface LayoutState {
    uuid: string;
}

class Layout extends React.PureComponent<LayoutProps, LayoutState> {
    // @ts-ignore
    // eslint-disable-next-line react/state-in-constructor
    state: LayoutState = {
        // eslint-disable-next-line react/no-unused-state
        uuid: ''
    };

    /** ********** FETCH DATA ACCOUNT ********** */
    componentDidMount() {
        // this.props.getProjects();
        // this.props.registerWebApp();
        localStorage.getItem('uuid');
    }

    render() {
        // @ts-ignore
        const { control, logoutUser } = this.props;
        // @ts-ignore
        // eslint-disable-next-line react/destructuring-assignment
        const { contragentName, partnerStatus } = this.props.data;
        const uuid = localStorage.getItem('uuid');
        // console.log(uuid)
        // let dashboardContent;
        if (!uuid) {
            return <Redirect to="/" />;
        }
        const dashboardContent = (
            <>
                <div className="right">
                    <SideNav />
                    <TopNav
                        // @ts-ignore
                        exact
                        contragentName={contragentName}
                        partnerStatus={partnerStatus}
                        uuid={uuid}
                        logoutUser={logoutUser}
                    />
                    <Switch>
                        <Route
                            exact
                            path="/dashboard"
                            // projects={projects}
                            render={() => <Main data={uuid} />}
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
                        <Route path="/control" render={() => <Control />} control={control} />
                        <Route
                            exact
                            path="/payment"
                            // @ts-ignore
                            render={() => <Payment data={uuid} />}
                        />
                        <Route
                            exact
                            path="/shipment"
                            // @ts-ignore
                            render={() => <Shipment data={uuid} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </>
        );
        return (
            <Router>
                <div className="wrapper">{dashboardContent}</div>
            </Router>
        );
    }
}

// @ts-ignore
const mapStateToProps = (state) => ({
    security: state.security
});

// @ts-ignore
export default withRouter(connect(mapStateToProps, null)(Layout));
