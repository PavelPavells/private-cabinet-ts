/**
 * ********** Глобальные переменные для асинхронных запросов авторизации **********
 */
export const USER_ERROR_LOADING = 'USER_ERROR_LOADING';
export const GET_ERRORS = 'GET_ERRORS';
export const USER_LOADING = 'USER_LOADING';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const RESET_CURRENT_USER = 'RESET_CURRENT_USER';
export const NEW_PASSWORD_USER = 'NEW_PASSWORD';

/**
 * *********** Интерфейсы стейта Авторизации/Регистрации **********
 */
export interface userDataState {
    login: string;
    passHash: string;
}

export interface userResetPassword {
    type: typeof RESET_CURRENT_USER;
    payload: any;
}

export interface userNewPassword {
    type: typeof NEW_PASSWORD_USER;
    payload: any;
}

export interface userErrorLoading {
    type: typeof USER_ERROR_LOADING;
    payload: any;
}

export interface userDataRegister {
    name: string;
    email: string;
    companyName: string;
    companyInn: string;
    contactPerson: string;
    companyPhone: string | number;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: any;
    loading: boolean;
    error: null | any;
}

export interface LoginReq {
    login: string;
    passHash: string;
}

export interface LoginRes {
    success: string;
    userUuid: string;
    partnerUuid: string;
    agentName: string;
    err: string;
    partnerStatus: string;
}

interface registerUser {
    type: typeof GET_ERRORS;
    payload: any;
}

interface loginUser {
    type: typeof GET_ERRORS;
    payload: any;
}

interface setCurrentUser {
    type: typeof SET_CURRENT_USER;
    payload: Object;
}

interface setUserLoading {
    type: typeof USER_LOADING;
}

interface logoutUser {
    type: typeof GET_ERRORS;
    history: any;
}

export type AuthActions =
    | registerUser
    | loginUser
    | setCurrentUser
    | setUserLoading
    | logoutUser
    | userResetPassword
    | userNewPassword
    | userErrorLoading;
