/**
 * импорт зависимостей из Npm
 */
import React from 'react';

/**
 * импорт стилей
 */
import './ReadNews.scss';

/**
 * интерфейс пропсов
 */
interface News {
    offer: any;
    articleId: number;
    handleOpenReadArticle: () => void;
}

const ReadNews: React.FC<News> = ({ offer, articleId, handleOpenReadArticle }: News) => {
    return (
        <div className="wrap__read">
            <div className="read">
                <div className="read__header">
                    <div onClick={handleOpenReadArticle} className="image" />
                </div>
                <div className="read__photo">
                    <div className="photo" />
                </div>
                <div className="read__article">
                    <div className="article__header">{offer[articleId - 1] ? offer[articleId - 1].offerTopic : null}</div>
                    <div className="article__text">{offer[articleId - 1] ? offer[articleId - 1].offerBody : 'Данной новости нет'}</div>
                </div>
            </div>
        </div>
    );
};

export default ReadNews;
