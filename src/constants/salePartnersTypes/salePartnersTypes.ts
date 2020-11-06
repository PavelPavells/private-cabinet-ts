export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

export interface SalePartnersState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface SalePartnersRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface SalePartnersSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: SalePartnersState[];
}

interface SalePartnersFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type SalePartnersActions = SalePartnersRequest | SalePartnersSuccess | SalePartnersFailure;
