/**
 * ********** Импорт зависимостей **********
 */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, shallowEqual, useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// @ts-ignore
// eslint-disable-next-line camelcase
// import jwt_decode from 'jwt-decode';

/** ********** Импорт вспомогающих компонентов из __UTILS__ ********** */
import setAuthToken from './__utils__/setAuthToken';
import { setCurrentUser, getAccessRegister, logoutUser } from './actions/authActions';

/**
 * ********** Импорт глобального сосотояния **********
 */
import store, { PersonalCabinet } from './store/store';

/**
 * ********** Импорт компонентов **********
 */
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Reset from './components/auth/Reset';
import NewPassword from './components/auth/NewPassword';
import Layout from './components/dashboard/Layout';
import PrivateRoute from './components/private-route/PrivateRoute';
import NotFound from './components/404/404';

/**
 * ********** Импорт стилей **********
 */
import './App.scss';

/**
 * ********** Проверка на cуществование токена в localStorage **********
 */
if (localStorage.registerUuid) {
    /**
     * ********** Установить токен авторизации в заголовки **********
     */
    const registerUuid = JSON.parse(localStorage.registerUuid);
    setAuthToken(registerUuid);

    /**
     * ********** Декодировать токен, чтобы получать пользователя **********
     */
    // const decoded = jwt_decode(userUuid);

    /**
     * ********** Установить пользователя и поле isAuthenticated для Приватного Роута **********
     */
    store.dispatch(setCurrentUser(registerUuid));

    const partnerName = localStorage.getItem('partnerName');
    const accountFullName = localStorage.getItem('accountFullName');
    const adminStr = localStorage.getItem('adminStr');
    const partnerType = localStorage.getItem('partnerType');
    /**
     * ********** Проверка токена на истекшость по времени(Устанавливается в Бэкенде) **********
     */
    // const currentTime = Date.now() / 1000; // в миллисекундах
    // @ts-ignore
    // if (decoded.exp < currentTime) {
    if (!partnerName || !accountFullName || !adminStr || !partnerType) {
        /**
         * ********** Логаут пользователя **********
         */
        store.dispatch(logoutUser());
        window.location.href = './';
    }
}

const App = () => {
    const { errorResult } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    /**
     * Хук отправки действия в Store
     * */
    const dispatch = useDispatch();
    /**
     * Параметр запроса по юиду
     * */
    const params = window.location.search.split('=')[1];

    useEffect(() => {
        if (params) {
            dispatch(getAccessRegister(window.location.search.split('=')[1]));
        }
        localStorage.removeItem('userUuid');
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
                        <Route exact path="/reset" component={Reset} />
                        <Route exact path="/new-password" component={NewPassword} />
                        <PrivateRoute
                            // @ts-ignore
                            exact
                            path="/dashboard"
                            component={Layout}
                        />
                        <Route component={localStorage.registerUuid ? Layout : NotFound} />
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
