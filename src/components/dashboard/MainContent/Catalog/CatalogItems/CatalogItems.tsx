import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import Basket from '../../../../../images/Catalog/Basket/basket.svg';
import Delete from '../../../../../images/Catalog/Basket/delete.svg';
import Equipment from '../../../../../images/Catalog/Items/equipment.png';
import './CatalogItems.scss';

interface CatalogItems {
    catalog: any;
}

const CatalogItems: React.FC<CatalogItems> = ({ catalog }: CatalogItems) => {
    const { basket } = useParams<any>();
    const match = useRouteMatch<any>();
    return (
        <section className="items__block">
            <div className="block__headings">
                <div className="headings__item">Фото</div>
                <div className="headings__item">Товар</div>
                <div className="headings__item">Количество</div>
                <div className="headings__item">Цена</div>
                <div className="headings__item">Сумма</div>
            </div>
            <ul className="block__items">
                {catalog.map((index: any) => {
                    return (
                        <li key={index.id} className="item">
                            <div className="item__photo">
                                <img src={Equipment} alt="" className="photo" />
                            </div>
                            <div className="item__name">
                                <p className="name__type">{index.type}</p>
                                <Link to={`${match.url}/page/${index.id}`} className="name">
                                    {index.name}
                                </Link>
                            </div>
                            <div className="item__value">
                                <div className="value__number">1</div>
                                <div className="value__choose">-</div>
                                <div className="value__choose">+</div>
                            </div>
                            <div className="item__sale">
                                <div className="sale">{index.currentPrice}</div>
                                <div className="sale">{index.salePrice}</div>
                            </div>
                            <div className="item__price">{index.salePrice}</div>
                            <div className="item__icon">
                                <img src={basket ? Delete : Basket} alt="" className="icon" />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default CatalogItems;
