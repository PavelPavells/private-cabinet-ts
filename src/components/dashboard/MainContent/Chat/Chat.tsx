import React, { useState, SyntheticEvent, ChangeEvent, useLayoutEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import { addMessage, ChatRequestData } from '../../../../actions/chatActions/chatActions';
import Message from './Message/Message';
import { PersonalCabinet } from '../../../../store/store';
// import Loader from '../../../../__utils__/Spinner';
import Fade from '../../../../__utils__/Fade/Fade';

import './Chat.scss';

interface Chat {
    isOpen: boolean;
    handleChangeIsOpenChat: any;
}

const Chat: React.FC<Chat> = ({ isOpen, handleChangeIsOpenChat }: Chat) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [msg, addMessages] = useState('');

    // const handleChangeIsOpenChat = (event: SyntheticEvent) => {
    //     event.preventDefault();
    //     setIsOpen(!isOpen);
    // };

    const { message } = useSelector((state: PersonalCabinet) => state.message, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(ChatRequestData());
    }, []);

    const stringNewLine = (event: any) => {
        if (event.key === 'Enter' && event.shiftKey) {
            // console.log(`EVENT: ${event.shiftKey}`);
            const textarea: any = document.querySelector('textarea');
            const value: any = `${textarea!.value}\n`;
            // console.log(value);
            event.preventDefault();
            addMessage(value);
        } else if (event.key === 'Enter' || event.type === 'click') {
            // console.log(`EVENT: ${event.key}`);
            event.preventDefault();
            dispatch(addMessage(msg));
            addMessages('');
        }
    };

    return (
        <>
            <Fade show={isOpen}>
                <div className="chat">
                    <div className="chat__header">
                        <div className="header__left">
                            <div className="left__photo" />
                            <div className="left__text">
                                <div className="text__name">Фесенко Лидия</div>
                                <div>
                                    {message.length ? (
                                        <div className="text__status green">online</div>
                                    ) : (
                                        <div className="text__status">offline</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="header__right">
                            <div onClick={handleChangeIsOpenChat} className="right__rollup" />
                            {/* <div className="right__close" /> */}
                        </div>
                    </div>
                    <div className="chat__window">
                        <>
                            {message &&
                                message.map((msgs: any) => {
                                    return <Message key={msgs.id} msgs={msgs} />;
                                })}
                        </>
                    </div>
                    <div className="chat__footer">
                        <div className="footer__add">+</div>
                        <textarea
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => addMessages(event.target.value)}
                            onKeyUp={stringNewLine}
                            value={msg}
                            className="footer__textarea"
                            autoFocus
                            placeholder="Введите сообщение..."
                        />
                        <button onClick={stringNewLine} type="submit" className="footer__btn">
                            <div className="button__image" />
                        </button>
                    </div>
                </div>
            </Fade>
            <Fade show={!isOpen}>
                <div onClick={handleChangeIsOpenChat} className="chat__rollup">
                    <div className="rollup__status">
                        <span>2</span>
                    </div>
                    <div className="rollup__image" />
                </div>
            </Fade>
        </>
    );
};

export default Chat;
