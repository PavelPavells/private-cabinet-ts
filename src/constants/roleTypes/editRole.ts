export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

export interface ResponseStatus {
    code: number;
    result_message: string;
    action: string;
}

export interface EditRoleItem {
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

export type EditRole = Array<EditRoleItem>;

export interface EditRoleReq {
    role: string;
    id: string;
    description: string;
    checkboxOne: boolean;
    checkboxTwo: boolean;
    checkboxThree: boolean;
    checkboxFour: boolean;
}

export interface EditRoleRes {
    payload: {
        recordSet: {
            content: EditRole;
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

export interface EditRoleState {
    isFetching: boolean;
    errorMessage: string;
    editRole: EditRole | null;
    // inputs: EditRoleInputs;
}

interface EditRoleRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface EditRoleSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: EditRole;
}

interface EditRoleFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export interface EditRoleInputs {
    [key: string]: string;
}

export type EditRoleActions = EditRoleRequest | EditRoleSuccess | EditRoleFailure;
