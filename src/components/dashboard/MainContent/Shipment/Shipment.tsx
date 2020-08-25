/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import 'react-dates/initialize';
// @ts-ignore
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ru';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataShipment, shipmentSetInputs } from '../../../../actions/shipmentActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { ShipmentListReq } from '../../../../constants/shipmentTypes';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

/**
 * ********** импорт логотипов для поля ввода **********
 * */
import Magnifier from '../../../../images/magnifier.svg';
import Arrow from '../../../../images/arrow_input.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Shipment.scss';

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

const ShipmentComponent = () => {
    const [page] = useState(0);
    const [limit] = useState(5000);
    const [sortBy] = useState(null);
    const [sortDirection, setSortDirection] = useState(0);
    const [groupBy] = useState(null);
    const [findBy] = useState(null);
    const [findValue] = useState(null);
    const [selectedHeader, setSelectedHeader] = useState(1);
    const [exportModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);

    /**
     * ********** Импорт состояния shipment из Redux **********
     * */
    const { headersShipment, tableShipment, inputs } = useSelector((state: PersonalCabinet) => state.shipment, shallowEqual);
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
        const request: ShipmentListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid: user };
        dispatch(fetchDataShipment(request));
    }, []);

    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */

    // const handleExportDocumentModal = (event: React.SyntheticEvent) => {
    // event.currentTarget.classList.toggle('buttons--active');
    // setExportModal(!exportModal);
    // const element = document.getElementsByClassName('buttons__export');
    // if (event.target !== element) {
    //    setExportModal(false);
    // }
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
        const filter: ShipmentListReq = {
            page,
            limit,
            sortBy: fieldName,
            sortDirection: prevSortDirection,
            groupBy,
            findValue,
            findBy,
            uuid: user
        };
        dispatch(fetchDataShipment(filter));
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
                                {/*
                        <div className="buttons buttons__export" onClick={handleExportDocumentModal}>
                            Экспортировать документ
                        </div>
                        */}
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
                        <div className="shipment__frame">
                            <div className="frame__table">
                                {headersShipment.map((header, i) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.fieldName} className="table__column">
                                                <div className="frame__caption">
                                                    <div
                                                        className={selectedHeader === i ? 'wrap__index wrap__index--active' : 'wrap__index'}
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
                                                            <input
                                                                type="text"
                                                                className="search-input"
                                                                value={inputs[header.fieldName]}
                                                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                                    dispatch(
                                                                        shipmentSetInputs({
                                                                            key: header.fieldName,
                                                                            value: event.target.value
                                                                        })
                                                                    );
                                                                }}
                                                            />
                                                            <div className="search-icon">
                                                                {i <= 1 ? <img src={Magnifier} alt="" /> : <img src={Arrow} alt="" />}
                                                            </div>
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
                    </main>
                </div>
            </main>
        );
    }
    return <Loader />;
};

export default ShipmentComponent;
