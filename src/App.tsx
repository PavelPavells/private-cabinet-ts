import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, shallowEqual, useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// @ts-ignore
// eslint-disable-next-line camelcase
// import jwt_decode from 'jwt-decode';
import setAuthToken from './__utils__/setAuthToken';
import { setCurrentUser, getAccessRegister, logoutUser } from './actions/authActions/authActions';

import store, { PersonalCabinet } from './store/store';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RegisterRequest from './components/auth/RegisterRequest';
import Reset from './components/auth/Reset';
import NewPassword from './components/auth/NewPassword';
import Layout from './components/dashboard/Layout';
import PrivateRoute from './components/private-route/PrivateRoute';
import NotFound from './components/404/404';

import './App.scss';

/**
 * ********** Проверка на cуществование токена в localStorage **********
 */
if (localStorage.partnerUuid) {
    const partnerUuid = JSON.parse(localStorage.partnerUuid);
    const userUuid = JSON.parse(localStorage.userUuid);
    setAuthToken(partnerUuid, userUuid);

    /**
     * ********** Декодировать токен, чтобы получать пользователя **********
     */
    // const decoded = jwt_decode(userUuid);

    /**
     * ********** Установить пользователя и поле isAuthenticated для Приватного Роута **********
     */
    store.dispatch(setCurrentUser(partnerUuid));

    const partnerName = localStorage.getItem('partnerName');
    const accountFullName = localStorage.getItem('accountFullName');
    const adminStr = localStorage.getItem('adminStr');
    const partnerTypeStr = localStorage.getItem('partnerTypeStr');
    const userUuidString = localStorage.getItem('userUuid');
    /**
     * ********** Проверка токена на истекшость по времени(Устанавливается в Бэкенде) **********
     */
    // const currentTime = Date.now() / 1000; // в миллисекундах
    // @ts-ignore
    // if (decoded.exp < currentTime) {
    if (!partnerName || !accountFullName || !adminStr || !partnerTypeStr || !userUuidString) {
        /**
         * ********** Логаут пользователя **********
         */
        // @ts-ignore
        store.dispatch(logoutUser());
        window.location.href = './';
    }
}

const App = () => {
    const { errorResult } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    const dispatch = useDispatch();
    const params = window.location.search.split('=')[1];

    useEffect(() => {
        if (params) {
            dispatch(getAccessRegister(window.location.search.split('=')[1]));
        }
        localStorage.removeItem('registerUuid');
        localStorage.removeItem('jwtNewPassword');
        localStorage.removeItem('uuid');
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={errorResult.code === 0 ? Register : NotFound} />
                        <Route exact path="/bid" component={RegisterRequest} />
                        <Route exact path="/reset" component={Reset} />
                        <Route exact path="/new-password" component={errorResult.code === 0 ? NewPassword : NotFound} />
                        <PrivateRoute
                            // @ts-ignore
                            exact
                            path="/dashboard"
                            component={Layout}
                        />
                        <Route component={localStorage.partnerUuid ? Layout : NotFound} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppWrapper;
