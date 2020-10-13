/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
// @ts-ignore
import CsvDownload from 'react-json-to-csv';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ru';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataPayment } from '../../../../actions/paymentActions';
import { fetchDataNotifications } from '../../../../actions/notificationsActions/notificationsActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { PaymentListReq } from '../../../../constants/paymentsTypes';

/**
 * ********** Импорт utils **********
 * */
import Popover from '../../../../__utils__/tablePopover/tablePopover';
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
import './Payment.scss';

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

const PaymentComponent = () => {
    const [value, setValue] = useState(null);
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
    const { headersPayment, tablePayment } = useSelector((state: PersonalCabinet) => state.payment, shallowEqual);
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
        const request: PaymentListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid: user };
        dispatch(fetchDataPayment(request));
        dispatch(fetchDataNotifications());
    }, []);

    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */
    // const handleExportDocumentModal = (event: MouseEvent | any) => {
    //     event.currentTarget.classList.toggle('buttons--active');
    //     setExportModal(!exportModal);
    //     const element = document.getElementsByClassName('buttons__export');
    //     if (event.target !== element) {
    //         setExportModal(!exportModal);
    //     }
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
        const filter: PaymentListReq = {
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
        dispatch(fetchDataPayment(filter));
    };

    const sendDateFilter = () => {
        const request: PaymentListReq = {
            page,
            limit,
            // @ts-ignore
            startDate: value ? value[0].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            // @ts-ignore
            endDate: value ? value[1].toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1') : null,
            sortBy,
            sortDirection,
            groupBy,
            findBy,
            findValue,
            uuid: user
        };
        dispatch(fetchDataPayment(request));
    };

    if (headersPayment && tablePayment) {
        return (
            <main className="main-content">
                <div className="payment">
                    <header className="payment__heading">
                        <div className="heading__text">Платежи CARDDEX</div>
                        <div className="heading__buttons">
                            <div className="buttons buttons__filter" onClick={togglerHideShowQuicSearchInput}>
                                Быстрый фильтр
                            </div>
                            <div className="buttons-wrapper">
                                <CsvDownload data={tablePayment} className="button">
                                    Экспортировать данные
                                </CsvDownload>
                            </div>
                            <div className="search-wrapper">
                                <input type="text" className="search-input" placeholder="Быстрый поиск" />
                                <img src={Magnifier} alt="" className="search-icon" />
                            </div>
                        </div>
                        {exportModal ? (
                            <div className="payment__modal">
                                <div className="modal__block payment-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">PDF</div>
                                </div>
                                <div className="modal__block payment-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">Excel</div>
                                </div>
                                <div className="modal__block payment-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">LibreOffice</div>
                                </div>
                                <div className="modal__block payment__block--left">
                                    <div className="block__button">Скачать</div>
                                </div>
                            </div>
                        ) : null}
                    </header>
                    <main className="payment__table">
                        <Popover>
                            <div className="payment__frame">
                                <div className="frame__table">
                                    {headersPayment.map((header, i) => {
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
                                                            <div className="search-wrapper" style={{ justifyContent: 'center' }}>
                                                                {i === 0 ? (
                                                                    <DateTimeRangePicker
                                                                        disableClock
                                                                        format="dd.MM"
                                                                        onChange={setValue}
                                                                        value={value}
                                                                    />
                                                                ) : null}
                                                                <div className="search-icon" onClick={sendDateFilter}>
                                                                    {i === 0 ? <img src={Magnifier} alt="" /> : null}
                                                                    {/* {i <= 1 ? null /* <img src={Magnifier} alt="" />  : (
                                                                        <img src={Arrow} alt="" />
                                                                    )} */}
                                                                </div>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                    {tablePayment.map((index) => {
                                                        return (
                                                            <div key={index.cashFlowUuid} className="column__item">
                                                                {/* {i === 0 && (
                                                                <div
                                                                    className="item__icon"
                                                                    // onClick={() => handleChangePlusItems(index.cashFlowUuid)}
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

export default PaymentComponent;
