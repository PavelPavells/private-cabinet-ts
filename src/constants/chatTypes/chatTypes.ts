export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const CHAT_DATA_LOADING_REQUEST = 'CHAT_DATA_LOADING_REQUEST';
export const ADD_USER = 'ADD_USER';
export const USERS_LIST = 'USERS_LIST';

export interface ResponseStatus {
    code: number;
    result_message: string;
    action: string;
}

export interface ChatItem {
    message: string;
    id: number;
    author: string;
    time: string;
}

export type ChatItems = Array<ChatItem>;

// export interface RoleReq {
//     uuid: number;
// }

// export interface RoleRes {
//     payload: {
//         recordSet: {
//             content: Role;
//         };
//         pageable: {
//             sort: {
//                 sorted: boolean;
//                 unsorted: boolean;
//                 empty: boolean;
//             };
//             pageNumber: number;
//             pageSize: number;
//             offset: number;
//             unpaged: boolean;
//             paged: boolean;
//         };
//         totalPages: number;
//         last: boolean;
//         totalElements: number;
//         numberOfElements: number;
//         first: boolean;
//         number: number;
//         size: number;
//         sort: {
//             sorted: boolean;
//             unsorted: boolean;
//             empty: boolean;
//         };
//         empty: boolean;
//     };
//     response: ResponseStatus;
// }

export interface ChatState {
    isFetching: boolean;
    errorMessage: string;
    message: any;
}

interface ChatRequestData {
    type: typeof CHAT_DATA_LOADING_REQUEST;
}

interface ChatAddMessageSuccess {
    type: typeof ADD_MESSAGE;
    id: number;
    message: string;
    // author?: string;
    time: string;
}

interface ChatReceivedMessage {
    type: typeof MESSAGE_RECEIVED;
    id: number;
    message: string;
    // author?: string;
    time: string;
}

// export interface RoleInputs {
//     [key: string]: string;
// }

export type ChatActions = ChatRequestData | ChatAddMessageSuccess | ChatReceivedMessage;
