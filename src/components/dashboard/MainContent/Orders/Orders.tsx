/* eslint-disable no-useless-escape */
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
// @ts-ignore
import CsvDownload from 'react-json-to-csv';
import { fetchDataOrders } from '../../../../actions/ordersActions/ordersActions';
import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';
import { PersonalCabinet } from '../../../../store/store';
import { OrdersListReq } from '../../../../constants/ordersTypes/ordersTypes';
import Loader from '../../../../__utils__/Spinner';
import Popover from '../../../../__utils__/tablePopover/tablePopover';

import Magnifier from '../../../../images/magnifier.svg';
// import Arrow from '../../../../images/arrow_input.svg';

import './Orders.scss';

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
    const [startSumValue, setStartSumValue] = useState('');
    const [endSumValue, setEndSumValue] = useState('');
    const [findValue, setFindValue] = useState('');
    const [selectedHeader, setSelectedHeader] = useState(0);
    const [exportModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);

    const { ordersHeaders, ordersTable } = useSelector((state: PersonalCabinet) => state.orders, shallowEqual);
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    const dispatch = useDispatch();

    const prevSortDirection = usePreviousValue(+!sortDirection);

    useEffect(() => {
        // @ts-ignore
        const request: OrdersListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid: user };
        dispatch(fetchDataOrders(request));
        dispatch(fetchDataNotifications());
    }, []);

    const togglerHideShowQuicSearchInput = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setFilterModal(!filterModal);
    };

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
            startSum: startSumValue,
            endSum: endSumValue,
            sortBy: fieldName,
            sortDirection: prevSortDirection,
            groupBy,
            findValue,
            findBy: fieldName,
            uuid: user
        };
        dispatch(fetchDataOrders(filter));
    };

    const sendFilterInputText = (fieldName: any) => {
        const request: OrdersListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            startSum: startSumValue,
            endSum: endSumValue,
            sortBy: fieldName,
            sortDirection,
            groupBy,
            findBy: fieldName,
            findValue,
            uuid: user
        };
        dispatch(fetchDataOrders(request));
    };

    const sendCalendarFilter = () => {
        const request: OrdersListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            startSum: startSumValue,
            endSum: endSumValue,
            sortBy,
            sortDirection,
            groupBy,
            findBy: null,
            findValue: null,
            uuid: user
        };
        dispatch(fetchDataOrders(request));
    };

    const sendDateFiltersSumValue = () => {
        const request: OrdersListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            startSum: startSumValue,
            endSum: endSumValue,
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
                    <div className="orders__table">
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
                                                                        // eslint-disable-next-line prettier/prettier
                                                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFindValue(event.target.value)}
                                                                        // onKeyPress={() => sendDateFilter(header.fieldName)}
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
                                                                        // eslint-disable-next-line prettier/prettier
                                                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setFindValue(event.target.value)}
                                                                        // onKeyPress={(event) => {
                                                                        //     if (event.key === 'Enter') {
                                                                        //         sendDateFilter(header.fieldName);
                                                                        //     }
                                                                        // }}
                                                                    />
                                                                ) : null}
                                                                {i === 3 ? (
                                                                    <div className="wrap__search">
                                                                        <div className="search__range">от</div>
                                                                        <input
                                                                            type="text"
                                                                            className="search-input"
                                                                            // eslint-disable-next-line prettier/prettier
                                                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setStartSumValue(event.target.value)}
                                                                            style={{ width: '45px', borderBottom: '2px solid #EFEFEF' }}
                                                                        />
                                                                        <div className="search__range">до</div>
                                                                        <input
                                                                            type="text"
                                                                            className="search-input"
                                                                            // eslint-disable-next-line prettier/prettier
                                                                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEndSumValue(event.target.value)}
                                                                            style={{ width: '45px', borderBottom: '2px solid #EFEFEF' }}
                                                                        />
                                                                    </div>
                                                                ) : null}
                                                                {/** иконки фильтраций */}
                                                                {i === 0 ? (
                                                                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                                                    <img
                                                                        className="search__image"
                                                                        src={Magnifier}
                                                                        onClick={() => sendFilterInputText(header.fieldName)}
                                                                        alt=""
                                                                    />
                                                                ) : null}
                                                                {i === 1 ? (
                                                                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                                                    <img
                                                                        className="search__image"
                                                                        src={Magnifier}
                                                                        onClick={sendCalendarFilter}
                                                                        alt=""
                                                                    />
                                                                ) : null}
                                                                {i === 2 ? (
                                                                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                                                    <img
                                                                        className="search__image"
                                                                        src={Magnifier}
                                                                        onClick={() => sendFilterInputText(header.fieldName)}
                                                                        alt=""
                                                                    />
                                                                ) : null}
                                                                {i === 3 ? (
                                                                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                                                                    <img
                                                                        className="search__image"
                                                                        src={Magnifier}
                                                                        onClick={sendDateFiltersSumValue}
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
                    </div>
                </div>
            </main>
        );
    }
    return <Loader />;
};

export default OrdersComponent;
