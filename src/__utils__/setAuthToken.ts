/**
 * Импорт зависимостей
 */
import axios from 'axios';

const setAuthToken = (userUuid: string, partnerUuid: string) => {
    if (userUuid) {
        /**
         * Применить авторизационный токен к каждому запросу, если вы вошли в систему
         */
        axios.defaults.headers.common.Authorization = `Bearer ${userUuid}&${partnerUuid}`;
    } else {
        /**
         * Удалить авторизационный токен
         */
        delete axios.defaults.headers.common.Authorization;
    }
};
export default setAuthToken;
