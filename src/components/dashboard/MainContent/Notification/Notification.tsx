/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Notification.scss';

const Notification: React.FC = () => {
    return (
        <div className="main-content">
            <div className="notifications">NOTIFICATIONS</div>
        </div>
    );
};

export default Notification;
