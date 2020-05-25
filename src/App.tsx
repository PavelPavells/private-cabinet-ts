/**
 * ********** Импорт зависимостей **********
 */
import React, { Dispatch } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import axios from 'axios';
// @ts-ignore
import jwt_decode from "jwt-decode";

/** ********** IMPORT COMPONENTS from __UTILS__ ********** */
//import setAuthToken from './__utils__/setAuthToken';
//import { setCurrentUser, logoutUser  } from './actions/authActions';

/**
 * ********** Импорт глобального сосотояния **********
 */
import store from "./store/store";

/**
 * ********** Импорт глобальной переменной переключения между Продакшн/Девелоп **********
 */
import site from "./constants/Global";

/**
 * ********** Импорт компонентов **********
 */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Layout from "./components/dashboard/Layout";
//import PrivateRoute from './components/private-route/PrivateRoute';
//import NotFound from './components/404/404';

/**
 * ********** Импорт стилей **********
 */
import "./App.scss";

// Проверка на уществование токена в localStorage
//if (localStorage.jwtTokenTeams) {
  // Установить токен авторизации в заголовки
//  const token = JSON.parse(localStorage.jwtTokenTeams);
//  setAuthToken(token);

  // Декодировать токен, чтобы получать пользователя
//  const decoded = jwt_decode(token);

  // Set user and isAuthenticated Установить пользователя и поле isAuthenticated для Приватного Роута
//  store.dispatch(setCurrentUser(decoded));

  // Check for expired token Проверка токена на истекшость по времени(устанавливается в бэкенде)
//  const currentTime = Date.now() / 1000; // в миллисекундах
//  if (decoded.exp < currentTime) {
    // Логаут пользователя
    //@ts-ignore
//    store.dispatch(logoutUser());   /** uncommented */

    // Редирект на страницу Логина
//    window.location.href = "./";
//  }
//}

/**
 * ********** Интерфейс пропсов приложения **********
 */
interface AppProps {
  readonly data: any,
  readonly loginUser: (email: string, pass: string) => void,
  readonly logoutUser: () => void,
  readonly logout: () => void
}

/**
 * ********** Интерфейс состояния приложения **********
 */
interface AppState {
  readonly data: any,
  readonly loadingData: boolean,
  readonly uuid: any | string,
  readonly contragentName: any | string,
  readonly partnerStatus: any | string,
  readonly success: any,
  readonly err: any
}

class App extends React.PureComponent<AppProps | {}, AppState> {
    state: AppState = {
      data: [],
      loadingData: false,
      uuid: null,
      contragentName: null,
      partnerStatus: null,
      success: null,
      err: null
    }
  
  private loginUser = (email: string, pass: string) => {
    axios
      .post(`${site}`, {
        email: email,
        pass: pass
      })
      .then(res => {
        this.setState({
          data: res.data,
          loadingData: true,
          uuid: localStorage.setItem('uuid', res.data.uuid),
          contragentName: localStorage.setItem('contragentName', res.data.contragentName),
          partnerStatus: localStorage.setItem('partnerStatus', res.data.partnerStatus),
          success: localStorage.setItem('success', res.data.success),
          err: localStorage.setItem('err', res.data.err)
        });
      });
  }
  private logoutUser = () => {
    localStorage.clear()
  }
  public render() {
    //console.log(this.props);
    const { data } = this.state;
    console.log(this.state.data)
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" render={() => 
                <Login
                // @ts-ignore 
                  loginUser={this.loginUser} 
                  data={data}
                  // @ts-ignore 
                  history={window.history} 
                  />
                }
              />
              <Route exact path="/register" render={() => <Register />} />  {/** "/register/:name/:email" */}
              <Route exact path="/:dashboard" render={() => 
                // @ts-ignore
                (data.length === 0 && Storage.uuid === null) 
                ? 
                  <Redirect to="/" /> 
                : 
                  <Layout
                  // @ts-ignore 
                    data={data} 
                    logoutUser={this.logoutUser} 
                    history={window.history} 
                  />
                } 
              />
              {/*<Route
                component={localStorage.jwtToken ? Layout : NotFound}
              />*/}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;