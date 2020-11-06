import axios from 'axios';

const setAuthToken = (userUuid: string, partnerUuid: string) => {
    if (userUuid) {
        axios.defaults.headers.common.Authorization = `Bearer ${userUuid}&${partnerUuid}`;
        axios.defaults.headers.common.Accept = 'application/apiversion.1.0.0.1+json';
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
};
export default setAuthToken;
