export const DATA_LOADING_REQUEST = 'DATA_LOADING_REQUEST';
export const DATA_LOADING_SUCCESS = 'DATA_LOADING_SUCCESS';
export const DATA_LOADING_FAILURE = 'DATA_LOADING_FAILURE';
export const IS_OPEN_SIDE_MENU = 'IS_OPEN_SIDE_MENU';

export interface TopNavState {
    isOpenMenu: boolean;
}

interface TopNavRequest {
    type: typeof DATA_LOADING_REQUEST;
}

interface TopNavSuccess {
    type: typeof DATA_LOADING_SUCCESS;
    payload: TopNavState[];
}

interface TopNavFailure {
    type: typeof DATA_LOADING_FAILURE;
    payload: any;
}

interface IsOpenSideMenu {
    type: typeof IS_OPEN_SIDE_MENU;
    payload: boolean;
}

export type TopNavActions = TopNavRequest | TopNavSuccess | TopNavFailure | IsOpenSideMenu;
