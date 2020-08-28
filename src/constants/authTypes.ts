/**
 * ********** Глобальные переменные для асинхронных запросов авторизации **********
 */
export const USER_ERROR_LOADING = 'USER_ERROR_LOADING';
export const SET_USER_COMPANY_NAME = 'SET_USER_COMPANY_NAME';
export const GET_ERRORS = 'GET_ERRORS';
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const USER_LOADING = 'USER_LOADING';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const RESET_CURRENT_USER = 'RESET_CURRENT_USER';
export const NEW_PASSWORD_USER = 'NEW_PASSWORD';
export const CHANGE_ERROR_NAME = 'CHANGE_ERROR_NAME';
export const CHANGE_USER_DATA_ERROR_REGISTER = 'CHANGE_USER_DATA_ERROR_REGISTER';
export const GET_ERROR_REGISTER = 'GET_ERROR_REGISTER';
export const CHANGE_EMAIL_ADDRESS = 'CHANGE_EMAIL_ADDRESS';
export const GET_DATA_BUSINESS = 'GET_DATA_BUSINESS';

/**
 * *********** Интерфейсы стейта Авторизации/Регистрации **********
 */

export interface ResponseStatus {
    code: number;
    message: string;
    action: any;
}

export interface AuthRequest {
    uuid: string | number;
    appuuid: string | number;
}

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
    invitecode: string;
    appUuid: string;
    login: string;
    pass: string;
    firstname: string;
    lastname: string;
    secondname: string;
    email: string;
    phone: string;
    company: string;
    inn: string;
    address: string;
    website: string;
    business: string;
    agreement: number;
}
export interface userDataErrorRegister {
    inviteCode: string;
    inCode: string;
    expired: number;
    alreadyUsed: number;
    regEmail: string;
    isValid: number | null;
}

export interface dataRegisterBusinessTypes {
    partnerBusinessTypeUuid: string;
    partnerBusinessTypeName: string;
}

export interface AuthState {
    isFetching: boolean;
    isAuthenticated: boolean;
    user: any;
    errorResult: ResponseStatus;
    errorRegisterResult: any;
    invitePayload: userDataErrorRegister;
    businessTypes: dataRegisterBusinessTypes;
    partnerName: string;
    accountFullName: string;
    loading: boolean;
    error: null | any;
}

export interface ErrorPageData {
    result: ResponseStatus;
    payload: userDataErrorRegister;
    businessTypes: dataRegisterBusinessTypes;
}

export interface RegisterPageData {
    result: ResponseStatus;
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
    accountFullName: string;
    err: string;
    errorMessage: string;
}

interface LoginRequest {
    type: typeof DATA_LOADING_REQUEST;
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

interface changeErrorName {
    type: typeof CHANGE_ERROR_NAME;
    payload: ResponseStatus;
}

interface changeErrorCode {
    type: typeof CHANGE_USER_DATA_ERROR_REGISTER;
    payload: userDataErrorRegister;
}

interface getErrorRegister {
    type: typeof GET_ERROR_REGISTER;
    payload: any;
}

// interface changeEmailAdress {
//     type: typeof CHANGE_EMAIL_ADDRESS;
//     payload: any;
// }

interface registerBusinessTypes {
    type: typeof GET_DATA_BUSINESS;
    payload: dataRegisterBusinessTypes;
}

export type AuthActions =
    | LoginRequest
    | getErrorRegister
    | changeErrorCode
    | changeErrorName
    | registerUser
    | registerBusinessTypes
    | loginUser
    | setCurrentUser
    | setUserLoading
    | logoutUser
    | userResetPassword
    | userNewPassword
    | userErrorLoading
    | setUserCompanyName;
