import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchDataControl } from '../../../../../actions/catalogActions/catalogActions';
import { PersonalCabinet } from '../../../../../store/store';
import Loader from '../../../../../__utils__/Spinner';

import './Catalog.scss';

const Basket = lazy(() => import('../Basket/Basket'));
const FiltersCatalog = lazy(() => import('../FiltersCatalog/FiltersCatalog/FiltersCatalog'));
const CatalogItems = lazy(() => import('../CatalogItems/CatalogItems'));
const Pagination = lazy(() => import('../Pagination/Pagination'));

const Catalog: React.FC<any> = (): any => {
    const { isFetching, catalog } = useSelector((state: PersonalCabinet) => state.catalog, shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataControl());
    }, [dispatch]);

    const value: number = 50;

    if (!isFetching && catalog) {
        return (
            <Suspense fallback={<Loader />}>
                <div className="main-content">
                    <section className="catalog">
                        <p className="heading__text">Продукция CARDDEX</p>
                        <section className="catalog__basket">
                            <Basket />
                        </section>
                        <section className="catalog__main">
                            <FiltersCatalog value={value} />
                            <CatalogItems catalog={catalog} />
                        </section>
                        <section className="catalog__pagination">
                            <Pagination />
                        </section>
                    </section>
                </div>
            </Suspense>
        );
    }
    return <Loader />;
};

export default Catalog;
