/**
 * ********** Импорт глобальных переменных **********
 */
import {
    ShipmentActions,
    ShipmentState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS_SHIPMENT_HEADERS,
    DATA_LOADING_SUCCESS_SHIPMENT_TABLE,
    DATA_LOADING_FAILURE
} from '../constants/shipmentTypes';

const initialState: ShipmentState = {
    isFetching: false,
    errorMessage: '',
    headersShipment: null,
    tableShipment: null
};

/**
 * ********** Редьюсер компонента Shipment **********
 */
export default function shipmentReducer(state = initialState, action: ShipmentActions): ShipmentState {
    switch (action.type) {
        case DATA_LOADING_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DATA_LOADING_SUCCESS_SHIPMENT_HEADERS:
            return {
                ...state,
                isFetching: false,
                headersShipment: action.payload
            };
        case DATA_LOADING_SUCCESS_SHIPMENT_TABLE:
            return {
                ...state,
                isFetching: false,
                tableShipment: action.payload
            };
        case DATA_LOADING_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}
