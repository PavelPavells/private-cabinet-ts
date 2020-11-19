import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDataControl } from '../../../../../actions/catalogActions/catalogActions';
import { PersonalCabinet } from '../../../../../store/store';
import Loader from '../../../../../__utils__/Spinner';

import './Catalog.scss';

const Basket = lazy(() => import('../Basket/Basket'));
const FiltersCatalog = lazy(() => import('../FiltersCatalog/FiltersCatalog/FiltersCatalog'));
const CatalogItems = lazy(() => import('../CatalogItems/CatalogItems'));
const Pagination = lazy(() => import('../Pagination/Pagination'));
const BasketItems = lazy(() => import('../Basket/BasketItems/BasketItems'));

const Catalog: React.FC<any> = (): any => {
    const { isFetching, catalog } = useSelector((state: PersonalCabinet) => state.catalog, shallowEqual);

    const dispatch = useDispatch();
    const { basket } = useParams<any>();

    useEffect(() => {
        dispatch(fetchDataControl());
    }, [dispatch]);

    const value: number = 50;

    if (basket && catalog) {
        return <BasketItems />;
    }

    if (!isFetching && catalog && !basket) {
        return (
            <Suspense fallback={<Loader />}>
                <div className="main-content">
                    <div className="wrap__catalog">
                        <p className="heading__text">Продукция CARDDEX</p>
                        <section className="catalog">
                            <section className="catalog__basket">
                                <Basket />
                            </section>
                            <section className="catalog__main">
                                <FiltersCatalog value={value} />
                                <div className="main">
                                    <CatalogItems catalog={catalog} />
                                    <section className="catalog__pagination">
                                        <Pagination />
                                    </section>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </Suspense>
        );
    }
    return <Loader />;
};

export default Catalog;
