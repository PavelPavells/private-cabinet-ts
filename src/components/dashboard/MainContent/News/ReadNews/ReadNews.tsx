import React from 'react';
import { useParams } from 'react-router-dom';

import './ReadNews.scss';

const ReadNews = ({ openArticle, handleOpenReadArticle }: any) => {
    const id = useParams();
    console.log(id);
    return (
        <>
            {openArticle ? (
                <div className="wrap__read">
                    <div className="read">
                        <div className="read__header">
                            <div onClick={handleOpenReadArticle} className="image" />
                        </div>
                        <div className="read__photo">
                            <div className="photo" />
                        </div>
                        <div className="read__article">
                            <div className="article__header">CARDDEX снова работает в штатном режиме</div>
                            <div className="article__text">
                                Информируем, что наше производство работает в штатном режиме: мы по-прежнему осуществляем выполнение всех
                                заказов и отгрузок. Понимая текущую ситуацию, готовы оказать всестороннюю поддержку всем своим дилерам,
                                партнёрам и клиентам, провести развёрнутые консультации по продукции, обсудить условия отгрузки, доставки и
                                дальнейшего сотрудничества. Несмотря на экономическую ситуацию в стране, мы решили оставить цены на уровне
                                2019 года и не повышать их. А на ряд позиций у нас сейчас действуют специальные предложения. Все отгрузки
                                осуществляются по плану. У нас достаточно готовой продукции на складе, и при необходимости мы готовы
                                произвести
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default ReadNews;
