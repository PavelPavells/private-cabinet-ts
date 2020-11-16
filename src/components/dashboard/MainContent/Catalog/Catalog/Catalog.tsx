import React, { Suspense, lazy } from 'react';
import Loader from '../../../../../__utils__/Spinner';

import './Catalog.scss';

const Basket = lazy(() => import('../Basket/Basket'));
const FiltersCatalog = lazy(() => import('../FiltersCatalog/FiltersCatalog/FiltersCatalog'));
const CatalogItems = lazy(() => import('../CatalogItems/CatalogItems'));
const Pagination = lazy(() => import('../Pagination/Pagination'));

const Catalog: React.FC<any> = (): any => {
    const items = [1, 2, 3, 4, 5];
    return (
        <Suspense fallback={<Loader />}>
            <div className="main-content">
                <section className="catalog">
                    <p className="heading__text">Продукция CARDDEX</p>
                    <section className="catalog__basket">
                        <Basket />
                    </section>
                    <section className="catalog__main">
                        <FiltersCatalog />
                        <CatalogItems items={items} />
                    </section>
                    <section className="catalog__pagination">
                        <Pagination />
                    </section>
                </section>
            </div>
        </Suspense>
    );
};

export default Catalog;
