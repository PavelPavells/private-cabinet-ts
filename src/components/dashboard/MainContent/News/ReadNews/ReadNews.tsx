import React from 'react';

import './ReadNews.scss';

interface News {
    offer: any;
    articleId: number;
    handleOpenReadArticle: () => void;
}

const ReadNews: React.FC<News> = ({ offer, articleId, handleOpenReadArticle }: News) => {
    return (
        <section className="wrap__read">
            <div className="read__news">
                <div className="read__header">
                    <div onClick={handleOpenReadArticle} className="image" />
                </div>
                <div className="read__photo">
                    <div className="photo" />
                </div>
                <div className="read__article">
                    <div className="article__header">{offer[articleId - 1] ? offer[articleId - 1].offerTopic : null}</div>
                    <div className="article__text">
                        {offer[articleId - 1] ? <p>{offer[articleId - 1].offerBody}</p> : <div>Данной новости нет</div>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadNews;
