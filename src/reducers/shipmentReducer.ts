import {
    ShipmentActions,
    ShipmentState,
    DATA_LOADING_REQUEST,
    DATA_LOADING_SUCCESS_SHIPMENT_HEADERS,
    DATA_LOADING_SUCCESS_SHIPMENT_TABLE,
    DATA_LOADING_FAILURE,
    SHIPMENT_SET_INPUTS,
    SHIPMENT_SET_INPUT
} from '../constants/shipmentTypes/shipmentTypes';

export const initialState: ShipmentState = {
    isFetching: false,
    errorMessage: '',
    inputs: {},
    headersShipment: null,
    tableShipment: null
};

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
        case SHIPMENT_SET_INPUTS:
            return {
                ...state,
                inputs: action.payload
            };
        case SHIPMENT_SET_INPUT:
            return {
                ...state,
                inputs: { ...state.inputs, [action.payload.key]: action.payload.value }
            };
        default:
            return state;
    }
}
