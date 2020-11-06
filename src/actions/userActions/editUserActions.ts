import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    EditUserActions,
    EditUserRes,
    EditUserReq,
    EditUser
} from '../../constants/userTypes/editUser';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): EditUserActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: EditUser): EditUserActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

export const fetchingDataFailure = (error: any): EditUserActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataEditUser = (editUser: EditUserReq) => async (dispatch: Dispatch<EditUserActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}/editUser`, editUser)
            .then((response: AxiosResponse<EditUserRes>) => {
                dispatch(fetchingDataSuccess(response.data.payload.recordSet.content));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
