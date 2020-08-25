import React from 'react';
import { Link } from 'react-router-dom';
import './404.scss';
import { shallowEqual, useSelector } from 'react-redux';
import { PersonalCabinet } from '../../store/store';

const NotFound = () => {
    const { errorResult } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    return (
        <div className="error">
            <div className="error__image" />
            <div className="error__header">Доступ к ресурсу отклонен</div>
            {errorResult.code === 4 ? (
                <div>
                    <div className="error__description">Запрошенная вами страница не найдена</div>
                    <div className="error__code">{errorResult.message}</div>
                    <Link to="/" className="error__button">
                        Авторизуйтесь
                    </Link>
                    <div className="error__link">
                        Или перейдите на
                        <a href="https://carddex.ru" target="_blank" rel="noopener noreferrer">
                            официальный сайт
                        </a>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="error__code">{errorResult.message}</div>
                </div>
            )}
        </div>
    );
};

export default NotFound;
