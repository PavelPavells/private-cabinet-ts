/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
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

// @ts-ignore
// eslint-disable-next-line react/prop-types
const PriceListComponent = ({ uuid }) => {
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
    const { headersPriceList, tablePriceList, inputs, isFetching } = useSelector((state: PersonalCabinet) => state.pricelist, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * Ref для отлавливания клика вне компонента
     * */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const innerRef = useRef();

    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        const request: PriceListReq = { page, limit, sortBy, sortDirection, groupBy, findBy, findValue, uuid };
        dispatch(fetchDataPriceList(request));
    }, []);

    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */
    const handleExportDocumentModal = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setExportModal(!exportModal);
    };

    /**
     * Открыть/Закрыть инпуты быстрого поиска
     * */
    const togglerHideShowQuickSearchInput = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('buttons--active');
        setFilterModal(!filterModal);
    };

    /**
     * Активайия/Деактивация филтра колонки
     * */
    const toggleColumnFilter = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('wrap__index--active');
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

    if (!isFetching && inputs && headersPriceList && tablePriceList) {
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
                            <div className="frame__caption">
                                {headersPriceList.map((header, i) => {
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
                                                            value={inputs[header.fieldName]}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                                dispatch(
                                                                    priceListSetInput({ key: header.fieldName, value: event.target.value })
                                                                );
                                                            }}
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
                                {headersPriceList.map((header, i) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.fieldName} className="table__column">
                                                {tablePriceList.map((index) => {
                                                    return (
                                                        <div key={index.itemPriceUuid} className="column__item">
                                                            {i === 0 && (
                                                                <div
                                                                    className="item__icon"
                                                                    // onClick={() => handleChangePlusItems(index.item_price_uuid)}
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
            </section>
        );
    }
    return <Loader />;
};

export default PriceListComponent;
