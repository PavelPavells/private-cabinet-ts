/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
// @ts-ignore
import CsvDownload from 'react-json-to-csv';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataOrders } from '../../../../actions/ordersActions';
import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { OrdersListReq } from '../../../../constants/ordersTypes';

/**
 * ********** Импорт utils **********
 * */
import Loader from '../../../../__utils__/Spinner';
import Popover from '../../../../__utils__/tablePopover/tablePopover';

/**
 * ********** импорт лого (лупа) для поля ввода **********
 * */
import Magnifier from '../../../../images/magnifier.svg';
// import Arrow from '../../../../images/arrow_input.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Orders.scss';

/**
 * Дополнительный хук для получения предыдущего значения
 * */
const usePreviousValue = (data: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = data;
    }, [data]);
    return ref.current;
};

const OrdersComponent = () => {
    const [value, setValue] = useState(null);
    const [page] = useState(0);
    const [limit] = useState(5000);
    const [sortBy] = useState(null);
    const [sortDirection, setSortDirection] = useState(0);
    const [groupBy] = useState(null);
    const [findBy] = useState(null);
    const [findValue, setFindValue] = useState('');
    const [selectedHeader, setSelectedHeader] = useState(0);
    const [exportModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);

    /**
     * ********** Импорт состояния pricelist из Redux **********
     * */
    const { ordersHeaders, ordersTable } = useSelector((state: PersonalCabinet) => state.orders, shallowEqual);
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);
    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * Дополнительный хук для получения предыдущего значения
     * */
    const prevSortDirection = usePreviousValue(+!sortDirection);

    /**
     * Запрос данных с сервера
     * */
    useEffect(() => {
        // @ts-ignore
        const request: OrdersListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid: user };
        dispatch(fetchDataOrders(request));
        dispatch(fetchDataNotifications());
    }, []);

    // const handleExportDocumentModal = (event: React.SyntheticEvent) => {
    //     event.currentTarget.classList.toggle('buttons--active');
    //     setExportModal(!exportModal);
    // };

    /**
     * Открыть/Закрыть инпуты быстрого поиска
     * */
    const togglerHideShowQuicSearchInput = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setFilterModal(!filterModal);
    };

    /**
     * Фильтрация по колонкам
     * */
    // @ts-ignore
    const filterOnColumns = (fieldName: string) => {
        setSortDirection(+!sortDirection);
        const filter: OrdersListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            sortBy: fieldName,
            sortDirection: prevSortDirection,
            groupBy,
            findValue,
            findBy,
            uuid: user
        };
        dispatch(fetchDataOrders(filter));
    };

    const sendDateFilter = (fieldName: any) => {
        const request: OrdersListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            sortBy,
            sortDirection,
            groupBy,
            findBy: fieldName,
            findValue,
            uuid: user
        };
        dispatch(fetchDataOrders(request));
    };

    const sendDateFilters = () => {
        const request: OrdersListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            sortBy,
            sortDirection,
            groupBy,
            findBy: null,
            findValue: null,
            uuid: user
        };
        dispatch(fetchDataOrders(request));
    };

    if (ordersHeaders && ordersTable) {
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
                                <CsvDownload data={ordersTable} className="button">
                                    Экспортировать данные
                                </CsvDownload>
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
                        <Popover>
                            <div className="orders__frame">
                                <div className="frame__table">
                                    {ordersHeaders.map((header: any, i: any) => {
                                        if (header.visible) {
                                            return (
                                                <div key={header.fieldName} className="table__column">
                                                    <div className="frame__caption">
                                                        <div
                                                            className={
                                                                selectedHeader === i ? 'wrap__index wrap__index--active' : 'wrap__index'
                                                            }
                                                            onClick={() => {
                                                                setSelectedHeader(i);
                                                                filterOnColumns(header.fieldName);
                                                            }}
                                                        >
                                                            <div className="index__text">{header.displayName}</div>
                                                            {i === 0 ? (
                                                                <div className="index__icon--sorting" />
                                                            ) : (
                                                                <div className="index__icon--filtering" />
                                                            )}
                                                        </div>
                                                        {filterModal ? (
                                                            <div className="search-wrapper">
                                                                {i === 0 ? (
                                                                    <input
                                                                        type="text"
                                                                        className="search-input"
                                                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                                                            setFindValue(event.target.value)}
                                                                        onKeyPress={() => sendDateFilter(header.fieldName)}
                                                                    />
                                                                ) : null}
                                                                {i === 1 ? (
                                                                    <DateTimeRangePicker
                                                                        disableClock
                                                                        format="dd.MM"
                                                                        onChange={setValue}
                                                                        value={value}
                                                                    />
                                                                ) : null}
                                                                {i === 2 ? (
                                                                    <input
                                                                        type="text"
                                                                        className="search-input"
                                                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                                                            setFindValue(event.target.value)}
                                                                    />
                                                                ) : null}
                                                                {i === 0 ? (
                                                                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                                                    <img
                                                                        src={Magnifier}
                                                                        onClick={() => sendDateFilter(header.fieldName)}
                                                                        alt=""
                                                                    />
                                                                ) : null}
                                                                {i === 1 ? (
                                                                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                                                    <img src={Magnifier} onClick={sendDateFilters} alt="" />
                                                                ) : null}
                                                                {i === 2 ? (
                                                                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                                                    <img
                                                                        src={Magnifier}
                                                                        onClick={() => sendDateFilter(header.fieldName)}
                                                                        alt=""
                                                                    />
                                                                ) : null}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                    {ordersTable.map((index: any) => {
                                                        return (
                                                            <div key={index.clientOrderUuid} className="column__item">
                                                                {/* {i === 0 && (
                                                                <div
                                                                    className="item__icon"
                                                                    onClick={() => handleChangePlusItems(index.clientOrderUuid)}
                                                                />
                                                            )} */}
                                                                <span>{index[header.fieldName]}</span>
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
                        </Popover>
                    </main>
                </div>
            </main>
        );
    }
    return <Loader />;
};

export default OrdersComponent;
