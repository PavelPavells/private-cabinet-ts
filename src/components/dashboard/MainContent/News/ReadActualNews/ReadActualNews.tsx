import React from 'react';

import './ReadActualNews.scss';

interface News {
    news: any;
    actualArticleId: any;
    handleOpenReadActualArticle: () => void;
}

const ReadActualNews: React.FC<News> = ({ news, actualArticleId, handleOpenReadActualArticle }: News) => {
    return (
        <div className="wrap__read">
            {news.map((idx: any) => {
                if (idx.id === actualArticleId) {
                    return (
                        <div key={idx.id} className="read__news">
                            <div className="read__header">
                                <div onClick={handleOpenReadActualArticle} className="image" />
                            </div>
                            <div className="read__photo">
                                <div className="photo" />
                            </div>
                            <div className="read__article">
                                <div className="article__header">
                                    {news[actualArticleId - 1] ? news[actualArticleId - 1].newTopic : null}
                                </div>
                                <div className="article__text">
                                    {news[actualArticleId - 1] ? news[actualArticleId - 1].newBody : 'Данной новости нет'}
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default ReadActualNews;
