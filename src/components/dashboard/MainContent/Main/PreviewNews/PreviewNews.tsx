/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';

/**
 * ********** Импорт файлов стилей **********
 * */
import './PreviewNews.scss';

const PreviewNews = () => {
    return (
        <div className="preview__news">
            <div className="news__icon" />
            <div className="news__info">
                <div className="info__title">
                    <span className="offer">Новости</span>
                    <span className="date">10 Августа 2020</span>
                </div>
                <div className="info__subtitle">
                    <span>Автоматический шлагбаум «RBA» по выгодной цене</span>
                </div>
                <div className="info__description">
                    <span>До 31 августа 2020 года мы снижаем цену!</span>
                </div>
            </div>
            <div className="news__button">
                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                    <line y1="12" x2="48.6111" y2="12" />
                    <circle cx="44.4446" cy="12.5" r="12" />
                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                </svg>
            </div>
        </div>
    );
};

export default PreviewNews;
