import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDescription from '../../../../../images/Catalog/Item/image_description.svg';
import Basket from '../Basket/Basket';

import './CatalogItem.scss';

interface CatalogItem {
    catalog: any;
}

const CatalogItem: React.FC<CatalogItem> = ({ catalog }: CatalogItem) => {
    const { item } = useParams<any>();
    return (
        <div className="main-content">
            {catalog.map((index: any) => {
                if (index.id === Number(item)) {
                    return (
                        <>
                            <div className="wrap__catalog">
                                <p className="heading__text">Продукция CARDDEX</p>
                                <section className="catalog">
                                    <section className="catalog__basket">
                                        <Basket />
                                    </section>
                                    <section className="catalog__main">
                                        <div className="main__image">
                                            <img src={ImageDescription} alt="" className="image" />
                                        </div>
                                        <div className="main">INFO</div>
                                    </section>
                                </section>
                            </div>
                        </>
                    );
                }
            })}
        </div>
    );
};

export default CatalogItem;
