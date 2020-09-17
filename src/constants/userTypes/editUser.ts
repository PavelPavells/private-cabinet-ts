export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

/**
 * ********** Глобальные переменные для асинхронных запросов на сервер, интерфейсы ответов **********
 */
export interface ResponseStatus {
    code: number;
    result_message: string;
    action: string;
}

export interface EditUserItem {
    currencyDesc: string;
    currencyId: number;
    deleted: 0 | 1;
    deletedStr: string;
    discountCash: number;
    discountPrice: number;
    discountSum: number;
    discountTypeName: string;
    discountValidAfter: string | null;
    discountValidUntil: string | null;
    itemArticle: string | null;
    itemGroup: string;
    itemPriceUuid: string;
    itemShortName: string;
    itemUuid: string;
    itemWorkName: string;
    itypeName: string;
    parentItypeName: string;
    partnerUuid: string;
    price: number;
    priceType: string;
    validUntil: string | null;
}

export type EditUser = Array<EditUserItem>;

export interface EditUserReq {
    page: number;
    limit: number;
    sortBy: null | string;
    sortDirection: number | undefined;
    groupBy: null | string;
    findBy: null | string;
    findValue: null | string;
    uuid: string;
}

export interface EditUserRes {
    payload: {
        recordSet: {
            content: EditUser;
        };
        pageable: {
            sort: {
                sorted: boolean;
                unsorted: boolean;
                empty: boolean;
            };
            pageNumber: number;
            pageSize: number;
            offset: number;
            unpaged: boolean;
            paged: boolean;
        };
        totalPages: number;
        last: boolean;
        totalElements: number;
        numberOfElements: number;
        first: boolean;
        number: number;
        size: number;
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        };
        empty: boolean;
    };
    response: ResponseStatus;
}

/**
 * *********** Интерфейсы стейта Компонента EditUsers **********
 */
export interface EditUserState {
    isFetching: boolean;
    errorMessage: string;
    addUser: EditUser | null;
    inputs: EditUserInputs;
}

interface EditUserRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface EditUserSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: EditUserState[];
}

interface EditUserFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export interface EditUserInputs {
    [key: string]: string;
}

export type EditUserActions = EditUserRequest | EditUserSuccess | EditUserFailure;
