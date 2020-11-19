import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { PersonalCabinet } from '../../../../../../store/store';
import CatalogItems from '../../CatalogItems/CatalogItems';
import Basket from '../Basket';

const BasketItems = () => {
    const { catalog } = useSelector((state: PersonalCabinet) => state.catalog, shallowEqual);
    return (
        <div className="main-content">
            <div className="wrap__catalog">
                <p className="heading__text">Продукция CARDDEX</p>
                <section className="catalog">
                    <section className="catalog__basket">
                        <Basket />
                    </section>
                    <div className="main">
                        <CatalogItems catalog={catalog} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BasketItems;
