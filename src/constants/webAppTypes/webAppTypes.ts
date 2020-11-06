export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

export interface WebAppState {
    isFetching: boolean;
    errorMessage: string;
    data: any;
}

interface WebAppRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface WebAppSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: WebAppState[];
}

interface WebAppFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

export type WebAppActions = WebAppRequest | WebAppSuccess | WebAppFailure;
