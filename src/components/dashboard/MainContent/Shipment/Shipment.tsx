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
import { fetchDataShipment } from '../../../../actions/shipmentActions';

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
 * ********** импорт лого (лупа) для поля ввода **********
 * */
import Search from '../../../../images/search.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Shipment.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const ShipmentComponent = ({ uuid }) => {
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
    const [offset] = useState(0);
    const [size] = useState(30);
    const [exportModal, setExportModal] = useState(false);

    /**
     * ********** Импорт состояния shipment из Redux **********
     * */
    const { headersShipment, tableShipment, isFetching } = useSelector((state: PersonalCabinet) => state.shipment, shallowEqual);

    /**
     * Отправка действий для изменения на сервере
     * */
    const dispatch = useDispatch();

    /**
     * запрос данных с сервера
     * */
    useEffect(() => {
        const request: ShipmentListReq = { offset, size, login: uuid };
        dispatch(fetchDataShipment(request));
    }, []);

    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */
    const handleExportDocumentModal = () => {
        setExportModal(!exportModal);
        // const element = document.getElementsByClassName('buttons__export');
        // if (event.target !== element) {
        //    setExportModal(false);
        // }
    };
    /**
     * Открыть/Закрыть дополнительные поля таблицы при клике на "+"
     * */
    // const handleChangePlusItems = (key: string) => {
    //    console.log(key)
    // };

    /** ********** CHANGE DATES FOR SEARCH ********** */
    // @ts-ignore
    // onDatesChange = ({ startDate, endDate }) => {
    //     this.setState({ startDate, endDate }, () => {
    //         const data = {
    //             offset: this.state.offset,
    //             size: this.state.optionFilter,
    //             // @ts-ignore
    //     startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //             // @ts-ignore
    //     endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //             // @ts-ignore
    //             login: this.props.data
    //         };
    //         // @ts-ignore
    //         this.props.fetchDataShipment(data);
    //     });
    // };

    /** ********** FIRST PAGE SHIPMENT PAGINATION ********** */
    // getFirstPage = () => {
    //     this.setState({ page: 0 });
    //     const data = {
    //         offset: 0,
    //         size: this.state.optionFilter,
    //         // @ts-ignore
    //         login: this.props.data,
    //         // @ts-ignore
    //   startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //         // @ts-ignore
    //   endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //     };
    //     // @ts-ignore
    //     this.props.fetchDataShipment(data);
    // };

    /** ********** PREVIOUS PAGE SHIPMENT PAGINATION ********** */
    // getPreviousPage = () => {
    //     this.setState(
    //         (prevState) => {
    //             // @ts-ignore
    //             return prevState.page > 0 ? { page: prevState.page - 1 } : null;
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 // @ts-ignore
    //                 login: this.props.data,
    //                 // @ts-ignore
    //       startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //                 // @ts-ignore
    //       endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataShipment(data);
    //         }
    //     );
    // };

    /** ********** NEXT PAGE SHIPMENT PAGINATION ********** */
    // getNextPage = () => {
    //     // const { payload } = this.props.pricelist.data;
    //     this.setState(
    //         (prevState) => {
    //             // return prevState.page >= 0 && prevState.page < payload.page ? ({ page: prevState.page + 1 }) : null;
    //             // @ts-ignore
    //             return prevState.page >= 0 ? { page: prevState.page + 1 } : null;
    //         },
    //         () => {
    //             const data = {
    //                 offset: this.state.page,
    //                 size: this.state.optionFilter,
    //                 // @ts-ignore
    //                 login: this.props.data,
    //                 // @ts-ignore
    //     startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //                 // @ts-ignore
    //     endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataShipment(data);
    //         }
    //     );
    // };

    /** ********** LAST PAGE SHIPMENT PAGINATION ********** */
    // getLastPage = () => {
    //     return console.log('No PAGE FIELD');
    //     // const { payload } = this.props.pricelist.data;
    //     // this.setState({ page: payload.page });
    //     // let data = {
    //     //  offset: this.state.offset,
    //     //  size: this.state.optionFilter,
    //     //  login: this.props.data,
    //     //  startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //     //  endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //     // }
    //     // this.props.fetchDataLastPageShipment(data);
    // };

    /** ********** REFRESH DATA FOR SHIPMENT TABLE ********** */
    // handleRefreshData = () => {
    //     const data = {
    //         offset: this.state.page,
    //         size: this.state.optionFilter,
    //         // @ts-ignore
    //         login: this.props.data
    //     };
    //     // @ts-ignore
    //     this.props.fetchDataShipment(data);
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
    //                 // @ts-ignore
    //                 login: this.props.data,
    //                 // @ts-ignore
    //                 startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //                 // @ts-ignore
    //                 endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataShipment(data);
    //         }
    //     );
    // };
    if (!isFetching && headersShipment && tableShipment) {
        return (
            <main className="main-content">
                <div className="shipment">
                    <header className="shipment__heading shipment-heading">
                        <div className="shipment-heading__text">Прайс-лист продукции CARDDEX</div>
                        <div className="shipment-heading__buttons shipment-buttons">
                            <div className="shipment-buttons__filter">Быстрый фильтр</div>
                            <div className="shipment-buttons__export shipment-export">
                                <div className="shipment-export__text" onClick={handleExportDocumentModal}>
                                    Экспортировать документ
                                </div>
                            </div>
                        </div>
                        {exportModal ? (
                            <div className="shipment-heading__modal shipment-modal">
                                <div className="shipment-modal__block shipment-block">
                                    <input type="checkbox" className="shipment-block__checkbox" />
                                    <div className="shipment-block__text">PDF</div>
                                </div>
                                <div className="shipment-modal__block shipment-block">
                                    <input type="checkbox" className="shipment-block__checkbox" />
                                    <div className="shipment-block__text">Excel</div>
                                </div>
                                <div className="shipment-modal__block shipment-block">
                                    <input type="checkbox" className="shipment-block__checkbox" />
                                    <div className="shipment-block__text">LibreOffice</div>
                                </div>
                                <div className="shipment-modal__block shipment-modal__block--left">
                                    <div className="shipment-block__button">Скачать</div>
                                </div>
                            </div>
                        ) : null}
                    </header>
                    <main className="shipment__main shipment-main">
                        <div className="shipment-main__frame shipment-frame">
                            <div className="shipment-frame__caption shipment-caption">
                                {headersShipment.map((header: any) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.field_name} className="shipment-caption__wrap caption-wrap">
                                                <div className="caption-wrap__index caption-index">
                                                    <div className="caption-index__text">{header.display_name}</div>
                                                    <div className="caption-index__icon" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="caption-wrap__input"
                                                    // value={inputs[header.field_name]}
                                                    // onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                                    //    dispatch(priceListSetInput({ key: header.field_name, value: event.target.value }));
                                                    // }}
                                                />
                                                <img src={Search} alt="" className="caption-wrap__icon" />
                                            </div>
                                        );
                                    }
                                    return '';
                                })}
                            </div>
                            <div className="shipment-frame__table shipment-table">
                                {headersShipment.map((header: any, i: any) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.field_name} className="shipment-table__column shipment-column">
                                                {tableShipment.map((index: any) => {
                                                    return (
                                                        <div key={index.item_price_uuid} className="shipment-column__item shipment-item">
                                                            {i === 0 && (
                                                                <div
                                                                    className="shipment-item__icon"
                                                                    // onClick={() => handleChangePlusItems(index.item_price_uuid)}
                                                                />
                                                            )}
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

export default ShipmentComponent;
