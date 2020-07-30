import React from 'react';
// import { Link } from 'react-router-dom';
import './500.scss';

const intervalServerError: React.FC = () => {
    return (
        <div className="error">
            <div className="error__image" />
            <div className="error__header">Отказано в доступе</div>
            <div className="error__description">Срок действия кода регистрации истек</div>
            <div className="error__link">
                <a href="https://carddex.ru" target="_blank">
                    Обратитесь в техническую поддуржку
                </a>
                для регистрации нового кода
            </div>
        </div>
    );
};
export default intervalServerError;
