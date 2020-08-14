/**
 * ********** Импорт зависимостей **********
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
// @ts-ignore
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import md5 from 'md5';

/** ********** Импорт вспомогающих компонентов из __UTILS__ ********** */
import setAuthToken from './__utils__/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

/**
 * ********** Импорт глобального сосотояния **********
 */
import store from './store/store';

/**
 * ********** Импорт глобальной переменной переключения между Продакшн/Девелоп **********
 */
import site from './constants/Global';

/**
 * ********** Импорт компонентов **********
 */
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Reset from './components/auth/Reset';
import NewPassword from './components/auth/NewPassword';
import Layout from './components/dashboard/Layout';
// import PrivateRoute from './components/private-route/PrivateRoute';
import NotFound from './components/404/404';
// import NotFound from './components/500/500';

/**
 * ********** Импорт стилей **********
 */
import './App.scss';

/**
 * ********** Проверка на cуществование токена в localStorage **********
 */
if (localStorage.jwtTokenTeams) {
    /**
     * ********** Установить токен авторизации в заголовки **********
     */
    const token = JSON.parse(localStorage.jwtTokenTeams);
    setAuthToken(token);

    /**
     * ********** Декодировать токен, чтобы получать пользователя **********
     */
    const decoded = jwt_decode(token);

    /**
     * ********** Установить пользователя и поле isAuthenticated для Приватного Роута **********
     */
    store.dispatch(setCurrentUser(decoded));

    /**
     * ********** Проверка токена на истекшость по времени(Устанавливается в Бэкенде) **********
     */
    const currentTime = Date.now() / 1000; // в миллисекундах
    if (decoded.exp < currentTime) {
        /**
         * ********** Логаут пользователя **********
         */
        // @ts-ignore
        store.dispatch(logoutUser()); /** uncommented */

        /**
         * ********** Редирект на страницу Логина **********
         */
        window.location.href = './';
    }
}

/**
 * ********** Интерфейс пропсов приложения **********
 */
interface AppProps {
    readonly data: any;
    readonly loginUser: (email: string, pass: string) => void;
    readonly logoutUser: () => void;
    readonly logout: () => void;
}

/**
 * ********** Интерфейс состояния приложения **********
 */
interface AppState {
    readonly data: any;
    readonly loadingData: boolean;
    readonly uuid: any | string;
    readonly agentName: any | string;
    readonly partnerStatus: any | string;
    readonly success: any;
    readonly err: any;
}

class App extends React.PureComponent<AppProps | {}, AppState> {
    state: AppState = {
        data: [],
        // eslint-disable-next-line react/no-unused-state
        loadingData: false,
        // eslint-disable-next-line react/no-unused-state
        uuid: null,
        // eslint-disable-next-line react/no-unused-state
        agentName: null,
        // eslint-disable-next-line react/no-unused-state
        partnerStatus: null,
        // eslint-disable-next-line react/no-unused-state
        success: null,
        // eslint-disable-next-line react/no-unused-state
        err: null
    };

    private loginUser = (email: string, pass: string) => {
        axios
            .post(`${site}`, {
                email,
                pass
            })
            .then((res) => {
                this.setState({
                    data: res.data,
                    // eslint-disable-next-line react/no-unused-state
                    loadingData: true,
                    // eslint-disable-next-line react/no-unused-state
                    uuid: localStorage.setItem('uuid', res.data.uuid),
                    // eslint-disable-next-line react/no-unused-state
                    agentName: localStorage.setItem('agentName', res.data.agentName),
                    // eslint-disable-next-line react/no-unused-state
                    partnerStatus: localStorage.setItem('partnerStatus', res.data.partnerStatus),
                    // eslint-disable-next-line react/no-unused-state
                    success: localStorage.setItem('success', res.data.success),
                    // eslint-disable-next-line react/no-unused-state
                    err: localStorage.setItem('err', res.data.err)
                });
            });
    };

    private logoutUser = () => {
        localStorage.clear();
    };

    public render() {
        const { data } = this.state;
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => (
                                    <Login
                                        // @ts-ignore
                                        loginUser={this.loginUser}
                                        data={data}
                                        // @ts-ignore
                                        history={window.history}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/register"
                                render={() => (
                                    <Register
                                        // @ts-ignore
                                        data={data}
                                    />
                                )}
                            />
                            {/** "/register/:name/:email" */}
                            <Route
                                exact
                                path="/reset"
                                render={() => (
                                    <Reset
                                        //  resetPassword={this.resetPassword}
                                        data={data}
                                        // @ts-ignore
                                        // history={window.history}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/new-password"
                                render={() => (
                                    <NewPassword
                                        // newPassword={this.newPassword}
                                        data={data}
                                        // @ts-ignore
                                        // history={window.history}
                                    />
                                )}
                            />
                            <Route exact path="/404" render={() => <NotFound />} />
                            <Route
                                exact
                                path="/dashboard"
                                render={() =>
                                    /** Изменить Route на PrivateRoute */
                                    // @ts-ignore
                                    data.length === 0 && Storage.uuid === null ? (
                                        <Redirect to="/" />
                                    ) : (
                                        <Layout
                                            // @ts-ignore
                                            data={data}
                                            logoutUser={this.logoutUser}
                                        />
                                    )
                                }
                            />
                            <Route exact path="*" render={() => <Layout data={data} logoutUser={this.logoutUser} />} />
                            {/* <Route
                                    component={localStorage.jwtToken ? Layout : NotFound}
                                />
                            */}
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
