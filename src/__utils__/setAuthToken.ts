/**
 * Импорт зависимостей
 */
import axios from 'axios';

const setAuthToken = (token: boolean) => {
    if (token) {
        /**
         * Применить авторизационный токен к каждому запросу, если вы вошли в систему
         */
        axios.defaults.headers.common.Authorization = token;
    } else {
        /**
         * Удалить авторизационный токен
         */
        delete axios.defaults.headers.common.Authorization;
    }
};
export default setAuthToken;
