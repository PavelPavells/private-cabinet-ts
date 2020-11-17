export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';

export interface ResponseStatus {
    code: string;
    message: string;
}

export interface CatalogItem {
    id: string;
    type: string;
    name: string;
    salePrice: string;
    currentPrice: number;
}

export type CatalogList = Array<CatalogItem>;

export interface CatalogResult {
    result: {
        code: number;
    };
    payload: CatalogList | null;
}

export interface CatalogState {
    isFetching: boolean;
    errorMessage: any;
    catalog: any; // CatalogList | null;
}

interface CatalogRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface CatalogSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: CatalogState[];
}

interface CatalogFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: CatalogList;
}

export type CatalogActions = CatalogRequest | CatalogSuccess | CatalogFailure;
