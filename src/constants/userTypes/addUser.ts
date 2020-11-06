export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

export interface ResponseStatus {
    code: number;
    result_message: string;
    action: string;
}

export interface AddUserItem {
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

export type AddUser = Array<AddUserItem>;

export interface AddUserReq {
    fullName: string;
    phone: string;
    email: string;
    post: string;
    pass: string;
    repeatPass: string;
    checkboxOne: boolean;
    checkboxTwo: boolean;
}

export interface AddUserRes {
    payload: {
        recordSet: {
            content: AddUser;
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

export interface AddUserState {
    isFetching: boolean;
    errorMessage: string;
    addUser: AddUser | null;
    // inputs: AddUserInputs;
}

interface AddUserRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface AddUserSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: AddUser;
}

interface AddUserFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export interface AddUserInputs {
    [key: string]: string;
}

export type AddUserActions = AddUserRequest | AddUserSuccess | AddUserFailure;
