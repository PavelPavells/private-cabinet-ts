/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
// @ts-ignore
import CsvDownload from 'react-json-to-csv';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ru';
import { fetchDataShipment } from '../../../../actions/shipmentActions/shipmentActions';
import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';
import { PersonalCabinet } from '../../../../store/store';
import { ShipmentListReq } from '../../../../constants/shipmentTypes/shipmentTypes';
import Popover from '../../../../__utils__/tablePopover/tablePopover';
import Loader from '../../../../__utils__/Spinner';

import Magnifier from '../../../../images/magnifier.svg';
// import Arrow from '../../../../images/arrow_input.svg';

import './Shipment.scss';

const usePreviousValue = (data: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = data;
    }, [data]);
    return ref.current;
};

const ShipmentComponent = () => {
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
    const [selectedHeader, setSelectedHeader] = useState(1);
    const [exportModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);

    const { headersShipment, tableShipment, inputs } = useSelector((state: PersonalCabinet) => state.shipment, shallowEqual);
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    const dispatch = useDispatch();

    const prevSortDirection = usePreviousValue(+!sortDirection);

    useEffect(() => {
        const request: ShipmentListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid: user };
        dispatch(fetchDataShipment(request));
        dispatch(fetchDataNotifications());
    }, []);

    const togglerHideShowQuicSearchInput = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setFilterModal(!filterModal);
    };

    // @ts-ignore
    const filterOnColumns = (fieldName: string) => {
        setSortDirection(+!sortDirection);
        const filter: ShipmentListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            startSum: startSumValue,
            endSum: endSumValue,
            sortBy: fieldName,
            sortDirection: prevSortDirection,
            groupBy,
            findValue,
            findBy,
            uuid: user
        };
        dispatch(fetchDataShipment(filter));
    };

    const sendFilterInputText = (fieldName: any) => {
        const request: any = {
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
        dispatch(fetchDataShipment(request));
    };

    const sendCalendarFilter = () => {
        const request: ShipmentListReq = {
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
        dispatch(fetchDataShipment(request));
    };

    const sendDateFiltersSumValue = () => {
        const request: any = {
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
        dispatch(fetchDataShipment(request));
    };

    if (inputs && headersShipment && tableShipment) {
        return (
            <main className="main-content">
                <div className="shipment">
                    <header className="shipment__heading">
                        <div className="heading__text">Отгрузки продукции CARDDEX</div>
                        <div className="heading__buttons">
                            <div className="buttons buttons__filter" onClick={togglerHideShowQuicSearchInput}>
                                Быстрый фильтр
                            </div>
                            <div className="buttons-wrapper">
                                <CsvDownload data={tableShipment} className="button">
                                    Экспортировать данные
                                </CsvDownload>
                            </div>
                            <div className="search-wrapper">
                                <input type="text" className="search-input" placeholder="Быстрый поиск" />
                                <img src={Magnifier} alt="" className="search-icon" />
                            </div>
                        </div>
                        {exportModal ? (
                            <div className="shipment__modal">
                                <div className="modal__block shipment-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">PDF</div>
                                </div>
                                <div className="modal__block shipment-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">Excel</div>
                                </div>
                                <div className="modal__block shipment-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">LibreOffice</div>
                                </div>
                                <div className="modal__block shipment__block--left">
                                    <div className="block__button">Скачать</div>
                                </div>
                            </div>
                        ) : null}
                    </header>
                    <main className="shipment__table">
                        <Popover>
                            <div className="shipment__frame">
                                <div className="frame__table">
                                    {headersShipment.map((header, i) => {
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
                                                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                                                            setFindValue(event.target.value)}
                                                                        className="search-input"
                                                                        // onKeyPress={sendDateFilter}
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
                                                                {i === 0 ? (
                                                                    <img
                                                                        src={Magnifier}
                                                                        onClick={() => sendFilterInputText(header.fieldName)}
                                                                        alt=""
                                                                    />
                                                                ) : null}
                                                                {i === 1 ? (
                                                                    <img src={Magnifier} onClick={sendCalendarFilter} alt="" />
                                                                ) : null}
                                                                {i === 2 ? (
                                                                    <img src={Magnifier} onClick={sendDateFiltersSumValue} alt="" />
                                                                ) : null}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                    {tableShipment.map((index) => {
                                                        return (
                                                            <div key={index.shipmentUuid} className="column__item">
                                                                {/* {i === 0 && (
                                                        <div
                                                            className="item__icon"
                                                            // onClick={() => handleChangePlusItems(index.item_price_uuid)}
                                                        />
                                                        )} */}
                                                                <span>
                                                                    {
                                                                        // @ts-ignore
                                                                        index[header.fieldName]
                                                                    }
                                                                </span>
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

export default ShipmentComponent;
