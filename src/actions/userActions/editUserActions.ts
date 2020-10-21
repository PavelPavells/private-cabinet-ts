/**
 * ********** Импорт основных библиотек из NPM **********
 */
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';

/**
 * ********** Импорт глобальных переменных **********
 */
import {
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    EditUserActions,
    EditUserRes,
    EditUserReq,
    EditUser
} from '../../constants/userTypes/editUser';

/**
 * ********** Импорт глобальной переменной для переключения Продакшн/Девелопмент **********
 */
import site from '../../constants/GlobalSettings/Global';

/**
 * ********** Экшен для инициализации запроса **********
 */
export const fetchingDataRequest = (): EditUserActions => ({
    type: DATA_LOADING_REQUEST
});

/**
 * ********** Экшен для добавления данных в стор после запроса **********
 */
export const fetchingDataSuccess = (data: EditUser): EditUserActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

/**
 * ********** Экшен для обработки ошибки при запросе на сервер **********
 */
export const fetchingDataFailure = (error: any): EditUserActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

/**
 * ********** Экшен для запроса данных из компонентов **********
 */
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
