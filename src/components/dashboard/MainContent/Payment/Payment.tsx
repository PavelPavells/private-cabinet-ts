/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import 'react-dates/initialize';
// @ts-ignore
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ru';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataPayment } from '../../../../actions/paymentActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { PaymentListReq } from '../../../../constants/paymentsTypes';

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
import './Payment.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const PaymentComponent = ({ uuid }) => {
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
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
    const { headersPayment, tablePayment, isFetching } = useSelector((state: PersonalCabinet) => state.payment, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        const request: PaymentListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid };
        dispatch(fetchDataPayment(request));
    }, []);

    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */
    const handleExportDocumentModal = (event: MouseEvent | any) => {
        event.currentTarget.classList.toggle('buttons--active');
        setExportModal(!exportModal);
        const element = document.getElementsByClassName('buttons__export');
        if (event.target !== element) {
            setExportModal(!exportModal);
        }
    };

    /**
     * Открыть/Закрыть инпуты быстрого поиска
     * */
    const togglerHideShowQuicSearchInput = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setFilterModal(!filterModal);
    };

    /**
     * Активация/Деактивация фильтра колонки
     * */
    const toggleColumnFilter = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('wrap__index--active');
    };

    if (!isFetching && headersPayment && tablePayment) {
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
                        <div className="payment__frame">
                            <div className="frame__caption">
                                {headersPayment.map((header, i) => {
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
                                                        <input
                                                            type="text"
                                                            className="search-input"
                                                            // value={inputs[header.field_name]}
                                                            // onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                            //    dispatch(priceListSetInput({ key: header.field_name, value: event.target.value }));
                                                            // }}
                                                        />
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
                                {headersPayment.map((header, i) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.fieldName} className="table__column">
                                                {tablePayment.map((index) => {
                                                    return (
                                                        <div key={index.cashFlowUuid} className="column__item">
                                                            {i === 0 && (
                                                                <div
                                                                    className="item__icon"
                                                                    // onClick={() => handleChangePlusItems(index.cashFlowUuid)}
                                                                />
                                                            )}
                                                            {
                                                                // @ts-ignore
                                                                index[header.fieldName]
                                                            }
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

export default PaymentComponent;
