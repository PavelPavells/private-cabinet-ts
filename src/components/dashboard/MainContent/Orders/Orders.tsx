/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
// @ts-ignore
import CsvDownload from 'react-json-to-csv';

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
    const [value, onChange] = useState([new Date(), new Date()]);
    const [page] = useState(0);
    const [limit] = useState(5000);
    const [sortBy] = useState(null);
    const [sortDirection, setSortDirection] = useState(0);
    const [groupBy] = useState(null);
    const [findBy] = useState(null);
    const [findValue] = useState(null);
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
            sortBy: fieldName,
            sortDirection: prevSortDirection,
            groupBy,
            findValue,
            findBy,
            uuid: user
        };
        dispatch(fetchDataOrders(filter));
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
                                    Экспортировать документ
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
                                                                {i === 0 || i === 2 ? <input type="text" className="search-input" /> : null}
                                                                {i === 1 ? (
                                                                    <DateTimeRangePicker
                                                                        disableClock
                                                                        format="dd.MM"
                                                                        onChange={onChange}
                                                                        value={value}
                                                                    />
                                                                ) : null}
                                                                {i === 0 || i === 2 ? <img src={Magnifier} alt="" /> : null}
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
