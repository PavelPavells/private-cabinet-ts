import React, { useRef, useEffect } from 'react';

import './Message.scss';

const Message = ({ id, msgs }: any) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current!.scrollIntoView({ behavior: 'smooth' });
    }, [msgs]);

    return (
        <>
            {msgs ? (
                <div className="wrap__message">
                    <div key={id} ref={messagesEndRef} className="message">
                        {/** @ts-ignore */}
                        {msgs.message}
                        <div className="message__time">{msgs.time}</div>
                    </div>
                    <div className="message__right">
                        <div className="message__more" />
                        <div className="message__photo" />
                    </div>
                </div>
            ) : (
                <div className="wrap__message">
                    <div key={id} ref={messagesEndRef} className="message">
                        Что-то пошло не так
                    </div>
                    <div className="message__photo" />
                </div>
            )}
        </>
    );
};

export default Message;
