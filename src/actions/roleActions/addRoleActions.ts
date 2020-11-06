import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    AddRoleActions,
    AddRoleRes,
    AddRoleReq,
    AddRole
} from '../../constants/roleTypes/addRole';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): AddRoleActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: AddRole): AddRoleActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

export const fetchingDataFailure = (error: any): AddRoleActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataAddRole = (addRole: AddRoleReq) => async (dispatch: Dispatch<AddRoleActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}/addRole`, addRole)
            .then((response: AxiosResponse<AddRoleRes>) => {
                dispatch(fetchingDataSuccess(response.data.payload.recordSet.content));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
