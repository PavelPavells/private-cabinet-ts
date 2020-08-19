/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataPriceList, priceListSetInput } from '../../../../actions/priceListActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { PriceListReq } from '../../../../constants/pricelListTypes';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

/**
 * ********** импорт логотипов для поля ввода **********
 * */
import Magnifier from '../../../../images/magnifier.svg';
import Arrow from '../../../../images/arrow_input.svg';
import sortingColumn from '../../../../images/sorting_column.svg';
import filterColumn from '../../../../images/filter.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './PriceList.scss';

const PriceListComponent = () => {
    const [page] = useState(0);
    const [limit] = useState(50);
    const [sortBy, setSortBy] = useState(null);
    const [sortDirection, setSortDirection] = useState(0);
    const [groupBy] = useState(null);
    const [findBy] = useState(null);
    const [findValue] = useState(null);
    const [selectedHeader, setSelectedHeader] = useState(1);
    const [exportModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);

    /**
     * ********** Импорт состояния pricelist из Redux **********
     * */
    const { headersPriceList, tablePriceList, inputs, isFetching } = useSelector((state: PersonalCabinet) => state.pricelist, shallowEqual);
    const { user } = useSelector((state: PersonalCabinet) => state.auth, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        // @ts-ignore
        const request: PriceListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid: user };
        dispatch(fetchDataPriceList(request));
    }, []);

    // useEffect(() => {
    //     if (isFetching) {
    //         const request: PriceListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid: user };
    //         dispatch(fetchDataPriceList(request));
    //     }
    // }, [isFetching]);
    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */
    // const handleExportDocumentModal = (event: React.SyntheticEvent) => {
    //     event.currentTarget.classList.toggle('buttons--active');
    //     setExportModal(!exportModal);
    // };

    /**
     * Открыть/Закрыть инпуты быстрого поиска
     * */
    const togglerHideShowQuickSearchInput = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setFilterModal(!filterModal);
    };

    /**
     * Фильтрация по колонкам
     * */
    // @ts-ignore
    const filterOnColumns = async (fieldName) => {
        setSortBy(fieldName);
        setSortDirection(+!sortDirection);
        const filter: PriceListReq = {
            page,
            limit,
            sortBy,
            sortDirection,
            groupBy,
            findValue,
            findBy,
            uuid: user
        };
        dispatch(fetchDataPriceList(filter));
    };

    /**
     * Клик вне елемента
     * */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const useOutsideHandleClick = (ref: any, callback: any) => {
        const handleClick = (event: React.SyntheticEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        useEffect(() => {
            // @ts-ignore
            document.addEventListener('click', handleClick);
            return () => {
                // @ts-ignore
                document.removeEventListener('click', handleClick);
            };
        });
    };

    if (inputs && headersPriceList && tablePriceList) {
        return (
            <section className="main-content">
                <div className="pricelist">
                    <header className="pricelist__heading">
                        <div className="heading__text">Прайс-лист продукции CARDDEX</div>
                        <div className="heading__buttons">
                            <div className="buttons buttons__filter" onClick={togglerHideShowQuickSearchInput}>
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
                            <div className="pricelist__modal">
                                <div className="modal__block pricelist-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">PDF</div>
                                </div>
                                <div className="modal__block pricelist-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">Excel</div>
                                </div>
                                <div className="modal__block pricelist-block">
                                    <input type="checkbox" className="block__checkbox" />
                                    <div className="block__text">LibreOffice</div>
                                </div>
                                <div className="modal__block pricelist__block--left">
                                    <div className="block__button">Скачать</div>
                                </div>
                            </div>
                        ) : null}
                    </header>
                    <main className="pricelist__table">
                        <div className="pricelist__frame">
                            <div className="frame__table">
                                {headersPriceList.map((header, i) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.fieldName} className="table__column">
                                                <div className="frame__caption">
                                                    <div
                                                        className={selectedHeader === i ? 'wrap__index wrap__index--active' : 'wrap__index'}
                                                        onClick={() => {
                                                            filterOnColumns(header.fieldName);
                                                        }}
                                                    >
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
                                                                value={inputs[header.fieldName]}
                                                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                                    dispatch(
                                                                        priceListSetInput({
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
                                                {tablePriceList.map((index) => {
                                                    return (
                                                        <div key={index.itemPriceUuid} className="column__item">
                                                            {/* {i === 0 && (
                                                                <div
                                                                    className="item__icon"
                                                                    // onClick={() => handleChangePlusItems(index.item_price_uuid)}
                                                                />
                                                            )} */}
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
            </section>
        );
    }
    return <Loader />;
};

export default PriceListComponent;
