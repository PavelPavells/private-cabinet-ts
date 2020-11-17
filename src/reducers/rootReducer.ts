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
import messagesReducer from './chatReducers/messagesReducer';
import paymentReducer from './paymentReducer';
import priceListReducer from './priceListReducer';
import notificationsReducer from './notificationsReducers/notificationsReducer';
import ordersReducer from './ordersReducer';
import salePartnersReducer from './salePartnersReducer';
import catalogReducer from './catalogReducers/catalogReducers';
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
    message: messagesReducer,
    payment: paymentReducer,
    pricelist: priceListReducer,
    orders: ordersReducer,
    salepartners: salePartnersReducer,
    catalog: catalogReducer,
    shipment: shipmentReducer,
    sidenav: sideNavReducer,
    topnav: topNavReducer,
    notifications: notificationsReducer,
    app: webAppReducer,
    errors: errorReducer
});

export default rootReducer;
