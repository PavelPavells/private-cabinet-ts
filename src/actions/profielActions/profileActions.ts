import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import md5 from 'md5';
import bcrypt from 'bcryptjs';
import {
    ProfileActions,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS,
    DATA_LOADING_FAILURE,
    // ProfileRegisterData,
    ProfileRes,
    ProfileReq
} from '../../constants/profileTypes/profileTypes';
import site from '../../constants/GlobalSettings/Global';

export const fetchingDataRequest = (): ProfileActions => ({
    type: DATA_LOADING_REQUEST
});

export const fetchingDataSuccess = (profile: ProfileRes): ProfileActions => ({
    type: DATA_LOADING_SUCCESS,
    payload: profile
});

export const fetchingDataFailure = (error: any): ProfileActions => ({
    type: DATA_LOADING_FAILURE,
    payload: error
});

export const fetchDataAccount = (profile: ProfileReq) => async (dispatch: Dispatch<ProfileActions>) => {
    dispatch(fetchingDataRequest());
    try {
        await axios
            .post(`${site}profile`, profile)
            .then((response: AxiosResponse<ProfileRes>) => {
                // @ts-ignore
                dispatch(fetchingDataSuccess(response.data.payload.recordSet));
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        dispatch(fetchingDataFailure(error));
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const changeProfilePassword = (dataProfile: any) => (dispatch: Dispatch<ProfileActions>) => {
    // dispatch(dataLoadingRequest());
    const { userUuid, pass, newPass } = dataProfile;
    const oldPasswordCypher = md5(pass);
    const newPasswordCypher = md5(newPass);
    bcrypt.genSalt(10, (error: any, salt: any) => {
        // eslint-disable-next-line no-shadow
        bcrypt.hash(oldPasswordCypher, salt, (error: any, pass: any) => {
            axios
                .post(`${site}/changepass`, { userUuid, oldPass: pass, newPass: newPasswordCypher })
                .then((response) => {
                    dispatch(fetchingDataFailure(response.data.result));
                })
                .catch((err) => err);
        });
    });
};

// export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE })

// export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO })
