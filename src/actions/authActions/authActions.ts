/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios, { AxiosResponse } from 'axios';
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
    USER_ERROR_LOADING,
    SET_CURRENT_USER,
    USER_LOADING,
    DATA_LOADING_REQUEST,
    LoginReq,
    SET_USER_COMPANY_NAME,
    LoginRes,
    ErrorPageData,
    CHANGE_ERROR_NAME,
    CHANGE_USER_DATA_ERROR_REGISTER,
    GET_ERROR_REGISTER,
    GET_DATA_BUSINESS
} from '../../constants/authTypes/authTypes';

/**
 * ********** ПО для установки токена в заголовки при запросах **********
 */
import setAuthToken from '../../__utils__/setAuthToken';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../../constants/GlobalSettings/Global';

/**
 * ********** Экшен для установки текущего пользователя **********
 */
export const dataLoadingRequest = (): AuthActions => {
    return {
        type: DATA_LOADING_REQUEST
    };
};

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
 * ********** Экшен для обработки ошибки **********
 */
export const setUserCompanyName = (company: string): AuthActions => {
    return {
        type: SET_USER_COMPANY_NAME,
        payload: company
    };
};

/**
 * ********** Экшен для обработки ошибки **********
 */
export const changeErrorName = (result: any): AuthActions => ({
    type: CHANGE_ERROR_NAME,
    payload: result
});

/**
 * ********** Экшен для обработки ошибки **********
 */
export const changeUserDataErrorRegister = (data: any): AuthActions => ({
    type: CHANGE_USER_DATA_ERROR_REGISTER,
    payload: data
});

/**
 * ********** Экшен для обработки ошибки **********
 */
export const getErrorRegister = (data: any): AuthActions => ({
    type: GET_ERROR_REGISTER,
    payload: data
});

/**
 * ********** Экшен для обработки данных на странице Регистрация в поле "Вид деятельности" **********
 */
export const dataRegisterBusinessTypes = (data: any): AuthActions => ({
    type: GET_DATA_BUSINESS,
    payload: data
});

/**
 * ********** Экшен для логина существующего пользователя **********
 */
export const loginUser = (userData: LoginReq) => (dispatch: Dispatch<AuthActions>) => {
    // @ts-ignore
    const { login, passHash } = userData;
    const passwordCypher = md5(passHash);
    bcrypt.genSalt(10, (error: any, salt: any) => {
        // eslint-disable-next-line no-shadow
        bcrypt.hash(passwordCypher, salt, (error: any, passHash: string) => {
            axios
                .post(`${site}login`, { login, passHash })
                .then((response: AxiosResponse<LoginRes>) => {
                    // Если ошибка при логине
                    const { message } = response.data.result;

                    if (message) {
                        dispatch(setErrorLoading(message));
                    }

                    const { partnerUuid, partnerName, fullName, isAdminStr, partnerTypeStr, userUuid } = response.data.payload.recordSet;
                    // Установить данные в localStorage
                    localStorage.setItem('partnerUuid', JSON.stringify(partnerUuid));
                    localStorage.setItem('userUuid', JSON.stringify(userUuid));
                    localStorage.setItem('partnerName', JSON.stringify(partnerName));
                    localStorage.setItem('accountFullName', JSON.stringify(fullName));
                    localStorage.setItem('adminStr', JSON.stringify(isAdminStr));
                    localStorage.setItem('partnerTypeStr', JSON.stringify(partnerTypeStr));
                    // Установить токен в заголовок авторизации
                    setAuthToken(partnerUuid, userUuid);
                    dispatch(setUserCompanyName(partnerName));

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
 * ********** Экшен для доступа на регистрацию **********
 */
// @ts-ignore
export const getAccessRegister = (uuid: any) => async (dispatch: Dispatch) => {
    dispatch(dataLoadingRequest());
    await axios
        .get(`${site}auth/singup/checkinvitecode?invitecode=${uuid}&appuuid=23423443543534543`)
        .then((response: AxiosResponse<ErrorPageData>) => {
            dispatch(changeErrorName(response.data.result));
            dispatch(changeUserDataErrorRegister(response.data.payload));
            dispatch(dataRegisterBusinessTypes(response.data.businessTypes));
        })
        .catch((err: any) => {
            return err;
        });
};

/**
 * ********** Экшен для доступа на сброс пароля **********
 */
export const getAccessNewPassword = (uuid: any) => async (dispatch: Dispatch<any>) => {
    dispatch(dataLoadingRequest());
    await axios
        .get(`${site}auth/newpassword?resetcode=${uuid}`)
        .then((response: AxiosResponse<ErrorPageData>) => {
            dispatch(changeErrorName(response.data.result));
            dispatch(changeUserDataErrorRegister(response.data.payload));
            dispatch(dataRegisterBusinessTypes(response.data.businessTypes));
        })
        .catch((err: any) => {
            return err;
        });
};

/**
 * ********** Экшен для запроса на сброс пароля **********

 */
export const registerUser = (userData: userDataRegister) => (dispatch: Dispatch<AuthActions>) => {
    try {
        const { pass } = userData;
        const passCypher = md5(pass);
        const {
            invitecode,
            appUuid,
            login,
            firstname,
            lastname,
            secondname,
            email,
            phone,
            company,
            inn,
            address,
            website,
            business,
            agreement
        } = userData;
        axios
            .post(`${site}auth/singup/register`, {
                invitecode,
                appUuid,
                login,
                pass: passCypher,
                firstname,
                lastname,
                secondname,
                email,
                phone,
                company,
                inn,
                address,
                website,
                business,
                agreement
            })
            .then((response) => {
                // console.log(response.data);
                dispatch(getErrorRegister(response.data));
            });
        // .then(() => history.push('/register'));
    } catch (error) {
        return error;
    }
};

/**
 * ********** Экшен для регистрации нового пользователя **********
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const resetPassword = (email: string) => (dispatch: Dispatch<AuthActions>) => {
    try {
        axios.post(`${site} resetpassword`, email).then((response) => {
            console.log(response);
        });
    } catch (error) {
        return error;
    }
};

/**
 * ********** Экшен для запроса на сброс пароля **********
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const newPassword = (password: string[]) => (dispatch: Dispatch<AuthActions>) => {
    try {
        axios.post(`${site}/new-password`, password).then((response: AxiosResponse) => {
            // Сохранить пришедший токен в localStorage

            // Установить токен в localStorage
            const { token } = response.data;
            localStorage.setItem('jwtNewPassword', JSON.stringify(token));
            // Установить токен в заголовок авторизации
            // setAuthToken(token);
            // Декодировать токен, чтобы получать пользователя
            // const decoded = jwt_decode(token);
            // Установить текущего пользователя
            // @ts-ignore
            // dispatch(setCurrentUser(decoded));
        });
    } catch (error) {
        return error;
    }
};

/**
 * ********** Экшен для логаута пользователя **********
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const logoutUser = () => (dispatch: Dispatch<AuthActions>) => {
    window.location.href = '/';
    localStorage.removeItem('partnerName');
    localStorage.removeItem('accountFullName');
    localStorage.removeItem('adminStr');
    localStorage.removeItem('partnerTypeStr');
    localStorage.removeItem('userUuid');
    localStorage.removeItem('partnerUuid');
    // Удалить токен из localStorage
    // localStorage.clear();
    // Удалить заголовок из будущих запросов
    // setAuthToken('');
    // Установить текущего пользователя в пустой объект, чтобы поле isAuthenticated === false
    // dispatch(setCurrentUser(''));
    // history.push('/');
};
