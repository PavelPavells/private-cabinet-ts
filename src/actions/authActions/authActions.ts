import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
// import jwt_decode from 'jwt-decode';
import md5 from 'md5';
import bcrypt from 'bcryptjs';
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
import setAuthToken from '../../__utils__/setAuthToken';
import site from '../../constants/GlobalSettings/Global';

export const dataLoadingRequest = (): AuthActions => {
    return {
        type: DATA_LOADING_REQUEST
    };
};

export const setCurrentUser = (userUuid: Object): AuthActions => {
    return {
        type: SET_CURRENT_USER,
        payload: userUuid
    };
};

export const setUserLoading = (): AuthActions => {
    return {
        type: USER_LOADING
    };
};

export const setErrorLoading = (err: any): AuthActions => {
    return {
        type: USER_ERROR_LOADING,
        payload: err
    };
};

export const setUserCompanyName = (company: string): AuthActions => {
    return {
        type: SET_USER_COMPANY_NAME,
        payload: company
    };
};

export const changeErrorName = (result: any): AuthActions => ({
    type: CHANGE_ERROR_NAME,
    payload: result
});

export const changeUserDataErrorRegister = (data: any): AuthActions => ({
    type: CHANGE_USER_DATA_ERROR_REGISTER,
    payload: data
});

export const getErrorRegister = (data: any): AuthActions => ({
    type: GET_ERROR_REGISTER,
    payload: data
});

export const dataRegisterBusinessTypes = (data: any): AuthActions => ({
    type: GET_DATA_BUSINESS,
    payload: data
});

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

export const getAccessRegister = (uuid: any) => async (dispatch: Dispatch<AuthActions>) => {
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

export const getAccessNewPassword = (uuid: any) => async (dispatch: Dispatch<AuthActions>) => {
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
                dispatch(getErrorRegister(response.data));
            });
    } catch (error) {
        return error;
    }
};

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
