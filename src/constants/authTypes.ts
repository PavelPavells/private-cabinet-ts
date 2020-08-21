/**
 * ********** Глобальные переменные для асинхронных запросов авторизации **********
 */
export const USER_ERROR_LOADING = 'USER_ERROR_LOADING';
export const SET_USER_COMPANY_NAME = 'SET_USER_COMPANY_NAME';
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

interface setUserCompanyName {
    type: typeof SET_USER_COMPANY_NAME;
    payload: string;
}

export interface userDataRegister {
    companyName: string;
    contactEmail: string;
    direction: object;
    email: string;
    inn: string;
    legalAdress: string;
    name: string;
    pass: string;
    patronymic: string;
    phone: string;
    repeatpass: string;
    surname: string;
    webSite: string;
    confidiency: boolean;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: any;
    partnerName: string;
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
    userName: string;
    partnerName: string;
    description: string;
    adminStr: string;
    creationDate: string;
    agentName: string;
    err: string;
    errorMessage: string;
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
    | userErrorLoading
    | setUserCompanyName;
