/** 
 * ********** Импорт глобальных переменных **********
 */
//const isEmpty = require("is-empty");

import {
    AuthState,
    AuthActions,
    SET_CURRENT_USER,
    USER_LOADING
} from "../constants/types";

const initialState: AuthState = {
    isAuthenticated: false,
    user: {},
    loading: false
}

/**
 * ********** Редьюсер компонента SecuredRoute(Login/Register) **********
 */
export default function(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload, //!isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}