/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
// import { fetchDataNews } from '../../../../actions/newsActions';

/**
 * ********** Импорт типа store **********
 * */
import { PersonalCabinet } from '../../../../store/store';

/**
 * ********** Импорт файлов стилей **********
 * */
import './News.scss';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

const News = () => {
    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    const { news, offers, isFetching } = useSelector((state: PersonalCabinet) => state.main, shallowEqual);

    if (!isFetching && user) {
        return (
            <div className="main-content">
                <div className="news">
                    <div className="news__title">Новости</div>
                    <div className="news__subtitle">Актуальные</div>
                    <div className="news__actual">
                        <div className="actual__block">
                            <div className="block__icon" />
                            <div className="block__info">
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
                            <div className="block__button">
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                        <div className="actual__block">
                            <div className="block__icon" />
                            <div className="block__info">
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
                            <div className="block__button">
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                        <div className="actual__block">
                            <div className="block__icon" />
                            <div className="block__info">
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
                            <div className="block__button">
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                        <div className="actual__block">
                            <div className="block__icon" />
                            <div className="block__info">
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
                            <div className="block__button">
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="news__subtitle">Все новости</div>
                    <div className="news__list">
                        <div className="list__block">
                            <div className="block__image">
                                <div className="image__block--news">Новости</div>
                            </div>
                            <div className="block__date">10 Августа 2020</div>
                            <div className="block__text">CARDDEX снова работает в штатном режиме</div>
                            <div className="block__subtext">Информируем, что наше производство работаетв штатном режиме</div>
                            <div className="block__button">
                                <div>Подробнее</div>
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                        <div className="list__block">
                            <div className="block__image">
                                <div className="image__block--news">Новости</div>
                            </div>
                            <div className="block__date">10 Августа 2020</div>
                            <div className="block__text">CARDDEX снова работает в штатном режиме</div>
                            <div className="block__subtext">Информируем, что наше производство работаетв штатном режиме</div>
                            <div className="block__button">
                                <div>Подробнее</div>
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                        <div className="list__block">
                            <div className="block__image">
                                <div className="image__block--news">Новости</div>
                            </div>
                            <div className="block__date">10 Августа 2020</div>
                            <div className="block__text">CARDDEX снова работает в штатном режиме</div>
                            <div className="block__subtext">Информируем, что наше производство работаетв штатном режиме</div>
                            <div className="block__button">
                                <div>Подробнее</div>
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                        <div className="list__block">
                            <div className="block__image">
                                <div className="image__block--news">Новости</div>
                            </div>
                            <div className="block__date">10 Августа 2020</div>
                            <div className="block__text">CARDDEX снова работает в штатном режиме</div>
                            <div className="block__subtext">Информируем, что наше производство работаетв штатном режиме</div>
                            <div className="block__button">
                                <div>Подробнее</div>
                                <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="12" x2="48.6111" y2="12" />
                                    <circle cx="44.4446" cy="12.5" r="12" />
                                    <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <Loader />;
};

export default News;
