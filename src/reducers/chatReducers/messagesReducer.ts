import { ADD_MESSAGE, MESSAGE_RECEIVED, ChatActions, ChatState } from '../../constants/chatTypes/chatTypes';

const initialState: ChatState = {
    isFetching: false,
    message: [],
    // users: [],
    errorMessage: ''
};

export default function messagesReducer(state = initialState, action: ChatActions): ChatState {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                isFetching: false,
                // @ts-ignore
                message: state.message.concat({
                    id: action.id,
                    message: action.message,
                    time: action.time
                }),
                errorMessage: ''
            };
        case MESSAGE_RECEIVED:
            return {
                isFetching: false,
                // @ts-ignore
                message: state.message.concat({
                    id: action.id,
                    message: action.message,
                    time: action.time
                }),
                errorMessage: ''
            };
        default:
            // @ts-ignore
            return state;
    }
}

// export function usersReducer(state = [], action) {
//     switch (action.type) {
//         case ADD_USER:
//             return state.concat([{ name: action.name, id: action.id }]);
//         case types.USERS_LIST:
//             return action.users;
//         default:
//             return state;
//     }
// }
