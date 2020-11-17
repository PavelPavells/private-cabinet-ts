import axios from 'axios';
import { Dispatch } from 'react';
import {
    CatalogActions,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE
} from '../../constants/catalogConstants/catalogConstants';
// import site from '../../constants/GlobalSettings/Global';
import catalog from './catalog.json';

export const fetchingDataRequest = (): CatalogActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (data: any): CatalogActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: data
});

export const fetchingDataFailure = (error: any): CatalogActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataControl = () => async (dispatch: Dispatch<CatalogActions>) => {
    dispatch(fetchingDataRequest());
    // try {
    //     await axios
    //         .get(`${site}`)
    //         .then((response) => {

    dispatch(fetchingDataSuccess(catalog.data.payload));
    // })
    // .catch((error) => {
    //     dispatch(fetchingDataFailure(error));
    // });
    // } catch (error) {
    // dispatch(fetchingDataFailure(error));
    // }
};
