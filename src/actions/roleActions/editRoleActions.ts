import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    EditRoleActions,
    EditRoleRes,
    EditRoleReq,
    EditRole
} from '../../constants/roleTypes/editRole';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): EditRoleActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: EditRole): EditRoleActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

export const fetchingDataFailure = (error: any): EditRoleActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataEditRole = (editRole: EditRoleReq) => async (dispatch: Dispatch<EditRoleActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}/editRole`, editRole)
            .then((response: AxiosResponse<EditRoleRes>) => {
                dispatch(fetchingDataSuccess(response.data.payload.recordSet.content));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
