/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, SyntheticEvent } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
/**
 * ********** Импорт экшенов **********
 * */
// import { fetchDataChat } from '../../../../actions/chatActions';

/**
 * ********** Импорт типов **********
 * */
// import { PersonalCabinet } from '../../../../store/store';

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

    const handleChangeIsOpenChat = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };
    const elem = document.querySelector('body');
    // @ts-ignore
    console.log(elem.clientHeight);
    return (
        <Draggable bounds={{ top: -600, left: -1000, right: 0, bottom: 0 }}>
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
                            <div className="right__close" />
                        </div>
                    </div>
                    <div className="chat__window">WINDOW</div>
                    <div className="chat__footer">
                        <input type="text" className="footer__input" />
                        <button type="submit" className="footer__button">
                            Отправить
                        </button>
                    </div>
                </div>
            ) : null}
        </Draggable>
    );
};

export default Chat;
