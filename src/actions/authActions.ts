/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios from 'axios';
import { Dispatch } from 'react';
// @ts-ignore
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

/**
 * ********** Импорт глобальных переменных **********
 */
import { AuthActions, userDataLogin, userDataRegister, GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from '../constants/authTypes';

/**
 * ********** ПО для установки токена в заголовки при запросах **********
 */
import setAuthToken from '../__utils__/setAuthToken';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../constants/Global';

/**
 * ********** Экшен для установки текущего пользователя **********
 */
export const setCurrentUser = (decoded: Object): AuthActions => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

/**
 * ********** Экшен для сброса пароля **********
 */
export const setUserLoading = (): AuthActions => {
    return {
        type: USER_LOADING
    };
};

/**
 * ********** Экшен для регистрации нового пользователя **********
 */
export const resetPassword = (email: string, history?: any) => (dispatch: Dispatch<AuthActions>) => {
    axios
        .post(`${site}/reset`, email)
        .then(() => history.push('/'))
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

/**
 * ********** Экшен для регистрации нового пользователя **********
 */
export const newPassword = (password: string[]) => (dispatch: Dispatch<AuthActions>) => {
    axios
        .post(`${site}/new-password`, password)
        .then((res) => {
            // Сохранить пришедший токен в localStorage

            // Установить токен в localStorage
            const { token } = res.data;
            localStorage.setItem('jwtNewPassword', JSON.stringify(token));
            // Установить токен в заголовок авторизации
            setAuthToken(token);
            // Декодировать токен, чтобы получать пользователя
            const decoded = jwt_decode(token);
            // Установить текущего пользователя
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

/**
 * ********** Экшен для запроса на сброс пароля **********
 */
export const registerUser = (userData: userDataRegister[], history: any) => (dispatch: Dispatch<AuthActions>) => {
    axios
        .post(`${site}/register`, userData)
        .then(() => history.push('/'))
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

/**
 * ********** Экшен для логина существующего пользователя **********
 */
export const loginUser = (userData: userDataLogin[]) => (dispatch: Dispatch<AuthActions>) => {
    axios
        .post(`${site}/login`, userData)
        .then((res) => {
            // Сохранить пришедший токен в localStorage

            // Установить токен в localStorage
            const { token } = res.data;
            localStorage.setItem('jwtTokenTeams', JSON.stringify(token));
            // Установить токен в заголовок авторизации
            setAuthToken(token);
            // Декодировать токен, чтобы получать пользователя
            const decoded = jwt_decode(token);
            // Установить текущего пользователя
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

/**
 * ********** Экшен для логаута пользователя **********
 */
export const logoutUser = (history: any) => (dispatch: Dispatch<AuthActions>) => {
    // Удалить токен из localStorage
    localStorage.removeItem('jwtTokenTeams');
    // Удалить заголовок из будущих запросов
    setAuthToken(false);
    // Установить текущего пользователя в пустой объект, чтобы поле isAuthenticated === false
    dispatch(setCurrentUser({}));

    history.push('/dashboard');
};
