/**
 * ********** Импорт глобальных переменных **********
 */
import {
    NotificationsActions,
    NotificationsState,
    DATA_LOADING_REQUEST_NOTIFICATIONS,
    DATA_LOADING_SUCCESS_NOTIFACTIONS,
    DATA_LOADING_FAILURE_NOTIFICATIONS
} from '../../constants/notificationsTypes/notificationsTypes';

const initialState: NotificationsState = {
    isFetching: false,
    errorMessage: '',
    notifications: null
};

/**
 * ********** Редьюсер компонента Account **********
 */
export default function notificationsReducer(state = initialState, action: NotificationsActions): NotificationsState {
    switch (action.type) {
        case DATA_LOADING_REQUEST_NOTIFICATIONS:
            return {
                ...state,
                isFetching: true
            };
        case DATA_LOADING_SUCCESS_NOTIFACTIONS:
            return {
                ...state,
                isFetching: false,
                notifications: action.payload
            };
        case DATA_LOADING_FAILURE_NOTIFICATIONS:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}
