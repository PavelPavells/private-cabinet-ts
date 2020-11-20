import React from 'react';
import { useRouteMatch, useParams, Link } from 'react-router-dom';
import BasketIcon from '../../../../../images/Catalog/Basket/basket.svg';
import './Basket.scss';

const Basket: React.FC<any> = (): any => {
    // eslint-disable-next-line no-shadow
    const match = useRouteMatch<{}>();
    const { basket } = useParams<any>();
    return (
        <>
            <div className="basket__block">Количество товаров: 2</div>
            <div className="basket__block">Сумма: 65 800Р</div>
            <Link to={`${match.url}/basket`} type="submit" className="basket__block">
                <span>{basket ? 'Оформить заказ' : 'Перейти в корзину'}</span>
                <img src={basket ? '' : BasketIcon} alt="" className="icon" />
            </Link>
        </>
    );
};

export default Basket;
