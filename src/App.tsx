/**
 * ********** Импорт зависимостей **********
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import axios from 'axios';
// @ts-ignore
// eslint-disable-next-line camelcase
// import jwt_decode from 'jwt-decode';

/** ********** Импорт вспомогающих компонентов из __UTILS__ ********** */
import setAuthToken from './__utils__/setAuthToken';
import { setCurrentUser } from './actions/authActions';

/**
 * ********** Импорт глобального сосотояния **********
 */
import store from './store/store';

/**
 * ********** Импорт глобальной переменной переключения между Продакшн/Девелоп **********
 */
// import site from './constants/Global';

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
// import NotFound from './components/500/500';

/**
 * ********** Импорт стилей **********
 */
import './App.scss';

/**
 * ********** Проверка на cуществование токена в localStorage **********
 */
if (localStorage.userUuid) {
    /**
     * ********** Установить токен авторизации в заголовки **********
     */
    const userUuid = JSON.parse(localStorage.userUuid);
    setAuthToken(userUuid);

    /**
     * ********** Декодировать токен, чтобы получать пользователя **********
     */
    // const decoded = jwt_decode(userUuid);

    /**
     * ********** Установить пользователя и поле isAuthenticated для Приватного Роута **********
     */
    // @ts-ignore
    store.dispatch(setCurrentUser(userUuid));

    /**
     * ********** Проверка токена на истекшость по времени(Устанавливается в Бэкенде) **********
     */
    // const currentTime = Date.now() / 1000; // в миллисекундах
    // @ts-ignore
    // if (decoded.exp < currentTime) {
    //     /**
    //      * ********** Логаут пользователя **********
    //      */
    //     // @ts-ignore
    //     store.dispatch(logoutUser()); /** uncommented */

    //     /**
    //      * ********** Редирект на страницу Логина **********
    //      */
    //     window.location.href = './';
    // }
}

class App extends React.PureComponent {
    public render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/register" component={Register} />
                            {/** "/register/:name/:email" */}
                            <Route exact path="/reset" component={Reset} />
                            <Route exact path="/new-password" component={NewPassword} />
                            <PrivateRoute
                                // @ts-ignore
                                exact
                                path="/dashboard"
                                component={Layout}
                            />
                            <Route component={localStorage.userUuid ? Layout : NotFound} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
