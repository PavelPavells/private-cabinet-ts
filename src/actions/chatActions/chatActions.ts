import { CHAT_DATA_LOADING_REQUEST, ADD_MESSAGE, MESSAGE_RECEIVED, ChatActions } from '../../constants/chatTypes/chatTypes';

let nextMessageId: number = 0;
// let nextUserId: number = 0;

export function getTime() {
    const date = new Date();
    const time = [date.getHours(), date.getMinutes()]
        .map((x) => {
            return x < 10 ? `0${x}` : x;
        })
        .join(':');
    return time;
}

export const ChatRequestData = (): ChatActions => ({
    type: CHAT_DATA_LOADING_REQUEST
});

export const addMessage = (message: string): ChatActions => ({
    type: ADD_MESSAGE,
    // eslint-disable-next-line no-plusplus
    id: nextMessageId++,
    message,
    time: getTime()
});

export const messageReceived = (message: string): ChatActions => ({
    type: MESSAGE_RECEIVED,
    // eslint-disable-next-line no-plusplus
    id: nextMessageId++,
    message,
    time: getTime()
});

// export const addUser = (name: string): ChatActions => ({
//     type: types.ADD_USER,
//     id: nextUserId++,
//     name
// });

// export const usersList = (users: any): ChatActions => ({
//     type: types.USERS_LIST,
//     users
// });

// export const login = (name: string): ChatActions => ({
//     type: types.LOGIN,
//     name
// });
