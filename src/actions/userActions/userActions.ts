import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    UserActions,
    UserRes,
    UserReq,
    User
} from '../../constants/userTypes/userTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): UserActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: User): UserActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

export const fetchingDataFailure = (error: any): UserActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataAddRole = (role: UserReq) => async (dispatch: Dispatch<UserActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}/user`, role)
            .then((response: AxiosResponse<UserRes>) => {
                dispatch(fetchingDataSuccess(response.data.payload.recordSet.content));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};
