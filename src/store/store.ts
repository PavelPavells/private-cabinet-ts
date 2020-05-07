/**
 * Импорт зависимостей
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

/**
 * Инициализация состояния приложения
 */
const initialState = {};

/**
 * Промежуточное ПО для асинхронных запросов
 */
const middleware = [thunk];

declare global  {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    ReactReduxDevTools()
  )
)

export type PersonalCabinet = ReturnType<typeof rootReducer>;

export default store;
