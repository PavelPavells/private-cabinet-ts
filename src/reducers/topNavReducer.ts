/**
 * ********** Импорт глобальных переменных **********
 */
import { TopNavActions, TopNavState, IS_OPEN_SIDE_MENU } from '../constants/topNavTypes/topNavTypes';

const initialState: TopNavState = {
    isOpenMenu: false
};

/**
 * ********** Редьюсер компонента TopNav **********
 */
export default function topNavReducer(state = initialState, action: TopNavActions): TopNavState {
    switch (action.type) {
        case IS_OPEN_SIDE_MENU:
            return {
                ...state,
                isOpenMenu: action.payload
            };
        default:
            return state;
    }
}
