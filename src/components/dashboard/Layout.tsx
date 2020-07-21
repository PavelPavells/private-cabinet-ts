/** ********** IMPORT LIBRARIES ********** */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

/** ********** IMPORT COMPONENTS ********** */
import SideNav from './SideNav/SideNav';
import TopNav from './TopNav/TopNav';
import Main from './MainContent/Main/Main';
import Account from './MainContent/Account/Account';
import News from './MainContent/News/News';
import SalePartners from './MainContent/SalePartners/SalePartners';
import MainContent from './MainContent/MainContent';
import NotFound from '../404/404';
import PriceList from './MainContent/PriceList/PriceList';
import Control from './MainContent/Control/Control';
import Payment from './MainContent/Payment/Payment';
import Shipment from './MainContent/Shipment/Shipment';
import WebApp from './MainContent/WebApp/WebApp';

/** ********** IMPORT STYLES ********** */
import './Layout.scss';

class Layout extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            uuid: ''
        };
    }

    /** ********** FETCH DATA ACCOUNT ********** */
    componentDidMount() {
        // this.props.getProjects();
        // this.props.registerWebApp();
        localStorage.getItem('uuid');
    }

    render() {
        // @ts-ignore
        const { news, control, logoutUser } = this.props;
        // @ts-ignore
        const { contragentName, partnerStatus } = this.props.data;
        const uuid = localStorage.getItem('uuid');
        // console.log(uuid)
        let dashboardContent;
        if (!uuid) {
            return <Redirect to="/" />;
        }
        dashboardContent = (
            <>
                <div className="right">
                    <SideNav />
                    <TopNav
                        // @ts-ignore
                        contragentName={contragentName}
                        partnerStatus={partnerStatus}
                        uuid={uuid}
                        logoutUser={logoutUser}
                    />
                    <Switch>
                        <Route
                            exact
                            path="/dashboard"
                            // projects={projects}                //projects={projects}
                            component={Main} // component={Dashboard}
                        />
                        <Route
                            path="/sales"
                            // @ts-ignore
                            render={() => <SalePartners data={uuid} />}
                        />
                        <Route
                            path="/account"
                            // @ts-ignore
                            render={() => <Account data={uuid} />}
                        />
                        <Route path="/news" component={News} news={news} />
                        <Route
                            path="/price-list"
                            // @ts-ignore
                            render={() => <PriceList data={uuid} />}
                        />
                        <Route path="/control" component={Control} control={control} />
                        <Route
                            path="/payment"
                            // @ts-ignore
                            render={() => <Payment data={uuid} />}
                        />
                        <Route
                            path="/shipment"
                            // @ts-ignore
                            render={() => <Shipment data={uuid} />}
                        />
                        <Route
                            path="/app"
                            // @ts-ignore
                            render={() => <WebApp data={uuid} />}
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
