import { ADD_MESSAGE, ADD_USER } from '../../constants/chatTypes/chatTypes';
import { messageReceived } from '../../actions/chatActions/chatActions';

const setupSocket = (dispatch: any, username: any) => {
    // create connection to web-socket server
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
        socket.send(
            JSON.stringify({
                type: ADD_USER,
                name: username
            })
        );
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
            case ADD_MESSAGE:
                dispatch(messageReceived(data.message));
                break;
            // case ADD_USER:
            //     dispatch(addUser(data.name));
            //     break;
            // case USERS_LIST:
            //     dispatch(usersList(data.users));
            //     break;
            default:
                break;
        }
    };

    return socket;
};

export default setupSocket;
