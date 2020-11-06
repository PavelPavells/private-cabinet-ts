import axios from 'axios';
import { Dispatch } from 'react';
import {
    SideNavActions,
    SideNavState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE
} from '../../constants/sideNavTypes/sideNavTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): SideNavActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: any): SideNavActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data.data
});

export const fetchingDataFailure = (error: any): SideNavActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataSideNav = (data: SideNavState) => async (dispatch: Dispatch<SideNavActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}`, data)
            .then((response) => {
                dispatch(fetchingDataSuccess(response));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

// export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

// export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })
