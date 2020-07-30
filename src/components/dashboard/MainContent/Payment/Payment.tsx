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
import Search from '../../../../images/search.svg';

/**
 * ********** Импорт файлов стилей **********
 * */
import './Payment.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const PaymentComponent = ({ uuid }) => {
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
    const [offset] = useState(0);
    const [size] = useState(30);
    const [exportModal, setExportModal] = useState(false);

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
        const request: PaymentListReq = { offset, size, login: uuid };
        dispatch(fetchDataPayment(request));
    }, []);

    /**
     * Открыть/Закрыть модальное окно скачивания таблицы
     * */
    const handleExportDocumentModal = (event: MouseEvent | any) => {
        setExportModal(!exportModal);
        const element = document.getElementsByClassName('buttons__export');
        if (event.target !== element) {
            setExportModal(!exportModal);
        }
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
    //         this.props.fetchDataPayment(data);
    //     });
    // };

    /** ********** FIRST PAGE PAYMENT PAGINATION ********** */
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
    //     this.props.fetchDataPayment(data);
    // };

    /** ********** PREVIOUS PAGE PAYMENT PAGINATION ********** */
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
    //             this.props.fetchDataPayment(data);
    //         }
    //     );
    // };

    /** ********** NEXT PAGE PAYMENT PAGINATION ********** */
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
    //                 startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //                 // @ts-ignore
    //                 endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPayment(data);
    //         }
    //     );
    // };

    /** ********** LAST PAGE PAYMENT PAGINATION ********** */
    // getLastPage = () => {
    // console.log('NOT PAGE FIELD');
    // const { payload } = this.props.pricelist.data;
    // this.setState({ page: payload.page });
    // let data =  {
    //    offset: this.state.offset,
    //    size: this.state.optionFilter,
    //    login: this.props.data,
    //    startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //    endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //  }
    //  this.props.fetchDataLastPagePayment(data);
    // };

    /** ********** REFRESH DATA FOR PAYMENT TABLE ********** */
    // handleRefreshData = () => {
    //     const data = {
    //         offset: this.state.page,
    //         size: this.state.optionFilter,
    //         // @ts-ignore
    //         login: this.props.data
    //     };
    //     // @ts-ignore
    //     this.props.fetchDataPayment(data);
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
    //       startDate: this.state.startDate ? this.state.startDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null, // eslint-disable-line
    //                 // @ts-ignore
    //       endDate: this.state.endDate ? this.state.endDate._d.toISOString().replace(/([^T]+)T([^\.]+).*/g, "$1 $2") : null // eslint-disable-line
    //             };
    //             // @ts-ignore
    //             this.props.fetchDataPayment(data);
    //         }
    //     );
    // };
    if (!isFetching && headersPayment && tablePayment) {
        return (
            <main className="main-content">
                <div className="payment">
                    <header className="payment__heading payment-heading">
                        <div className="payment-heading__text">Прайс-лист продукции CARDDEX</div>
                        <div className="payment-heading__buttons payment-buttons">
                            <div className="payment-buttons__filter">Быстрый фильтр</div>
                            <div className="payment-buttons__export payment-export">
                                <div className="payment-export__text" onClick={handleExportDocumentModal}>
                                    Экспортировать документ
                                </div>
                            </div>
                        </div>
                        {exportModal ? (
                            <div className="payment-heading__modal payment-modal">
                                <div className="payment-modal__block payment-block">
                                    <input type="checkbox" className="payment-block__checkbox" />
                                    <div className="payment-block__text">PDF</div>
                                </div>
                                <div className="payment-modal__block pricelist-block">
                                    <input type="checkbox" className="payment-block__checkbox" />
                                    <div className="payment-block__text">Excel</div>
                                </div>
                                <div className="payment-modal__block payment-block">
                                    <input type="checkbox" className="payment-block__checkbox" />
                                    <div className="payment-block__text">LibreOffice</div>
                                </div>
                                <div className="payment-modal__block payment-modal__block--left">
                                    <div className="payment-block__button">Скачать</div>
                                </div>
                            </div>
                        ) : null}
                    </header>
                    <main className="payment__main payment-main">
                        <div className="payment-main__frame payment-frame">
                            <div className="payment-frame__caption payment-caption">
                                {headersPayment.map((header: any) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.field_name} className="payment-caption__wrap caption-wrap">
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
                            <div className="payment-frame__table payment-table">
                                {headersPayment.map((header: any, i: any) => {
                                    if (header.visible) {
                                        return (
                                            <div key={header.field_name} className="payment-table__column payment-column">
                                                {tablePayment.map((index: any) => {
                                                    return (
                                                        <div key={index.item_price_uuid} className="payment-column__item payment-item">
                                                            {i === 0 && (
                                                                <div
                                                                    className="payment-item__icon"
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

export default PaymentComponent;
