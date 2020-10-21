/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useLayoutEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
// import { fetchDataNews } from '../../../../actions/newsActions';
import { fetchDataMain } from '../../../../actions/mainActions/mainActions';
import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';

/**
 * ********** Импорт типа store **********
 * */
import ReadNews from './ReadNews/ReadNews';
import ReadActualNews from './ReadActualNews/ReadActualNews';

/**
 * ********** Импорт типа store **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { MainListReq } from '../../../../constants/mainTypes/mainTypes';

/**
 * ********** Импорт файлов стилей **********
 * */
import './News.scss';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

const News = () => {
    const [openArticle, setOpenArticle] = useState(false);
    const [openActualArticle, setOpenActualArticle] = useState(false);
    const [actualArticleId, setActualArticleId] = useState(0);
    const [articleId, setArticleId] = useState(0);
    /**
     * ********** Импорт состояния из Redux **********
     * */
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    const { isFetching, news, offers } = useSelector((state: PersonalCabinet) => state.main, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * хук для обработки динамического роутинга
     * */
    // const { id } = useParams();

    /**
     * запрос данных с сервера
     * */
    useLayoutEffect(() => {
        const request: MainListReq = { uuid: user };
        dispatch(fetchDataMain(request));
        dispatch(fetchDataNotifications());
    }, []);

    const handleOpenReadActualArticle = (id?: any) => {
        setOpenActualArticle(!openActualArticle);
        setActualArticleId(id);
    };

    const handleOpenReadArticle = (id?: any) => {
        setOpenArticle(!openArticle);
        setArticleId(id);
    };

    // console.log(news);
    // console.log(offers);
    // console.log(id);
    if (!isFetching && news && offers && user) {
        return (
            <div className="main-content">
                <div className="news">
                    <div className="news__title">Новости</div>
                    <div className="news__subtitle">Актуальные</div>
                    <div className="news__actual">
                        {news.map((index) => {
                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <div
                                    // @ts-ignore
                                    onClick={() => handleOpenReadActualArticle(index.id)}
                                    key={index.id}
                                    className="actual__block"
                                >
                                    <div className="block__icon" />
                                    <div className="block__info">
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
                                    <div className="block__button">
                                        <svg width="57" height="25" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="12" x2="48.6111" y2="12" />
                                            <circle cx="44.4446" cy="12.5" r="12" />
                                            <path d="M41.3936 4.86133L48.7592 12.227L41.3936 19.5927" />
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                        {openActualArticle ? (
                            <ReadActualNews
                                news={news}
                                actualArticleId={actualArticleId}
                                handleOpenReadActualArticle={handleOpenReadActualArticle}
                            />
                        ) : null}
                    </div>
                    <div className="news__subtitle">Все новости</div>
                    <div className="news__list">
                        {offers.map((index) => {
                            return (
                                <div onClick={() => handleOpenReadArticle(index.id)} key={index.id} className="list__block">
                                    <div className="block__image">
                                        <div className="image__block--news">Новости</div>
                                    </div>
                                    <div className="block__date">{index.offerDate}</div>
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
                            );
                        })}
                        {openArticle ? (
                            <ReadNews offer={offers} articleId={articleId} handleOpenReadArticle={handleOpenReadArticle} />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
    return <Loader />;
};

export default News;
