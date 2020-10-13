/**
 * import actions, reducers
 */
import Reducer, { initialState } from '../../reducers/authReducer';
import {
    DATA_LOADING_REQUEST_NOTIFICATIONS,
    DATA_LOADING_SUCCESS_NOTIFACTIONS,
    DATA_LOADING_FAILURE_NOTIFICATIONS
} from '../../constants/notificationsTypes/notificationsTypes';

describe('Testing Auth Reducer', () => {
    it('TESING DATA_LOADING_REQUEST_NOTIFICATIONS', () => {
        const action = {
            type: DATA_LOADING_REQUEST_NOTIFICATIONS
        };

        expect(Reducer(initialState, action)).toEqual({
            ...initialState,
            isFetching: false
        });
    });

    it('TESTING DATA_LOADING_SUCCESS_NOTIFICATIONS', () => {
        const action = {
            type: DATA_LOADING_SUCCESS_NOTIFACTIONS
        };
        // console.log(action);
    });

    it('TESTING DATA_LOADING_FAILURE_NOTIFICATIONS', () => {
        const action = {
            type: DATA_LOADING_FAILURE_NOTIFICATIONS
        };
        // console.log(action);
    });
});
