/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios from 'axios';
import { Dispatch } from 'react';
// import jwt_decode from 'jwt-decode';
import md5 from 'md5';
import bcrypt from 'bcryptjs';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    AuthActions,
    userDataRegister,
    GET_ERRORS,
    USER_ERROR_LOADING,
    SET_CURRENT_USER,
    USER_LOADING,
    LoginReq
} from '../constants/authTypes';

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
export const setCurrentUser = (userUuid: Object): AuthActions => {
    return {
        type: SET_CURRENT_USER,
        payload: userUuid
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
 * ********** Экшен для обработки ошибки **********
 */
export const setErrorLoading = (err: any): AuthActions => {
    return {
        type: USER_ERROR_LOADING,
        payload: err
    };
};

/**
 * ********** Экшен для логина существующего пользователя **********
 */
export const loginUser = (userData: LoginReq) => (dispatch: Dispatch<AuthActions>) => {
    // @ts-ignore
    const { login, passHash } = userData;
    const passwordCypher = md5(passHash);
    bcrypt.genSalt(10, (error: any, salt: any) => {
        // eslint-disable-next-line no-shadow
        bcrypt.hash(passwordCypher, salt, (error: any, passHash: any) => {
            axios
                .post(`${site}login`, { login, passHash })
                .then((response) => {
                    const { partnerUuid } = response.data;
                    // Установить токен в localStorage
                    localStorage.setItem('userUuid', JSON.stringify(partnerUuid));
                    // Установить токен в заголовок авторизации
                    setAuthToken(partnerUuid);

                    // Если ошибка при логине
                    const { err } = response.data;
                    // eslint-disable-next-line no-unused-expressions
                    err ? dispatch(setErrorLoading(err)) : null;
                    // Декодировать токен, чтобы получать пользователя
                    // const decoded = jwt_decode(token);
                    // Установить текущего пользователя
                    // @ts-ignore
                    dispatch(setCurrentUser(partnerUuid));
                })
                .catch((except: any) => {
                    return except;
                });
        });
    });
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
            // const decoded = jwt_decode(token);
            // Установить текущего пользователя
            // @ts-ignore
            // dispatch(setCurrentUser(decoded));
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
 * ********** Экшен для логаута пользователя **********
 */
export const logoutUser = (history: any) => (dispatch: Dispatch<AuthActions>) => {
    // Удалить токен из localStorage
    localStorage.removeItem('userUuid');
    // Удалить заголовок из будущих запросов
    setAuthToken('');
    // Установить текущего пользователя в пустой объект, чтобы поле isAuthenticated === false
    dispatch(setCurrentUser(false));
    history.push('/');
};
