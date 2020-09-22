/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, SyntheticEvent, ChangeEvent, useLayoutEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
/**
 * ********** Импорт экшенов **********
 * */
import { addMessage, ChatRequestData } from '../../../../actions/chatActions/chatActions';

/**
 * ********** Импорт комопнентов **********
 */
import Message from './Message/Message';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
// import Loader from '../../../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */

import './Chat.scss';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [msg, addMessages] = useState('');
    const handleChangeIsOpenChat = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    const { message } = useSelector((state: PersonalCabinet) => state.message, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(ChatRequestData());
    }, []);

    const sendMessage = (event: any) => {
        if (event.key === 'Enter' || event.type === 'click') {
            if (msg !== '') {
                dispatch(addMessage(msg));
            }
            addMessages('');
        }
    };

    // console.log(message);
    return (
        <Draggable
            bounds={{
                top: -window.innerHeight / 1.5,
                left: -window.innerWidth / 1.5,
                right: 0,
                bottom: 0
            }}
        >
            {isOpen ? (
                <div className="chat">
                    <div className="chat__header">
                        <div className="header__left">
                            <div className="left__photo" />
                            <div className="left__text">
                                <div className="text__name">Фесенко Лидия</div>
                                <div className="text__status">online</div>
                            </div>
                        </div>
                        <div className="header__right">
                            <div className="right__rollup" />
                            <div onClick={handleChangeIsOpenChat} className="right__close" />
                        </div>
                    </div>
                    <div className="chat__window">
                        <>
                            {
                                // @ts-ignore
                                message &&
                                    message.map((msgs: any) => {
                                        return <Message key={msgs.id} msgs={msgs} />;
                                    })
                            }
                        </>
                    </div>
                    <div className="chat__footer">
                        <div className="footer__add">+</div>
                        <input
                            onChange={(event: ChangeEvent<HTMLInputElement>) => addMessages(event.target.value)}
                            onKeyPress={sendMessage}
                            value={msg}
                            type="text"
                            className="footer__input"
                            placeholder="Введите ваше сообщение..."
                        />
                        <button onClick={sendMessage} type="submit" className="footer__btn">
                            <div className="button__image" />
                        </button>
                    </div>
                </div>
            ) : (
                <span />
            )}
        </Draggable>
    );
};

export default Chat;
