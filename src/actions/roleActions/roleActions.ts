import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    RoleActions,
    RoleRes,
    RoleReq,
    Role
} from '../../constants/roleTypes/roleTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): RoleActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: Role): RoleActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

export const fetchingDataFailure = (error: any): RoleActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataAddRole = (role: RoleReq) => async (dispatch: Dispatch<RoleActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}/role`, role)
            .then((response: AxiosResponse<RoleRes>) => {
                dispatch(fetchingDataSuccess(response.data.payload.recordSet.content));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
