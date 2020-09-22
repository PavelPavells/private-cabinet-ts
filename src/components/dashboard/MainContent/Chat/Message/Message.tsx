import React from 'react';

import './Message.scss';

const Message = ({ id, msgs }: any) => {
    return (
        <>
            {msgs ? (
                <div key={id} className="message">
                    {msgs.message}
                    <div className="message__time">{msgs.time}</div>
                </div>
            ) : (
                <div key={id} className="message">
                    Нет сообщений
                </div>
            )}
        </>
    );
};

export default Message;
