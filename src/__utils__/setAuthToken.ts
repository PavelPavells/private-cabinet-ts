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
        axios.defaults.headers.common.Accept = 'application/apiversion.1.0.0.1+json';
    } else {
        /**
         * Удалить авторизационный токен
         */
        delete axios.defaults.headers.common.Authorization;
    }
};
export default setAuthToken;
