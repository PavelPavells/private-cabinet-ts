import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import accountReducer from './accountReducer';
import controlReducer from './controlReducer';
import mainReducer from './mainReducer';
import paymentReducer from './paymentReducer';
import priceListReducer from './priceListReducer';
import ordersReducer from './ordersReducer';
import salePartnersReducer from './salePartnersReducer';
import shipmentReducer from './shipmentReducer';
import sideNavReducer from './sideNavReducer';
import topNavReducer from './topNavReducer';
import webAppReducer from './webAppReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    account: accountReducer,
    control: controlReducer,
    main: mainReducer,
    payment: paymentReducer,
    pricelist: priceListReducer,
    orders: ordersReducer,
    salepartners: salePartnersReducer,
    shipment: shipmentReducer,
    sidenav: sideNavReducer,
    topnav: topNavReducer,
    app: webAppReducer,
    errors: errorReducer
});

export default rootReducer;
