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
    const [offset] = useState(0);
    const [size] = useState(30);
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
        const request: PaymentListReq = { offset, size, login: uuid };
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
     * Активайия/Деактивация филтра колонки
     * */
    const toggleColumnFilter = (event: React.SyntheticEvent) => {
        event.currentTarget.classList.toggle('wrap__index--active');
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
                                            <div key={header.field_name} className="caption__wrap">
                                                <div className="wrap__index" onClick={toggleColumnFilter}>
                                                    <div className="index__text">{header.display_name}</div>
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
                                            <div key={header.field_name} className="table__column">
                                                {tablePayment.map((index) => {
                                                    return (
                                                        <div key={index.cash_flow_uuid} className="column__item">
                                                            {i === 0 && (
                                                                <div
                                                                    className="item__icon"
                                                                    // onClick={() => handleChangePlusItems(index.cash_flow_uuid)}
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
