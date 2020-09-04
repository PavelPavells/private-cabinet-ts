/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

/**
 * ********** Импорт типа store **********
 * */
import { PersonalCabinet } from '../../../../../store/store';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../../__utils__/Spinner';

/**
 * ********** Импорт файлов стилей **********
 * */
import './PreviewNews.scss';

const PreviewNews = () => {
    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { isFetching, news } = useSelector((state: PersonalCabinet) => state.main, shallowEqual);
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    if (!isFetching && news && user) {
        return (
            <>
                {news.slice(0, 1).map((index) => {
                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index.id} className="block-element">
                            <div className="preview__news">
                                <div className="news__icon" />
                                <div className="news__info">
                                    <div className="info__title">
                                        <span className="offer">Новости</span>
                                        <span className="date">{index.newDate}</span>
                                    </div>
                                    <div className="info__subtitle">
                                        <span>{index.newTopic}</span>
                                    </div>
                                    <div className="info__description">
                                        <span>{index.newBody}</span>
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
                        </div>
                    );
                })}
            </>
        );
    }
    return <Loader />;
};

export default PreviewNews;
