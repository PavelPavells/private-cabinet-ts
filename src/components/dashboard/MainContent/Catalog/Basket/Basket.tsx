import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import BasketIcon from '../../../../../images/Catalog/Basket/basket.svg';

const Basket: React.FC<any> = (): any => {
    // eslint-disable-next-line no-shadow
    const match = useRouteMatch<{}>();
    return (
        <>
            <div className="basket__block">Количество товаров: 2</div>
            <div className="basket__block">Сумма: 65 800Р</div>
            <Link to={`${match.url}/basket`} type="submit" className="basket__block">
                Перейти в корзину
                <img src={BasketIcon} alt="" className="icon" />
            </Link>
        </>
    );
};

export default Basket;
