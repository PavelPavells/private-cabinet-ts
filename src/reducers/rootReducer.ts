import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import roleReducer from './roleReducers/roleReducer';
import addRoleReducer from './roleReducers/addRoleReducer';
import editRoleReducer from './roleReducers/editRoleReducer';
import userReducer from './userReducers/userReducer';
import addUserReducer from './userReducers/addUserReducer';
import editUserReducer from './userReducers/editUserReducer';
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
    profile: profileReducer,
    role: roleReducer,
    addRole: addRoleReducer,
    editRole: editRoleReducer,
    user: userReducer,
    addUser: addUserReducer,
    editUser: editUserReducer,
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
