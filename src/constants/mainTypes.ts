/**
 * ********** Глобальные переменные для асинхронных запросов на сервер **********
 */
export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS = 'DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS';
export const DATA_LOADING_NEWS = 'DATA_LOADING_NEWS';
export const DATA_LOADING_OFFERS = 'DATA_LOADING_OFFERS';

/**
 * *********** Интерфейсы стейта Компонента Main **********
 */

export interface ResponseStatus {
    code: number;
    message: string;
}

export interface MainItem {
    partnerUuid: string;
    companyName: string;
    vatStr: string;
    guaranteeStr: string;
    registrationDate: string;
    currentDiscount: number;
    currentCash: number;
    minDiscount: number;
    maxDiscount: number;
    leadManagerName: string;
    accountFullName: string;
    leadManagerPhone: string;
    leadManagerEmail: string;
}
export type MainList = MainItem;

export interface TableItem {
    rowNum: number;
    volume: number;
    discountSum: number;
    conditions: number;
}
export type TableList = TableItem[];

interface NewsItem {
    id: number;
    newTopic: string;
    newBody: string;
    newDate: string;
}

export type NewsList = Array<NewsItem>;

interface OfferItem {
    id: number;
    offerTopic: string;
    offerBody: string;
    offerDate: string;
}

export type OffersList = Array<OfferItem>;

export interface MainListReq {
    uuid: string;
}

export interface MainListRes {
    payload: {
        recordSet: MainList;
        discountSettings: TableList;
        news: NewsList;
        offers: OffersList;
    };
}

export interface MainState {
    isFetching: boolean;
    errorMessage: string;
    main: MainList | null;
    table: TableList | null;
    news: NewsList | null;
    offers: OffersList | null;
}

interface MainRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface MainSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: MainList;
}

interface MainSuccessDiscount {
    type: typeof DATA_LOADING_SUCCESS_DISCOUNT_SETTINGS;
    payload: TableList;
}

interface MainFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

interface MainDataNews {
    type: typeof DATA_LOADING_NEWS;
    payload: NewsList;
}

interface MainDataOffers {
    type: typeof DATA_LOADING_OFFERS;
    payload: OffersList;
}

export type MainActions = MainRequest | MainSuccess | MainSuccessDiscount | MainDataNews | MainDataOffers | MainFailure;
