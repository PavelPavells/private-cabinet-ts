/* eslint-disable react/no-danger */
import React from 'react';

interface CardItem {
    catalog: any;
}

const Card: React.FC<CardItem> = ({ catalog }: CardItem) => {
    return (
        <section className="card">
            <div className="card__header">
                <div className="header__blocks">
                    <div className="blocks__model">Модель</div>
                    <div className="blocks__naming">{catalog.name}</div>
                </div>
                <div className="header__blocks">
                    <div className="blocks__model">Серия</div>
                    <div className="blocks__naming">{catalog.seria}</div>
                </div>
                <div className="header__blocks">
                    <div className="blocks__model">Стоимость</div>
                    <div className="blocks__naming">{catalog.salePrice}</div>
                </div>
            </div>
            <div className="card__prices">
                <div className="prices">
                    <div className="prices__text">
                        Цена без скидки:
                        <span>{catalog.currentPrice}</span>
                    </div>
                </div>
                <div className="prices">
                    <div className="prices__text">
                        Цена со скидкой:
                        <span>{catalog.salePrice}</span>
                    </div>
                </div>
            </div>
            <div className="card__heading">Описание</div>
            <div className="card__description" dangerouslySetInnerHTML={{ __html: catalog.description }} />
            <div className="card__heading">Комплект поставки</div>
            <div className="card__kit">
                {catalog.kit.map((index: any) => {
                    return (
                        <li key={index.id}>
                            <span className="kit__image">+</span>
                            <span className="kit__text">{index}</span>
                        </li>
                    );
                })}
            </div>
            <div className="card__footer">
                <div className="footer__block">
                    <div className="block__text">
                        Количество:
                        <span>{catalog.id}</span>
                    </div>
                </div>
                <div className="footer__block">
                    <div className="block__button">+</div>
                    <div className="block__button">-</div>
                </div>
                <div className="footer__block">
                    <div className="block__text">
                        Сумма:
                        <span>{catalog.currentPrice}</span>
                    </div>
                </div>
                <div className="footer__button">Добавить</div>
            </div>
        </section>
    );
};

export default Card;
