import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    AddUserActions,
    AddUserRes,
    AddUserReq,
    AddUser
} from '../../constants/userTypes/addUser';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): AddUserActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: AddUser): AddUserActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

export const fetchingDataFailure = (error: any): AddUserActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataAddUser = (addUser: AddUserReq) => async (dispatch: Dispatch<AddUserActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}/addUser`, addUser)
            .then((response: AxiosResponse<AddUserRes>) => {
                dispatch(fetchingDataSuccess(response.data.payload.recordSet.content));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
