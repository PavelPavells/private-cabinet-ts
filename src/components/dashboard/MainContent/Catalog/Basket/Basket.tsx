import React from 'react';
import BasketIcon from '../../../../../images/Catalog/Basket/basket.svg';

const Basket: React.FC<any> = (): any => {
    return (
        <>
            <div className="basket__block">Количество товаров: 2</div>
            <div className="basket__block">Сумма: 65 800Р</div>
            <button type="submit" className="basket__block">
                Перейти в корзину
                <img src={BasketIcon} alt="" className="icon" />
            </button>
        </>
    );
};

export default Basket;
