import { takeEvery } from 'redux-saga/effects';
import { ADD_MESSAGE } from '../constants/chatTypes/chatTypes';

const handleNewMessage = function* handleNewMessage(params: any) {
    yield takeEvery(ADD_MESSAGE, (action: any) => {
        // eslint-disable-next-line no-param-reassign
        action.author = params.username;
        params.socket.send(JSON.stringify(action));
    });
};

export default handleNewMessage;
