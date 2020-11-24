export const DATA_LOADING_REQUEST_CATALOG = 'DATA_LOADING_REQUEST_CATALOG';
export const DATA_LOADING_SUCCESS_CATALOG = 'DATA_LOADING_SUCCESS_CATALOG';
export const DATA_LOADING_FAILURE_CATALOG = 'DATA_LOADING_FAILURE_CATALOG';

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
    type: typeof DATA_LOADING_REQUEST_CATALOG;
}

interface CatalogSuccess {
    type: typeof DATA_LOADING_SUCCESS_CATALOG;
    payload: CatalogState[];
}

interface CatalogFailure {
    type: typeof DATA_LOADING_FAILURE_CATALOG;
    payload: CatalogList;
}

export type CatalogActions = CatalogRequest | CatalogSuccess | CatalogFailure;
