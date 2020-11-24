import axios from 'axios';
import { Dispatch } from 'react';
import {
    CatalogActions,
    DATA_LOADING_REQUEST_CATALOG,
    DATA_LOADING_SUCCESS_CATALOG,
    DATA_LOADING_FAILURE_CATALOG
} from '../../constants/catalogConstants/catalogConstants';
// import site from '../../constants/GlobalSettings/Global';
import catalog from './catalog.json';

export const fetchingDataRequest = (): CatalogActions => ({
    type: DATA_LOADING_REQUEST_CATALOG
});

export const fetchingDataSuccess = (data: any): CatalogActions => ({
    type: DATA_LOADING_SUCCESS_CATALOG,
    payload: data
});

export const fetchingDataFailure = (error: any): CatalogActions => ({
    type: DATA_LOADING_FAILURE_CATALOG,
    payload: error
});

export const fetchDataCatalog = () => async (dispatch: Dispatch<CatalogActions>) => {
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
