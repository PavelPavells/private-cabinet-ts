/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * *********** Интерфейсы стейта Компонента Profile **********
 */

export interface ResponseStatus {
    code: number;
    message: string;
    action: any;
}

export interface ProfileReq {
    uuid: string;
}

export interface ProfileData {
    dbUserUuid: string;
    partnerUuid: string;
    fullName: string;
    registerDate: string;
    accountLogin: string;
    email: string;
    firstName: string;
    lastName: string;
    secondName: string;
    poisition: string;
    phone: string;
    partnerName: string;
    isAdmin: number;
    isAdminStr: string;
    partnerTypeStr: string;
}

export interface ProfileRegisterData {
    partnerAccountRegUuid: string;
    registerDate: string;
    accountLogin: string;
    accountPsw: string;
    fullName: string;
    phone: string | null;
    email: string;
    firstName: string;
    secondName: string;
    lastName: string;
}

export interface ProfileRes {
    payload: {
        recordSet: ProfileData;
    };
}

export interface ProfileState {
    isFetching: boolean;
    errorMessage: string;
    profile: ProfileRes;
}

interface ProfileRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface ProfileSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: ProfileRes;
}

interface ProfileFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type ProfileActions = ProfileRequest | ProfileSuccess | ProfileFailure;
