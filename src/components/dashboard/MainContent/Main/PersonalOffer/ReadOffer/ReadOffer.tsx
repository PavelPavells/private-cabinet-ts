/**
 * импорт зависимостей из Npm
 */
import React from 'react';

/**
 * импорт стилей
 */
import './ReadOffer.scss';

/**
 * интерфейс пропсов
 */
interface News {
    offer: any;
    offerId: number;
    handleOpenReadOffer: () => void;
}

const ReadNews: React.FC<News> = ({ offer, offerId, handleOpenReadOffer }: News) => {
    return (
        <div className="wrap__read">
            <div className="read">
                <div className="read__header">
                    <div onClick={handleOpenReadOffer} className="image" />
                </div>
                <div className="read__photo">
                    <div className="photo" />
                </div>
                <div className="read__article">
                    <div className="article__header">{offer[offerId - 1] ? offer[offerId - 1].offerTopic : null}</div>
                    <div className="article__text">{offer[offerId - 1] ? offer[offerId - 1].offerBody : 'Данной новости нет'}</div>
                </div>
            </div>
        </div>
    );
};

export default ReadNews;
