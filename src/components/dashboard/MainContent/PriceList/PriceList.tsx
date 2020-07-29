/**
 * ********** Импорт основных библиотек из NPM **********
 * */
import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

/**
 * ********** Импорт экшенов **********
 * */
import { fetchDataPriceList, priceListSetInput } from '../../../../actions/priceListActions';

/**
 * ********** Импорт типов **********
 * */
import { PersonalCabinet } from '../../../../store/store';
import { PriceListReq } from '../../../../constants/types';

/**
 * ********** Импорт LOADER из __UTILS__ **********
 * */
import Loader from '../../../../__utils__/Spinner';

/**
 * ********** импорт лого (лупа) для поля ввода **********
 * */
import Search from '../../../../images/search.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './PriceList.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const PriceListComponent = ({ uuid }) => {
    const [offset] = useState(0);
    const [size] = useState(30);
    const [exportModal, setExportModal] = useState(false);

    /**
     * ********** Импорт состояния pricelist из Redux **********
     * */
    const { headersPriceList, tablePriceList, inputs, isFetching } = useSelector((state: PersonalCabinet) => state.pricelist, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        const request: PriceListReq = { offset, size, login: uuid };
        dispatch(fetchDataPriceList(request));
    }, []);

    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */
    const handleExportModal = (event: MouseEvent | any) => {
        setExportModal(!exportModal);
        const element = document.getElementsByClassName('buttons__export');
        if (event.target !== element) {
            setExportModal(false);
        }
    };

    /** ********** SEND TEXT FOR SEARCH ********** */
    // const handleSendSearch = () => {
    //     const data = {
    //         offset: page,
    //         size: optionFilter,
    //         value: search,
    //         // @ts-ignore
    //         // login: data,
    //         search
    //     };
    //     // @ts-ignore
    //     fetchDataPriceList(data);
    // };

    /** ********** FIRST PAGE PRICE LIST PAGINATION ********** */
    // const getFirstPage = () => {
    //     setPage(0);
    //     const data = {
    //         offset: 0,
    //         size: optionFilter,
    //         value: search
    //         // @ts-ignore
    //         // login: this.props.data
    //     };
    //     // @ts-ignore
    //     fetchDataPriceList(data);
    // };

    /** ********** PREVIOUS PAGE PRICE LIST PAGINATION ********** */
    // const getPreviousPage = () => {
    //     this.setState(
    //         (prevState) => {
    //             // @ts-ignore
    //             return prevState.page > 0 ? { page: prevState.page - 1 } : null;
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 value: this.state.search,
    //                 // @ts-ignore
    //                 login: this.props.data
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPriceList(data);
    //         }
    //     );
    // };

    /** ********** NEXT PAGE PRICE LIST PAGINATION ********** */
    // getNextPage = () => {
    //     // @ts-ignore
    //     const { payload } = this.props.pricelist.data;
    //     this.setState(
    //         (prevState) => {
    //             // @ts-ignore
    //             return prevState.page >= 0 && prevState.page < payload.page ? { page: prevState.page + 1 } : null;
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 value: this.state.search,
    //                 // @ts-ignore
    //                 login: this.props.data
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPriceList(data);
    //         }
    //     );
    // };

    /** ********** LAST PAGE PRICE LIST PAGINATION ********** */
    // getLastPage = () => {
    //     // @ts-ignore
    //     const { payload } = this.props.pricelist.data;
    //     this.setState({ page: payload.page });
    //     const data = {
    //         offset: this.state.offset,
    //         size: this.state.optionFilter,
    //         // @ts-ignore
    //         login: this.props.data,
    //         value: this.state.search
    //     };
    //     // @ts-ignore
    //     this.props.fetchDataLastPagePriceList(data);
    // };

    /** ********** REFRESH DATA FOR PRICE LIST TABLE ********** */
    // handleRefreshData = () => {
    //     const data = {
    //         offset: this.state.page,
    //         size: this.state.optionFilter,
    //         // @ts-ignore
    //         login: this.props.data
    //     };
    //     // @ts-ignore
    //     this.props.fetchDataPriceList(data);
    // };

    /** ********** FILTER FOR VISION DATA IN TABLE ********** */
    // @ts-ignore
    // handleOptionFilter = (event) => {
    //     const elem = event.target.value;
    //     this.setState(
    //         {
    //             optionFilter: elem
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 value: this.state.search,
    //                 // @ts-ignore
    //                 login: this.props.data
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPriceList(data);
    //         }
    //     );
    // };
    if (!isFetching && inputs && headersPriceList && tablePriceList) {
        return (
            <main className="main-content">
                <div className="pricelist">
                    <header className="pricelist__heading heading">
                        <div className="heading__text">Прайс-лист продукции CARDDEX</div>
                        <div className="heading__buttons buttons">
                            <div className="buttons__filter">Быстрый фильтр</div>
                            <div className="buttons__export export">
                                <div className="export__text" onClick={handleExportModal}>
                                    Экспортировать документ
                                </div>
                            </div>
                        </div>
                        {exportModal ? (
                            <div className="heading__modal modal">
                                <div className="modal__block modal-block">
                                    <input type="checkbox" className="modal-block__pdf" />
                                    <div className="modal-block__text">PDF</div>
                                </div>
                                <div className="modal__block modal-block">
                                    <input type="checkbox" className="modal-block__checkbox" />
                                    <div className="modal-block__text">Excel</div>
                                </div>
                                <div className="modal__block modal-block">
                                    <input type="checkbox" className="modal-block__checkbox" />
                                    <div className="modal-block__text">LibreOffice</div>
                                </div>
                                <div className="modal__block modal-block modal__block--left">
                                    <div className="modal-block__button">Скачать</div>
                                </div>
                            </div>
                        ) : null}
                    </header>
                    <main className="pricelist__main pricelist-main">
                        <div className="pricelist-main__frame frame">
                            <div className="frame__caption frame-caption">
                                {headersPriceList.map((header) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.field_name} className="frame-caption__wrap wrap">
                                                <div className="wrap__index index">
                                                    <div className="index__text">{header.display_name}</div>
                                                    <div className="index__icon" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="wrap__input"
                                                    value={inputs[header.field_name]}
                                                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                        dispatch(priceListSetInput({ key: header.field_name, value: event.target.value }));
                                                    }}
                                                />
                                                <img src={Search} alt="" className="wrap__icon" />
                                            </div>
                                        );
                                    }
                                    return '';
                                })}
                            </div>
                            <div className="frame__table frame-table">
                                {headersPriceList.map((header, i) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.field_name} className="frame-table__column column">
                                                {tablePriceList.map((index) => {
                                                    return (
                                                        <div key={index.item_price_uuid} className="column__item">
                                                            {i === 0 && <div className="item__icon" />}
                                                            {
                                                                // @ts-ignore
                                                                index[header.field_name]
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

export default PriceListComponent;
