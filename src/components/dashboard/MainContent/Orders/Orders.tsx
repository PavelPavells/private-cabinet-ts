/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataOrders } from '../../../../actions/ordersActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { OrdersListReq } from '../../../../constants/ordersTypes';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

/**
 * ********** импорт лого (лупа) для поля ввода **********
 * */
import Magnifier from '../../../../images/magnifier.svg';
import Arrow from '../../../../images/arrow_input.svg';
import sortingColumn from '../../../../images/sorting_column.svg';
import filterColumn from '../../../../images/filter.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Orders.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const OrdersComponent = ({ uuid }) => {
    const [page] = useState(0);
    const [limit] = useState(30);
    const [sortBy] = useState(null);
    const [sortDirection] = useState(0);
    const [groupBy] = useState(null);
    const [findBy] = useState(null);
    const [findValue] = useState(null);
    const [exportModal, setExportModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);

    /**
     * ********** Импорт состояния pricelist из Redux **********
     * */
    const { ordersHeaders, ordersTable, isFetching } = useSelector((state: PersonalCabinet) => state.orders, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();
    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        const request: OrdersListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid };
        dispatch(fetchDataOrders(request));
    }, []);

    /**
     * запрос данных с сервера
     * */

    const handleExportDocumentModal = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setExportModal(!exportModal);
    };

    /**
     * Открыть/Закрыть инпуты быстрого поиска
     * */
    const togglerHideShowQuicSearchInput = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setFilterModal(!filterModal);
    };

    /**
     * Активация/Деактивация филтра колонки
     * */
    const toggleColumnFilter = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('wrap__index--active');
    };

    if (!isFetching && ordersHeaders && ordersTable) {
        return (
            <main className="main-content">
                <div className="orders">
                    <header className="orders__heading">
                        <div className="heading__text">Заказы CARDDEX</div>
                        <div className="heading__buttons">
                            <div className="buttons buttons__filter" onClick={togglerHideShowQuicSearchInput}>
                                Быстрый фильтр
                            </div>
                            <div className="buttons-wrapper">
                                <div className="buttons buttons__export" onClick={handleExportDocumentModal}>
                                    Экспортировать документ
                                </div>
                            </div>
                            <div className="search-wrapper">
                                <input type="text" className="search-input" placeholder="Быстрый поиск" />
                                <img src={Magnifier} alt="" className="search-icon" />
                            </div>
                        </div>
                        {exportModal ? (
                            <div className="orders__modal">
                                <div className="modal__block orders-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">PDF</div>
                                </div>
                                <div className="modal__block orders-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">Excel</div>
                                </div>
                                <div className="modal__block orders-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">LibreOffice</div>
                                </div>
                                <div className="modal__block orders__block--left">
                                    <div className="block__button">Скачать</div>
                                </div>
                            </div>
                        ) : null}
                    </header>
                    <main className="orders__table">
                        <div className="orders__frame">
                            <div className="frame__caption">
                                {ordersHeaders.map((header: any, i) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.fieldName} className="caption__wrap">
                                                <div className="wrap__index" onClick={toggleColumnFilter}>
                                                    <div className="index__text">{header.displayName}</div>
                                                    {i === 0 ? (
                                                        <img src={sortingColumn} alt="" className="index__icon--sorting" />
                                                    ) : (
                                                        <img src={filterColumn} alt="" className="index__icon--filtering" />
                                                    )}
                                                </div>
                                                {filterModal ? (
                                                    <div className="search-wrapper">
                                                        <input type="text" className="search-input" />
                                                        <div className="search-icon">
                                                            {i <= 1 ? <img src={Magnifier} alt="" /> : <img src={Arrow} alt="" />}
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        );
                                    }
                                    return '';
                                })}
                            </div>
                            <div className="frame__table">
                                {ordersHeaders.map((header: any, i: any) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.fieldName} className="table__column">
                                                {ordersTable.map((index: any) => {
                                                    return (
                                                        <div key={index.clientOrderUuid} className="column__item">
                                                            {i === 0 && (
                                                                <div
                                                                    className="item__icon"
                                                                    // onClick={() => handleChangePlusItems(index.item_price_uuid)}
                                                                />
                                                            )}
                                                            {index[header.fieldName]}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        );
                                    }
                                    return '';
                                })}
                            </div>
                        </div>
                    </main>
                </div>
            </main>
        );
    }
    return <Loader />;
};

export default OrdersComponent;
