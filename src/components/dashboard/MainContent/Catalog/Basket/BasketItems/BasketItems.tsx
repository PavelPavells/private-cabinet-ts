import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { PersonalCabinet } from '../../../../../../store/store';
import CatalogItems from '../../CatalogItems/CatalogItems';
import Basket from '../Basket';
import Back from '../Back/Back';

const BasketItems = () => {
    const { catalog } = useSelector((state: PersonalCabinet) => state.catalog, shallowEqual);
    return (
        <div className="main-content">
            <div className="wrap__catalog">
                <p className="heading__text">Продукция CARDDEX</p>
                <section className="back">
                    <Back />
                </section>
                <section className="catalog">
                    <div className="main">
                        <CatalogItems catalog={catalog} />
                    </div>
                    <section className="catalog__basket">
                        <Basket />
                    </section>
                </section>
            </div>
        </div>
    );
};

export default BasketItems;
